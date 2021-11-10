import React from "react";
import { Flex } from "@creditas-ui/layout";
import { styled } from "@creditas-ui/system";
import { ifProp, selectTheme } from "@creditas-ui/utilities";

type LinkProps = {
  active?: boolean;
};

type LinkBoxProps = {
  active?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const LinkText = styled.span<LinkProps>`
  text-decoration: none;
  cursor: pointer;
  color: ${ifProp(
    "active",
    selectTheme("colors.neutral.100"),
    selectTheme("colors.neutral.60")
  )};
  font-size: ${selectTheme("fontSizes.sm")};
  font-weight: ${selectTheme("fontWeight.sm")};
  line-height: ${selectTheme("lineHeight.xs")};

  &:hover {
    color: ${selectTheme("colors.neutral.100")};
  }
`;

const LinkBox = styled(Flex)<LinkBoxProps>`
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  min-width: 60px;
  height: 76px;
  justify-content: center;
  padding: ${ifProp("active", "0 32px", "0 32px 0 16px")};
  border-top: 4px solid
    ${ifProp("active", selectTheme("colors.primary.40"), "transparent")};
`;

export { LinkText, LinkBox };
