import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HazardousSubstanceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"HazardousSubstances"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="boiling_point" source="boilingPoint" />
        <TextField label="flammability_limit" source="flammabilityLimit" />
        <TextField label="mass" source="mass" />
        <TextField label="type" source="typeField" />
      </Datagrid>
    </List>
  );
};
