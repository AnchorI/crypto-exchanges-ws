import WebSocket from "ws"
import {BinanceResponse, List, List2} from "./interface-usdt";
import {BinanceBtcResponse, ListBtc, ListBtc2} from "./interface-btc";
import { FullData } from "../../../wss";

class BINANCE {
    public getBinance = () => {
        const coins = List.map(item => item.toLowerCase()).join("usdt@markPrice/")
        const urlBinance = `wss://fstream.binance.com/stream?streams=${coins}` + 'usdt@markPrice'
        const binance = new WebSocket(urlBinance)

        binance.onmessage = (event) => {
            if (event)  responseOptimizer(event.data)
        }

        const coins2 = List2.map(item => item.toLowerCase()).join("usdt@markPrice/")
        const urlBinance2 = `wss://fstream.binance.com/stream?streams=${coins2}` + 'usdt@markPrice'
        const binance2 = new WebSocket(urlBinance2)

        binance2.onmessage = (event) => {
            if (event) responseOptimizer(event.data)
        }
    }

    public getBinanceTokenBTC = () => {
        const coins = ListBtc.map(item => item.toLowerCase()).join("btc@trade/")
        const urlBinanceBtc = `wss://stream.binance.com:9443/stream?streams=${coins}` + 'btc@trade'
        const binance = new WebSocket(urlBinanceBtc)

        binance.onmessage= (event) => {
            if (event) responseBtcOptimizer(event.data)
        }

        const coins2 = ListBtc2.map(item => item.toLowerCase()).join("btc@trade/")
        const urlBinanceBtc2 = `wss://stream.binance.com:9443/stream?streams=${coins2}` + 'btc@trade'
        const binance2 = new WebSocket(urlBinanceBtc2)

        binance2.onmessage= (event) => {
            if (event) responseBtcOptimizer(event.data)
        }
    }
}

    const responseOptimizer = (data) => {
        const dataParsed: BinanceResponse = JSON.parse(data)
        FullData.BINANCE[dataParsed.data.s] = dataParsed.data?.p
    }

    const responseBtcOptimizer = (data) => {
        const dataParsed: BinanceBtcResponse = JSON.parse(data)
        FullData.BINANCE[dataParsed.data.s] = dataParsed.data?.p
    }

export default BINANCE
