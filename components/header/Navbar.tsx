import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import HeaderSearchMenu from "$store/islands/HeaderSearchMenu.tsx";

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] w-full px-2 gap-2`}
      >
        <HeaderButton variant="menu" />

        <a
          href="/"
          class={`flex-grow inline-flex items-center justify-center min-h-[${navbarHeight}]`}
          aria-label="Store logo"
        >
          <Icon id="Logo" width={126} height={16} />
        </a>

        <div class="flex gap-1">
          <HeaderButton variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      
      <div class="flex flex-col">
        <div class="hidden md:grid grid-cols-3 items-center w-full pl-2 pr-3">
          <div>
            <HeaderButton variant="search" />
            <HeaderSearchMenu searchbar={searchbar} />
          </div>
          <div class="justify-self-center">
            <a href="/" aria-label="Store logo" class="px-4 py-3">
              <Icon id="Logo" width={126} height={16} />
            </a>
          </div>
          <div class="flex justify-self-end">
            <a href="/" aria-label="Store logo" class="px-4 py-3 font-roboto text-base">
              MINHA CONTA
            </a>
            <a href="/" aria-label="Store logo" class="px-4 py-3 font-roboto text-base">
              MINHA SACOLA
            </a>
            <HeaderButton variant="cart" />
          </div>
        </div>
        <div class="hidden md:flex flex-row justify-center items-center border-b-1 border-default w-full pl-2 pr-3">
          {items.map((item) => <NavItem item={item} />)}
        </div>
      </div>
    </>
  );
}

export default Navbar;
