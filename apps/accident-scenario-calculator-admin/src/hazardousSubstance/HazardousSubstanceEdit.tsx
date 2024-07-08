import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AccidentScenarioTitle } from "../accidentScenario/AccidentScenarioTitle";

export const HazardousSubstanceEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <NumberInput label="boiling_point" source="boilingPoint" />
        <NumberInput label="flammability_limit" source="flammabilityLimit" />
        <NumberInput label="mass" source="mass" />
        <TextInput label="type" source="typeField" />
        <ReferenceArrayInput
          source="accidentScenarios"
          reference="AccidentScenario"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccidentScenarioTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
