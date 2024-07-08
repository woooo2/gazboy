import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HazardousSubstanceList } from "./hazardousSubstance/HazardousSubstanceList";
import { HazardousSubstanceCreate } from "./hazardousSubstance/HazardousSubstanceCreate";
import { HazardousSubstanceEdit } from "./hazardousSubstance/HazardousSubstanceEdit";
import { HazardousSubstanceShow } from "./hazardousSubstance/HazardousSubstanceShow";
import { PipelineList } from "./pipeline/PipelineList";
import { PipelineCreate } from "./pipeline/PipelineCreate";
import { PipelineEdit } from "./pipeline/PipelineEdit";
import { PipelineShow } from "./pipeline/PipelineShow";
import { AccidentScenarioList } from "./accidentScenario/AccidentScenarioList";
import { AccidentScenarioCreate } from "./accidentScenario/AccidentScenarioCreate";
import { AccidentScenarioEdit } from "./accidentScenario/AccidentScenarioEdit";
import { AccidentScenarioShow } from "./accidentScenario/AccidentScenarioShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AccidentScenarioCalculator"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="HazardousSubstance"
          list={HazardousSubstanceList}
          edit={HazardousSubstanceEdit}
          create={HazardousSubstanceCreate}
          show={HazardousSubstanceShow}
        />
        <Resource
          name="Pipeline"
          list={PipelineList}
          edit={PipelineEdit}
          create={PipelineCreate}
          show={PipelineShow}
        />
        <Resource
          name="AccidentScenario"
          list={AccidentScenarioList}
          edit={AccidentScenarioEdit}
          create={AccidentScenarioCreate}
          show={AccidentScenarioShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
