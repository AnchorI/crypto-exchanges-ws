import express from 'express'
import exchangesRoutes from './components/routes'
import cors from "cors"
import OKX from '../src/components/exchanges/OKX/OKX'

const okx = new OKX()
const port = 7777
const app = express()
const corsOptions = {
    origin:'http://btc.tabteam.space',
    credentials:true,
    optionSuccessStatus:200,
}

app.get('/', (req, res) => { res.send('Georgia Hi!!') })

app.use(cors(corsOptions))
app.use("/exchanges", exchangesRoutes)
app.listen(port, err => {
        if (err) {
            return console.error(err);
        }
        return console.log(`server is listening on ${port}`)
    }
)
okx.getOkx()

setInterval(proc, 5000); // endless loop

function proc() {
    console.log("MemUsed: " + process.memoryUsage().rss / 1000000);
}
