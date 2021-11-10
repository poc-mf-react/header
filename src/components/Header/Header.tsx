import { Menu, MenuBrand } from "../Menu";
import { HeaderLinks } from "./HeaderLinks";

const Header = () => {
  return (
    <Menu>
      <MenuBrand />
      <HeaderLinks />
    </Menu>
  );
};

export { Header };
