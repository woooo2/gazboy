import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccidentScenarioModuleBase } from "./base/accidentScenario.module.base";
import { AccidentScenarioService } from "./accidentScenario.service";
import { AccidentScenarioController } from "./accidentScenario.controller";
import { AccidentScenarioGrpcController } from "./accidentScenario.grpc.controller";
import { AccidentScenarioResolver } from "./accidentScenario.resolver";

@Module({
  imports: [AccidentScenarioModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccidentScenarioController, AccidentScenarioGrpcController],
  providers: [AccidentScenarioService, AccidentScenarioResolver],
  exports: [AccidentScenarioService],
})
export class AccidentScenarioModule {}
