import { AccidentScenarioUpdateManyWithoutHazardousSubstancesInput } from "./AccidentScenarioUpdateManyWithoutHazardousSubstancesInput";

export type HazardousSubstanceUpdateInput = {
  name?: string | null;
  boilingPoint?: number | null;
  flammabilityLimit?: number | null;
  mass?: number | null;
  typeField?: string | null;
  accidentScenarios?: AccidentScenarioUpdateManyWithoutHazardousSubstancesInput;
};
