import okx from "./exchanges/OKX/route"
import bybit from './exchanges/BYBIT/route'
import binance from './exchanges/BINANCE/route'
import { Router } from "express"
import {Routes} from "../interfaces/route.interface"

class ExchangesRoute implements Routes {
    public router = Router()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.use("/okx", okx)
        this.router.use("/bybit", bybit)
        this.router.use("/binance", binance)
    }
}

export default new ExchangesRoute().router


