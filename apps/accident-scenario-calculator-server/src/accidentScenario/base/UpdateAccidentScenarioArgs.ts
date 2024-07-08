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
import { AccidentScenarioWhereUniqueInput } from "./AccidentScenarioWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AccidentScenarioUpdateInput } from "./AccidentScenarioUpdateInput";

@ArgsType()
class UpdateAccidentScenarioArgs {
  @ApiProperty({
    required: true,
    type: () => AccidentScenarioWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccidentScenarioWhereUniqueInput)
  @Field(() => AccidentScenarioWhereUniqueInput, { nullable: false })
  where!: AccidentScenarioWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AccidentScenarioUpdateInput,
  })
  @ValidateNested()
  @Type(() => AccidentScenarioUpdateInput)
  @Field(() => AccidentScenarioUpdateInput, { nullable: false })
  data!: AccidentScenarioUpdateInput;
}

export { UpdateAccidentScenarioArgs as UpdateAccidentScenarioArgs };