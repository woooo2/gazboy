import { AccidentScenario } from "../accidentScenario/AccidentScenario";

export type HazardousSubstance = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  boilingPoint: number | null;
  flammabilityLimit: number | null;
  mass: number | null;
  typeField: string | null;
  accidentScenarios?: Array<AccidentScenario>;
};
