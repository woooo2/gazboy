/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { AccidentScenarioCreateNestedManyWithoutPipelinesInput } from "./AccidentScenarioCreateNestedManyWithoutPipelinesInput";
import { Type } from "class-transformer";

@InputType()
class PipelineCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  diameter?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  length?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  material?: string | null;

  @ApiProperty({
    required: false,
    type: () => AccidentScenarioCreateNestedManyWithoutPipelinesInput,
  })
  @ValidateNested()
  @Type(() => AccidentScenarioCreateNestedManyWithoutPipelinesInput)
  @IsOptional()
  @Field(() => AccidentScenarioCreateNestedManyWithoutPipelinesInput, {
    nullable: true,
  })
  accidentScenarios?: AccidentScenarioCreateNestedManyWithoutPipelinesInput;
}

export { PipelineCreateInput as PipelineCreateInput };
