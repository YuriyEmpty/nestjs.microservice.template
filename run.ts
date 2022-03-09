/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 13.01.2022
 */

import { ConfigModule } from "@nestjs/config";
ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ".env"
})

import { NestExpressApplication } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./src/app.module";
import { EnvHelper } from "./src/core/helpers/env.helper";
import { ValidationPipe } from "@nestjs/common";
import { Transport } from "@nestjs/microservices";

class Microservice {

    /**
     * Application instance
     */
    private app: NestExpressApplication;

    /**
     * Application port
     */
    private port: number = Number.parseInt(EnvHelper.get("HTTP_SERVER_PORT"));

    /**
     * Run application
     */
    public async run(): Promise<void> {
        this.app = await NestFactory.create<NestExpressApplication>(AppModule);
        this.app.useGlobalPipes(new ValidationPipe({
            transform: true
        }))

        // this.app.connectMicroservice({
        //     transport: Transport.REDIS,
        //     options: {
        //         url: EnvHelper.get("REDIS_URL")
        //     }
        // })

        //await this.app.startAllMicroservices()
        await this.app.listen(this.port);
        this.printHTTPRoutes();
    }

    /**
     * Print all available HTTP routes to the console
     */
    private printHTTPRoutes(): void {
        if(EnvHelper.notEquals("NODE_ENV", "development")) {
            return;
        }

        console.log("=HTTP Routes=")
        const router = this.app.getHttpServer()._events.request._router;
        for(let i = 0; i < router.stack.length; i++) {
            if(!router.stack[i].route) {
                continue;
            }

            console.log(router.stack[i].route.methods, router.stack[i].route.path)
        }
        console.log("=============")
    }

}

new Microservice().run();