import WebSocket from "ws";
import config from "../../../config";
import {ByBitResponse, List, List2} from "./interface-usdt";
import {ByBitBtcResponse, ListBtc, ListBtc2} from "./interface-btc";
import {FullData} from "../../../wss";

const args = []
const args2 = []
const btc = []
const btc2 = []

List.map((token) => { args.push(`orderbook.25.${token}USDT`)})
List2.map((token) => { args2.push(`orderbook.25.${token}USDT`)})
ListBtc.map((token) => { btc.push(`trade.${token}BTC`)})
ListBtc2.map((token) => { btc2.push(`trade.${token}BTC`)})

class ByBit {
    public getByBit = () => {
        const byBit = new WebSocket(config.byBitWss)
        const req = { op: "subscribe", args: args, req_id: "customised_id"}

        byBit.on('open', function open() {
            byBit.send(JSON.stringify(req))
        })

        byBit.on('message', function message(data) {
            const allData = JSON.parse(data.toString()) ?? undefined
            if (allData.data) responseOptimizer(allData)
        })

        const byBit2 = new WebSocket(config.byBitWss)
        const req2 = { op: "subscribe", args: args2, req_id: "customised_id"}

        byBit2.on('open', function open() {
            byBit2.send(JSON.stringify(req2))
        })

        byBit2.on('message', function message(data) {
            const allData2 = JSON.parse(data.toString()) ?? undefined
            if (allData2.data) responseOptimizer(allData2)
        })
    }

    public getByBitBtc = () => {
        const byBitBtc = new WebSocket(config.byBitBtcWss)
        const req = { op: "subscribe",  args: btc }

        byBitBtc.on('open', function open() {
            byBitBtc.send(JSON.stringify(req))
        })

        byBitBtc.on('message', function message(data) {
            const allData = JSON.parse(data.toString()) ?? undefined
            if (allData.data) responseBtcOptimizer(allData)
        })

        const byBitBtc2 = new WebSocket(config.byBitBtcWss)
        const req2 = { op: "subscribe",  args: btc2 }

        byBitBtc2.on('open', function open() {
            byBitBtc2.send(JSON.stringify(req2))
        })

        byBitBtc2.on('message', function message(data) {
            const allData2 = JSON.parse(data.toString()) ?? undefined
            if (allData2.data) responseBtcOptimizer(allData2)
        })
    }
}

    const responseOptimizer = (data: ByBitResponse) => {
        FullData.BYBIT[data.data.s] = data.data?.b[0]
    }

    const responseBtcOptimizer = (data: ByBitBtcResponse) => {
        FullData.BYBIT[data.topic.slice(6)] = data.data?.p
    }

export default ByBit
