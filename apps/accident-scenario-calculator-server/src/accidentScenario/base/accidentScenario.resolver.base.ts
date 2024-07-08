/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AccidentScenario } from "./AccidentScenario";
import { AccidentScenarioCountArgs } from "./AccidentScenarioCountArgs";
import { AccidentScenarioFindManyArgs } from "./AccidentScenarioFindManyArgs";
import { AccidentScenarioFindUniqueArgs } from "./AccidentScenarioFindUniqueArgs";
import { CreateAccidentScenarioArgs } from "./CreateAccidentScenarioArgs";
import { UpdateAccidentScenarioArgs } from "./UpdateAccidentScenarioArgs";
import { DeleteAccidentScenarioArgs } from "./DeleteAccidentScenarioArgs";
import { Pipeline } from "../../pipeline/base/Pipeline";
import { HazardousSubstance } from "../../hazardousSubstance/base/HazardousSubstance";
import { AccidentScenarioService } from "../accidentScenario.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccidentScenario)
export class AccidentScenarioResolverBase {
  constructor(
    protected readonly service: AccidentScenarioService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AccidentScenario",
    action: "read",
    possession: "any",
  })
  async _accidentScenariosMeta(
    @graphql.Args() args: AccidentScenarioCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AccidentScenario])
  @nestAccessControl.UseRoles({
    resource: "AccidentScenario",
    action: "read",
    possession: "any",
  })
  async accidentScenarios(
    @graphql.Args() args: AccidentScenarioFindManyArgs
  ): Promise<AccidentScenario[]> {
    return this.service.accidentScenarios(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AccidentScenario, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AccidentScenario",
    action: "read",
    possession: "own",
  })
  async accidentScenario(
    @graphql.Args() args: AccidentScenarioFindUniqueArgs
  ): Promise<AccidentScenario | null> {
    const result = await this.service.accidentScenario(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AccidentScenario)
  @nestAccessControl.UseRoles({
    resource: "AccidentScenario",
    action: "create",
    possession: "any",
  })
  async createAccidentScenario(
    @graphql.Args() args: CreateAccidentScenarioArgs
  ): Promise<AccidentScenario> {
    return await this.service.createAccidentScenario({
      ...args,
      data: {
        ...args.data,

        pipeline: args.data.pipeline
          ? {
              connect: args.data.pipeline,
            }
          : undefined,

        hazardousSubstance: args.data.hazardousSubstance
          ? {
              connect: args.data.hazardousSubstance,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AccidentScenario)
  @nestAccessControl.UseRoles({
    resource: "AccidentScenario",
    action: "update",
    possession: "any",
  })
  async updateAccidentScenario(
    @graphql.Args() args: UpdateAccidentScenarioArgs
  ): Promise<AccidentScenario | null> {
    try {
      return await this.service.updateAccidentScenario({
        ...args,
        data: {
          ...args.data,

          pipeline: args.data.pipeline
            ? {
                connect: args.data.pipeline,
              }
            : undefined,

          hazardousSubstance: args.data.hazardousSubstance
            ? {
                connect: args.data.hazardousSubstance,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AccidentScenario)
  @nestAccessControl.UseRoles({
    resource: "AccidentScenario",
    action: "delete",
    possession: "any",
  })
  async deleteAccidentScenario(
    @graphql.Args() args: DeleteAccidentScenarioArgs
  ): Promise<AccidentScenario | null> {
    try {
      return await this.service.deleteAccidentScenario(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Pipeline, {
    nullable: true,
    name: "pipeline",
  })
  @nestAccessControl.UseRoles({
    resource: "Pipeline",
    action: "read",
    possession: "any",
  })
  async getPipeline(
    @graphql.Parent() parent: AccidentScenario
  ): Promise<Pipeline | null> {
    const result = await this.service.getPipeline(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => HazardousSubstance, {
    nullable: true,
    name: "hazardousSubstance",
  })
  @nestAccessControl.UseRoles({
    resource: "HazardousSubstance",
    action: "read",
    possession: "any",
  })
  async getHazardousSubstance(
    @graphql.Parent() parent: AccidentScenario
  ): Promise<HazardousSubstance | null> {
    const result = await this.service.getHazardousSubstance(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
