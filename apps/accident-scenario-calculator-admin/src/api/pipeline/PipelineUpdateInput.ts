import { AccidentScenarioUpdateManyWithoutPipelinesInput } from "./AccidentScenarioUpdateManyWithoutPipelinesInput";

export type PipelineUpdateInput = {
  diameter?: number | null;
  length?: number | null;
  material?: string | null;
  accidentScenarios?: AccidentScenarioUpdateManyWithoutPipelinesInput;
};
