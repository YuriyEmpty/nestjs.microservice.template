/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 13.01.2022
 */


import { MiddlewareConsumer, Module, NestModule, CacheModule } from "@nestjs/common";
import { SectionsModule } from "./sections/sections.module";
import { ExampleMiddleware } from "./core/middlewares/example.middleware";

@Module({
    imports: [
        SectionsModule
    ]
})
export class AppModule implements NestModule {

    /**
     * Install middleware of the application
     */
    public configure(consumer: MiddlewareConsumer): void {
        consumer.apply(ExampleMiddleware).forRoutes("*");
    }

}

