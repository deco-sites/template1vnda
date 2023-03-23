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
        <div class="grid gap-8 my-24 mx-auto max-w-[1440px] px-[5%] w-full md:grid-cols-3">
            {categories.map((category) => {
                return (
                    <div class="relative">
                        <a href={category.url}>
                            <img src={category.image} alt="" />
                        </a>
                        <div class="absolute flex flex-col py-8 px-[10%] bottom-0 left-0">
                            <p class="mb-4 text-3xl font-berkshire font-normal text-center">{category.name}</p>
                            <p class="mb-4 font-roboto text-base text-center">{category.text}</p>
                            <div class="flex justify-center">
                                <a class="relative uppercase font-roboto text-base text-center group" href={category.url}>{category.call}
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