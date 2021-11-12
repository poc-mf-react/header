import React from 'react';
import { LinkText, LinkBox } from './MenuItem.style';

type MenuItemProps = {
  children: React.ReactNode;
  active?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const MenuItem = ({
  children,
  active,
  onClick,
}: MenuItemProps): JSX.Element => (
  <LinkBox active={active} onClick={onClick}>
    <LinkText active={active}>{children}</LinkText>
  </LinkBox>
);

export { MenuItem };
