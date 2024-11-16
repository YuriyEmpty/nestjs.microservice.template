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
    private port: number = Number.parseInt(process.env.PORT ?? "3000");

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
        //         url: process.env.REDIS_URL
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
        if(process.env.NODE_ENV !== "development") {
            return;
        }

        console.log("=HTTP Routes=")
        // @ts-ignore
        // we do not modify data,only get it
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