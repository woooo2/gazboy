import { AccidentScenarioCreateNestedManyWithoutPipelinesInput } from "./AccidentScenarioCreateNestedManyWithoutPipelinesInput";

export type PipelineCreateInput = {
  diameter?: number | null;
  length?: number | null;
  material?: string | null;
  accidentScenarios?: AccidentScenarioCreateNestedManyWithoutPipelinesInput;
};
