import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccidentScenarioServiceBase } from "./base/accidentScenario.service.base";

@Injectable()
export class AccidentScenarioService extends AccidentScenarioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
