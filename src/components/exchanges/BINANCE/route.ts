import { Router } from "express"
import BINANCE from "./BINANCE"
import {Routes} from "../../../interfaces/route.interface"

class Binance implements Routes {
    public router = Router()
    private binance = new BINANCE()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/', this.binance.getBinance)
        this.router.get('/btc', this.binance.getBinanceTokenBTC)
    }
}

export default new Binance().router
