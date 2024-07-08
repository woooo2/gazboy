/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HazardousSubstanceWhereUniqueInput } from "./HazardousSubstanceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class HazardousSubstanceFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => HazardousSubstanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HazardousSubstanceWhereUniqueInput)
  @Field(() => HazardousSubstanceWhereUniqueInput, { nullable: false })
  where!: HazardousSubstanceWhereUniqueInput;
}

export { HazardousSubstanceFindUniqueArgs as HazardousSubstanceFindUniqueArgs };
