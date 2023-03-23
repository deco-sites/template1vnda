import type { Image } from "deco-sites/std/components/types.ts";

export interface Banner {
    image: Image;
    name: string;
    text: string;
    call: string;
    url: string;
    imagePosition: 'left' | 'right';
}

export interface Props {
    banners: Banner[];
  }

export default function FixedBanner({ banners }: Props) {
  return (
    <section>
        <div class="flex flex-col mb-24 mx-auto max-w-[calc(1440px + 10%)] px-[5%] md:min-w-[992px] gap-10 md:gap-24">
            {banners.map((banner) => {
                return (
                    <div class={banner.imagePosition === 'left' ? "md:flex md:items-center" : "md:flex md:items-center flex-row-reverse"}>
                        <img src={banner.image} class="md:w-[60%]" alt="" />
                        <div class="flex flex-col mt-8 md:px-[5%]">
                            <p class="mb-4 text-3xl font-berkshire font-normal">{banner.name}</p>
                            <p class="mb-4 font-roboto text-base">{banner.text}</p>
                            <div class="flex">
                                <a class="relative uppercase font-roboto text-base group" href={banner.url}>{banner.call}
                                    <div class="absolute h-[2px] w-1/2 bg-base group-hover:w-full transition-[width] ease-in duration-500"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  );
}