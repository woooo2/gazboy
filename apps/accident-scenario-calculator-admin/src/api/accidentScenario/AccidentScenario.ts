import { Pipeline } from "../pipeline/Pipeline";
import { HazardousSubstance } from "../hazardousSubstance/HazardousSubstance";

export type AccidentScenario = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  thermalRadiationIntensity: number | null;
  probabilityDamage: number | null;
  pipeline?: Pipeline | null;
  hazardousSubstance?: HazardousSubstance | null;
};
