/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 10.05.2022
 */

import { Module } from "@nestjs/common";
import { ExampleService } from "./example.service";

@Module({
    providers: [ ExampleService ],
    exports: [ ExampleService ]
})
export class ExampleModule {}