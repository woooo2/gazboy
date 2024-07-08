import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PIPELINE_TITLE_FIELD } from "./PipelineTitle";
import { HAZARDOUSSUBSTANCE_TITLE_FIELD } from "../hazardousSubstance/HazardousSubstanceTitle";

export const PipelineShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="diameter" source="diameter" />
        <TextField label="length" source="length" />
        <TextField label="material" source="material" />
        <ReferenceManyField
          reference="AccidentScenario"
          target="pipelineId"
          label="AccidentScenarios"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField
              label="thermal_radiation_intensity"
              source="thermalRadiationIntensity"
            />
            <TextField label="probability_damage" source="probabilityDamage" />
            <ReferenceField
              label="Pipeline"
              source="pipeline.id"
              reference="Pipeline"
            >
              <TextField source={PIPELINE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="HazardousSubstance"
              source="hazardoussubstance.id"
              reference="HazardousSubstance"
            >
              <TextField source={HAZARDOUSSUBSTANCE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
