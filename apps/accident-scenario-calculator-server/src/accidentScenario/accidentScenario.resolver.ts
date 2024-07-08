import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AccidentScenarioResolverBase } from "./base/accidentScenario.resolver.base";
import { AccidentScenario } from "./base/AccidentScenario";
import { AccidentScenarioService } from "./accidentScenario.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccidentScenario)
export class AccidentScenarioResolver extends AccidentScenarioResolverBase {
  constructor(
    protected readonly service: AccidentScenarioService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
