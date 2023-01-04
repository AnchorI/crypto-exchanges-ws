import WebSocket from "ws";
import config from "../../../config";
import CryptoJS from "crypto-js";
import { List, List2, OkxResponse } from "./interface-usdt";
import { ListBtc, ListBtc2, OkxBtcResponse } from "./interface-btc";
import { FullData } from "../../../wss";

const args = []
const args2 = []
const btc = []
const btc2 = []

List.map((token) => { args.push({channel: 'books', instId: token}) })
List2.map((token) => { args2.push({channel: 'books', instId: token})})
ListBtc.map((token) => { btc.push({channel: 'tickers', instId: token})})
ListBtc2.map((token) => { btc2.push({channel: 'tickers', instId: token})})

class OKX {
     public getOkx = () => {
        const okx = new WebSocket(config.okxWss)
        const timestamp = new Date().getTime()/1000
        const req = { op: "subscribe", args: args }
        const login = {
            op: "login",
            args: [{
                apiKey: `${config.okxApi}`,
                passphrase: `${config.okxPhrase}`,
                timestamp,
                sign: CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(timestamp + 'GET' + '/users/self/verify', config.okxSecretKey))
            }]
        }

        okx.on('open', function open() {
            okx.send(JSON.stringify(login))
        })

        okx.on('open', function open() {
            okx.send(JSON.stringify(req))
        })

        okx.on('message', function message(data) {
            const allData = JSON.parse(data.toString()) ?? undefined
            if (allData.data) responseOptimizer(allData)
        })

        const okx2 = new WebSocket(config.okxWss)
        const req2 = { op: "subscribe", args: args2 }

        okx2.on('open', function open() {
            okx2.send(JSON.stringify(login))
        })

        okx2.on('open', function open() {
            okx2.send(JSON.stringify(req2))
        })

        okx2.on('message', function message(data) {
            const allData2 = JSON.parse(data.toString()) ?? undefined
            if (allData2.data) responseOptimizer(allData2)
        })
    }

    public getBtcOkx = () => {
        const okxBtc = new WebSocket(config.okxWss)
        const timestamp = new Date().getTime()/1000
        const reqBtc = { op: "subscribe", args: btc }
        const login = {
            op: "login",
            args: [{
                apiKey: `${config.okxApi}`,
                passphrase: `${config.okxPhrase}`,
                timestamp,
                sign: CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(timestamp + 'GET' + '/users/self/verify', config.okxSecretKey))
            }]
        }

        okxBtc.on('open', function open() {
            okxBtc.send(JSON.stringify(login))
        })

        okxBtc.on('open', function open() {
            okxBtc.send(JSON.stringify(reqBtc))
        })

        okxBtc.on('message', function message(data) {
            const allBtcData = JSON.parse(data.toString()) ?? undefined
            if (allBtcData.data) responseBtcOptimizer(allBtcData)
        })

        const okxBtc2 = new WebSocket(config.okxWss)
        const reqBtc2 = { op: "subscribe", args: btc2 }

        okxBtc2.on('open', function open() {
            okxBtc2.send(JSON.stringify(login))
        })

        okxBtc2.on('open', function open() {
            okxBtc2.send(JSON.stringify(reqBtc2))
        })

        okxBtc2.on('message', function message(data) {
            const allBtcData2 = JSON.parse(data.toString()) ?? undefined
            if (allBtcData2.data) responseBtcOptimizer(allBtcData2)
        })
    }
}

    const responseOptimizer = (data: OkxResponse) => {
        FullData.OKX[data.arg?.instId] = data.data.at(0).bids?.at(0)?.at(0)
    }

    const responseBtcOptimizer = (data: OkxBtcResponse) => {
        FullData.OKX[data.arg?.instId] = data.data[0].bidPx
    }

export default OKX
