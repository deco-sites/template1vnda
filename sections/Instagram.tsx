import type { Image } from "deco-sites/std/components/types.ts";

export interface Props {
    name: string;
    text: string;
    images: Image[];
  }

export default function Instagram({ name, text, images }: Props) {
  return (
    <section>
        <div class="flex flex-col md:min-w-[992px]">
            <a href={'https://instagram.com/'+name} class="block mb-4 text-center text-3xl font-berkshire font-normal">@{name}</a>
            <p class="block mb-4 text-center font-roboto text-base">{text}</p>
            <div class="grid grid-cols-3 md:grid-cols-6">
                {images.map((image) => {
                    return (
                        <img src={image} alt="" class="w-full"/>
                    )
                })}
            </div>
        </div>
    </section>
  );
}