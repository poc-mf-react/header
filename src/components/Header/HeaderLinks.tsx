import { Flex } from "@creditas-ui/layout";
import { MenuItem } from "../Menu";
import i18n from "../../i18n";

const HeaderLinks = (): JSX.Element => {
  return (
    <Flex>
      <MenuItem onClick={(): void => {}}>{i18n.t("header:main")}</MenuItem>
      <MenuItem onClick={(): void => {}}>{i18n.t("header:simulate")}</MenuItem>
      <MenuItem onClick={(): void => {}}>{i18n.t("header:at_work")}</MenuItem>
      <MenuItem onClick={(): void => {}}>{i18n.t("header:support")}</MenuItem>
    </Flex>
  );
};

export { HeaderLinks };
