import { styled } from '@creditas-ui/system';
import { selectTheme } from '@creditas-ui/utilities';

const MenuBackground = styled.div`
  background: ${selectTheme('colors.neutral.0')};
  display: flex;
  width: 100%;
  height: 80px;
  position: fixed;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  height: 80px;
  align-items: center;
  padding: 0 65px;
  box-sizing: border-box;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
`;

export { MenuBackground, Nav };
