/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 13.01.2022
 */

import { Module } from "@nestjs/common";
import { ExampleController } from "./example.controller";

@Module({
    controllers: [ ExampleController ]
})
export class ExampleApiModule {}