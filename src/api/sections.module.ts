/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 08.01.2021
 */

import { Module } from "@nestjs/common";
import { ExampleApiModule } from "./example/example.module";

@Module({
    imports: [
        ExampleApiModule
    ]
})
export class ApiModule {}