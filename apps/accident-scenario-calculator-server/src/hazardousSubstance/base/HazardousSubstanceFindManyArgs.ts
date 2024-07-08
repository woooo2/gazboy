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
import { HazardousSubstanceWhereInput } from "./HazardousSubstanceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HazardousSubstanceOrderByInput } from "./HazardousSubstanceOrderByInput";

@ArgsType()
class HazardousSubstanceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HazardousSubstanceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HazardousSubstanceWhereInput, { nullable: true })
  @Type(() => HazardousSubstanceWhereInput)
  where?: HazardousSubstanceWhereInput;

  @ApiProperty({
    required: false,
    type: [HazardousSubstanceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HazardousSubstanceOrderByInput], { nullable: true })
  @Type(() => HazardousSubstanceOrderByInput)
  orderBy?: Array<HazardousSubstanceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { HazardousSubstanceFindManyArgs as HazardousSubstanceFindManyArgs };