import { AccidentScenarioCreateNestedManyWithoutHazardousSubstancesInput } from "./AccidentScenarioCreateNestedManyWithoutHazardousSubstancesInput";

export type HazardousSubstanceCreateInput = {
  name?: string | null;
  boilingPoint?: number | null;
  flammabilityLimit?: number | null;
  mass?: number | null;
  typeField?: string | null;
  accidentScenarios?: AccidentScenarioCreateNestedManyWithoutHazardousSubstancesInput;
};
