import { SortOrder } from "../../util/SortOrder";

export type HazardousSubstanceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  boilingPoint?: SortOrder;
  flammabilityLimit?: SortOrder;
  mass?: SortOrder;
  typeField?: SortOrder;
};
