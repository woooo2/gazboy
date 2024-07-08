import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PipelineModuleBase } from "./base/pipeline.module.base";
import { PipelineService } from "./pipeline.service";
import { PipelineController } from "./pipeline.controller";
import { PipelineGrpcController } from "./pipeline.grpc.controller";
import { PipelineResolver } from "./pipeline.resolver";

@Module({
  imports: [PipelineModuleBase, forwardRef(() => AuthModule)],
  controllers: [PipelineController, PipelineGrpcController],
  providers: [PipelineService, PipelineResolver],
  exports: [PipelineService],
})
export class PipelineModule {}
