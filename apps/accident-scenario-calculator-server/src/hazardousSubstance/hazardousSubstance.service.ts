import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HazardousSubstanceServiceBase } from "./base/hazardousSubstance.service.base";

@Injectable()
export class HazardousSubstanceService extends HazardousSubstanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
