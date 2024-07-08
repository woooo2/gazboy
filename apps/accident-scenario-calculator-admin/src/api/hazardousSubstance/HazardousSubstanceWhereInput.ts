import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AccidentScenarioListRelationFilter } from "../accidentScenario/AccidentScenarioListRelationFilter";

export type HazardousSubstanceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  boilingPoint?: FloatNullableFilter;
  flammabilityLimit?: FloatNullableFilter;
  mass?: FloatNullableFilter;
  typeField?: StringNullableFilter;
  accidentScenarios?: AccidentScenarioListRelationFilter;
};
