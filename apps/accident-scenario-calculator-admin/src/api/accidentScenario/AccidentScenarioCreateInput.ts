import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";
import { HazardousSubstanceWhereUniqueInput } from "../hazardousSubstance/HazardousSubstanceWhereUniqueInput";

export type AccidentScenarioCreateInput = {
  thermalRadiationIntensity?: number | null;
  probabilityDamage?: number | null;
  pipeline?: PipelineWhereUniqueInput | null;
  hazardousSubstance?: HazardousSubstanceWhereUniqueInput | null;
};
