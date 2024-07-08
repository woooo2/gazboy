import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";
import { HazardousSubstanceWhereUniqueInput } from "../hazardousSubstance/HazardousSubstanceWhereUniqueInput";

export type AccidentScenarioWhereInput = {
  id?: StringFilter;
  thermalRadiationIntensity?: FloatNullableFilter;
  probabilityDamage?: FloatNullableFilter;
  pipeline?: PipelineWhereUniqueInput;
  hazardousSubstance?: HazardousSubstanceWhereUniqueInput;
};
