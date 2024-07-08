import { SortOrder } from "../../util/SortOrder";

export type PipelineOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  diameter?: SortOrder;
  length?: SortOrder;
  material?: SortOrder;
};
