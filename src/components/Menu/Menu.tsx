import { MenuBackground, Nav } from './Menu.style';

interface MenuBaseProps {
  children?: React.ReactNode;
}

const Menu = ({ children, ...props }: MenuBaseProps): JSX.Element => (
  <MenuBackground>
    <Nav {...props}>{children}</Nav>
  </MenuBackground>
);

export { Menu };
