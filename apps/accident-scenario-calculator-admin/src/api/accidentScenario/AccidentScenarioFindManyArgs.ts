import { AccidentScenarioWhereInput } from "./AccidentScenarioWhereInput";
import { AccidentScenarioOrderByInput } from "./AccidentScenarioOrderByInput";

export type AccidentScenarioFindManyArgs = {
  where?: AccidentScenarioWhereInput;
  orderBy?: Array<AccidentScenarioOrderByInput>;
  skip?: number;
  take?: number;
};
