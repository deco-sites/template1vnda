import type { Image } from "deco-sites/std/components/types.ts";

export interface Category {
    image: Image;
    name: string;
    text: string;
    call: string;
    url: string;
}

export interface Props {
    categories: Category[];
  }

export default function Categories({ categories }: Props) {
  return (
    <section>
        <div class="grid gap-8 mb-24 mx-auto max-w-[calc(1440px + 10%)] px-[5%] w-full">
            {categories.map((category) => {
                return (
                    <div class="relative">
                        <a href={category.url}>
                            <img src={category.image} alt="" />
                        </a>
                        <div class="absolute flex flex-col py-8 px-[10%] bottom-0 left-0">
                            <p class="mb-4 text-[3.2rem] font-berkshire font-normal">{category.name}</p>
                            <p>{category.text}</p>
                            <div class="flex">
                                <a class="relative uppercase" href={category.url}>{category.call}
                                    <div class="absolute h-[2px] w-1/2 bg-base hover:w-full"></div>
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