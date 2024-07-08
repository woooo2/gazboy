import { AccidentScenario as TAccidentScenario } from "../api/accidentScenario/AccidentScenario";

export const ACCIDENTSCENARIO_TITLE_FIELD = "id";

export const AccidentScenarioTitle = (record: TAccidentScenario): string => {
  return record.id?.toString() || String(record.id);
};
