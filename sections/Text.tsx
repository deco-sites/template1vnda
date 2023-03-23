import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
    title?: string;
    text: HTML;
}

export default function Text({title, text}: Props) {
    return (
      <section>
          <div class="mt-24 md:mt-44"></div>
          <p class="text-center text-3xl font-berkshire font-normal">{title}</p>
          <link
            href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
            rel="stylesheet"
        >
        </link>
            <div class="mx-auto max-w-[80rem] px-[5%] w-full font-roboto ql-editor" dangerouslySetInnerHTML={{ __html: text }}>
            </div>
      </section>
    );
  }