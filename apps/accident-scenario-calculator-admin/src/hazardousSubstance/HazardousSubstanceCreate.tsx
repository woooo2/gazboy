import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AccidentScenarioTitle } from "../accidentScenario/AccidentScenarioTitle";

export const HazardousSubstanceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
