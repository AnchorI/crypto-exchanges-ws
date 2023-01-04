import { Router } from "express"
import ByBit from "./ByBit"
import {Routes} from "../../../interfaces/route.interface"

class ByBitRoute implements Routes {
    public router = Router()
    private bybit = new ByBit()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/', this.bybit.getByBit)
        this.router.get('/btc', this.bybit.getByBitBtc)
    }
}

export default new ByBitRoute().router
