import { Pipeline as TPipeline } from "../api/pipeline/Pipeline";

export const PIPELINE_TITLE_FIELD = "material";

export const PipelineTitle = (record: TPipeline): string => {
  return record.material?.toString() || String(record.id);
};
