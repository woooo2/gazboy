import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HazardousSubstanceService } from "./hazardousSubstance.service";
import { HazardousSubstanceControllerBase } from "./base/hazardousSubstance.controller.base";

@swagger.ApiTags("hazardousSubstances")
@common.Controller("hazardousSubstances")
export class HazardousSubstanceController extends HazardousSubstanceControllerBase {
  constructor(
    protected readonly service: HazardousSubstanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
