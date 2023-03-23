import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

/**
 * A simple, inplace sku selector to be displayed once the user hovers the product card
 * It takes the user to the pdp once the user clicks on a given sku. This is interesting to
 * remove JS from the frontend
 */
function Sizes(product: Product) {
  const possibilities = useVariantPossibilities(product);
  const options = Object.entries(
    possibilities["TAMANHO"] ?? possibilities["Tamanho"] ?? {},
  );

  return (
    <ul class="flex items-center gap-2">
      {options.map(([url, value]) => (
        <a href={url}>
          <Avatar
            class="bg-default"
            variant="abbreviation"
            content={value}
            disabled={url === product.url}
          />
        </a>
      ))}
    </ul>
  );
}

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
}

function ProductCard({ product, preload }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;
  const [front, back] = images ?? [];
  const { listPrice, price, seller } = useOffer(offers);

  return (
    <div
      id={`product-card-${productID}`}
      class="relative w-full group"
    >
      <a href={url} aria-label="product link">
        <div class="w-full">
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={200}
            height={279}
            class="rounded w-full group-hover:hidden"
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          <Image
            src={back?.url ?? front.url!}
            alt={back?.alternateName ?? front.alternateName}
            width={200}
            height={279}
            class="rounded w-full hidden group-hover:block"
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          {seller && (
            <div class="absolute bottom-0 hidden sm:group-hover:flex w-full">
              <div
                class="relative sm:group-hover:flex flex-col gap-4 w-full p-4 bg-opacity-10 border rounded-t"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
              >
                <div>
                  <a href={product.url} class="absolute border p-1 uppercase text-xs font-roboto right-4 top-2">+ detalhes</a>
                </div>
                <div class="text-[#0a0b0c] font-roboto font-semibold text-sm">
                  Tamanho
                </div>
                <Sizes {...product} />
                <Button as="a" href={product.url}>ADICIONAR AO CARRINHO</Button>
              </div>
            </div>
          )}
        </div>

        <div class="flex flex-col gap-1 py-2">
          <div class="font-roboto font-bold text-xl text-center">
            {name}
          </div>
          <div class="font-roboto font-bold text-xl text-center">
            {formatPrice(price, offers!.priceCurrency!)}
          </div>
        </div>
      </a>
      {seller && (
            <div class="flex w-full sm:hidden">
              <div
                class="relative flex flex-col gap-4 w-full p-4"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
              >
                <div class="text-[#0a0b0c] font-roboto font-semibold text-sm">
                  Tamanho
                </div>
                <Sizes {...product} />
                <div class="grid grid-cols-2 gap-2">
                  <a href={product.url} class="border p-1 uppercase text-xs font-roboto text-center text-[#0a0b0c] border-[#0a0b0c] flex items-center justify-center"><p>+ detalhes</p></a>
                  <a href={product.url} class="block border p-1 uppercase text-xs font-roboto text-center text-[#0a0b0c] border-[#0a0b0c]">adicionar ao carrinho</a>
                </div>
              </div>
            </div>
          )}
    </div>
  );
}

export default ProductCard;
