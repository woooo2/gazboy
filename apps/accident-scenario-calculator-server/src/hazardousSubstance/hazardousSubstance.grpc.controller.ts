import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HazardousSubstanceService } from "./hazardousSubstance.service";
import { HazardousSubstanceGrpcControllerBase } from "./base/hazardousSubstance.grpc.controller.base";

@swagger.ApiTags("hazardousSubstances")
@common.Controller("hazardousSubstances")
export class HazardousSubstanceGrpcController extends HazardousSubstanceGrpcControllerBase {
  constructor(protected readonly service: HazardousSubstanceService) {
    super(service);
  }
}
