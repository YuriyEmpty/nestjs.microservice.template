/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 13.01.2022
 */

import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class ExampleMiddleware implements NestMiddleware {

    public async use(request: Request, response: Response, next: NextFunction): Promise<void> {
        return next();
    }

}