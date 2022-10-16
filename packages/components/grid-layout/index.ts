import { withInstall, withNoopInstall } from "@element3/utils";
import GridLayoutItem from "./src/grid-layout-item.vue";
import GridLayout from "./src/grid-layout.vue";

export const ElGridLayout = withInstall(GridLayout, {
  GridLayoutItem,
});
export const ElGridLayoutItem = withNoopInstall(GridLayoutItem);

export default ElGridLayout;
