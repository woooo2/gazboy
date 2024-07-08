import { AccidentScenario } from "../accidentScenario/AccidentScenario";

export type Pipeline = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  diameter: number | null;
  length: number | null;
  material: string | null;
  accidentScenarios?: Array<AccidentScenario>;
};
