import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";
import { HazardousSubstanceWhereUniqueInput } from "../hazardousSubstance/HazardousSubstanceWhereUniqueInput";

export type AccidentScenarioUpdateInput = {
  thermalRadiationIntensity?: number | null;
  probabilityDamage?: number | null;
  pipeline?: PipelineWhereUniqueInput | null;
  hazardousSubstance?: HazardousSubstanceWhereUniqueInput | null;
};
