import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AccidentScenarioTitle } from "../accidentScenario/AccidentScenarioTitle";

export const PipelineEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="diameter" source="diameter" />
        <NumberInput label="length" source="length" />
        <TextInput label="material" source="material" />
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
