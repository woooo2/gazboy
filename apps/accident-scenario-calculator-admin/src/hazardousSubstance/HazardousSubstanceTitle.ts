import { HazardousSubstance as THazardousSubstance } from "../api/hazardousSubstance/HazardousSubstance";

export const HAZARDOUSSUBSTANCE_TITLE_FIELD = "name";

export const HazardousSubstanceTitle = (
  record: THazardousSubstance
): string => {
  return record.name?.toString() || String(record.id);
};
