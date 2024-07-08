import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AccidentScenarioListRelationFilter } from "../accidentScenario/AccidentScenarioListRelationFilter";

export type PipelineWhereInput = {
  id?: StringFilter;
  diameter?: FloatNullableFilter;
  length?: FloatNullableFilter;
  material?: StringNullableFilter;
  accidentScenarios?: AccidentScenarioListRelationFilter;
};
