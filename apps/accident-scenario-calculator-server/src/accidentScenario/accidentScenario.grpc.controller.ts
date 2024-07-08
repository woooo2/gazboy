import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccidentScenarioService } from "./accidentScenario.service";
import { AccidentScenarioGrpcControllerBase } from "./base/accidentScenario.grpc.controller.base";

@swagger.ApiTags("accidentScenarios")
@common.Controller("accidentScenarios")
export class AccidentScenarioGrpcController extends AccidentScenarioGrpcControllerBase {
  constructor(protected readonly service: AccidentScenarioService) {
    super(service);
  }
}
