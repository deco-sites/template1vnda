import Button from "$store/components/ui/Button.tsx";
import type { JSX } from "preact";

/**
 * This component renders the filter and selectors for skus.
 * TODO: Figure out a better name for this component.
 */

interface Abbreviation {
  variant: "abbreviation";
  content: string;
}

interface Color {
  variant: "color";
  content: keyof typeof colors;
}

interface Idempotent {
  variant: "idempotent";
  content: string;
}

const colors = {
  "azul-clara": "#87CEFA",
  "azul-marinho": "#000080",
  "branca": "#FFFFFF",
  "cinza": "#808080",
  "cinza-escura": "#A9A9A9",
  "laranja": "#FFA500",
  "marrom": "#A52A2A",
  "preta": "#161616",
  "verde-clara": "#90EE90",
  "vermelha": "#FF0000",
};

type Props =
  & JSX.IntrinsicElements["button"]
  & (Abbreviation | Color | Idempotent);

function Avatar({ variant, content, class: _class = "", ...btnProps }: Props) {
  if (variant === "color") {
    return (
      <button
        {...btnProps}
        class={`rounded-full border border-default w-8 h-8 ${_class}`}
        style={{ backgroundColor: colors[content] ?? "#FFF" }}
      />
    );
  }

  if (variant === "abbreviation") {
    return (
      <button
        {...btnProps}
        class={`text-[#0a0b0c] font-caption rounded-full border border-[#0a0b0c] w-8 h-8 flex justify-center items-center hover:bg-white hover:border-[#92bd00] hover:text-[#92bd00] disabled:text-[#92bd00] disabled:border-[#92bd00] ${_class}`}
      >
        {content.substring(0, 2)}
      </button>
    );
  }

  return <button {...btnProps} class={_class}>{content}</button>;
}

export default Avatar;
