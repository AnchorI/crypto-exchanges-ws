import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 7780 })

export const FullData = {
    OKX: {"BTC-BTC": "0"},
    BINANCE: {"BTCBTC": "0"},
    BYBIT: {"BTCBTC": "0"},
}


wss.on('connection', function connection(ws) {
    ws.on('message', function message() {
        console.log('WebSocket connected')
    })
    setInterval(() => ws.send(JSON.stringify(FullData)), 200)
})