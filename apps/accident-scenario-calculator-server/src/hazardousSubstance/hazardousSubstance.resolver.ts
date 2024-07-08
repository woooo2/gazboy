import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HazardousSubstanceResolverBase } from "./base/hazardousSubstance.resolver.base";
import { HazardousSubstance } from "./base/HazardousSubstance";
import { HazardousSubstanceService } from "./hazardousSubstance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HazardousSubstance)
export class HazardousSubstanceResolver extends HazardousSubstanceResolverBase {
  constructor(
    protected readonly service: HazardousSubstanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
