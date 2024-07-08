import { SortOrder } from "../../util/SortOrder";

export type AccidentScenarioOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  thermalRadiationIntensity?: SortOrder;
  probabilityDamage?: SortOrder;
  pipelineId?: SortOrder;
  hazardousSubstanceId?: SortOrder;
};
