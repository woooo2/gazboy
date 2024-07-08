import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PipelineTitle } from "../pipeline/PipelineTitle";
import { HazardousSubstanceTitle } from "../hazardousSubstance/HazardousSubstanceTitle";

export const AccidentScenarioCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          label="thermal_radiation_intensity"
          source="thermalRadiationIntensity"
        />
        <NumberInput label="probability_damage" source="probabilityDamage" />
        <ReferenceInput
          source="pipeline.id"
          reference="Pipeline"
          label="Pipeline"
        >
          <SelectInput optionText={PipelineTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="hazardousSubstance.id"
          reference="HazardousSubstance"
          label="HazardousSubstance"
        >
          <SelectInput optionText={HazardousSubstanceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
