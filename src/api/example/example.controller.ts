/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 13.01.2022
 */

import { ExtendedController } from "@yuriyempty/nestjs-extended-controller";
import { SectionsController } from "../sections.controller";
import { Body, Post, Request } from "@nestjs/common";

@ExtendedController({
    parent: SectionsController,
    path: "example"
})
export class ExampleController {

    @Post("get")
    public async get(@Request() request, @Body() params): Promise<any> {
        console.log("GET")
    }

}