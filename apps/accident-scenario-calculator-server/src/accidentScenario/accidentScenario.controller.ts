import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccidentScenarioService } from "./accidentScenario.service";
import { AccidentScenarioControllerBase } from "./base/accidentScenario.controller.base";

@swagger.ApiTags("accidentScenarios")
@common.Controller("accidentScenarios")
export class AccidentScenarioController extends AccidentScenarioControllerBase {
  constructor(
    protected readonly service: AccidentScenarioService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
