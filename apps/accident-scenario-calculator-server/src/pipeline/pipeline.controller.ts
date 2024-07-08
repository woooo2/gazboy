import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PipelineService } from "./pipeline.service";
import { PipelineControllerBase } from "./base/pipeline.controller.base";

@swagger.ApiTags("pipelines")
@common.Controller("pipelines")
export class PipelineController extends PipelineControllerBase {
  constructor(
    protected readonly service: PipelineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
