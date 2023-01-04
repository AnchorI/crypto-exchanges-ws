import { Router } from "express"
import OKX from "./OKX"
import {Routes} from "../../../interfaces/route.interface";

class OKXRoute implements Routes {
    public router = Router()
    private okx = new OKX()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/', this.okx.getOkx)
        this.router.get('/btc', this.okx.getBtcOkx)
    }
}

export default new OKXRoute().router
