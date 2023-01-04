import Joi from "joi"
import dotenv from "dotenv"

dotenv.config()

type Config = {
    okxApi: string
    okxPhrase: string
    okxSecretKey: string
    okxWss: string
    byBitApi: string
    byBitSecret: string
    byBitName: string
    byBitWss: string
    byBitBtcWss: string
    binanceApi: string
    binanceSecret: string
    binanceName: string
}

const envVarsSchema = Joi.object({
    OKX_API: Joi.string().required().description("OKX API TOKEN"),
    OKX_PHRASE: Joi.string().required().description("OKX PASS PHRASE"),
    OKX_SECRET_KEY: Joi.string().required().description("OKX SECRET KEY"),
    OKX_WSS: Joi.string().required().description("OKX WSS"),
    BYBIT_API: Joi.string().required().description("BYBIT API TOKEN"),
    BYBIT_SECRET_KEY: Joi.string().required().description("BYBIT SECRET KEY"),
    BYBIT_NAME: Joi.string().required().description("BYBIT NAME"),
    BYBIT_WSS: Joi.string().required().description("BYBIT WSS"),
    BYBITBTC_WSS: Joi.string().required().description("BYBIT WSS PUBLIC"),
    BINANCE_API: Joi.string().required().description("BINANCE API TOKEN"),
    BINANCE_SECRET_KEY: Joi.string().required().description("BINANCE SECRET KEY"),
    BINANCE_NAME: Joi.string().required().description("BINANCE LABEL"),
})
    .unknown()
    .required()

const { error, value: envVars } = envVarsSchema.validate(process.env)

if (error) {
    throw new Error(`Config validation error: ${error.message}`)
}

const config: Config = {
    okxApi: envVars.OKX_API,
    okxPhrase: envVars.OKX_PHRASE,
    okxSecretKey: envVars.OKX_SECRET_KEY,
    okxWss: envVars.OKX_WSS,
    byBitApi: envVars.BYBIT_API,
    byBitSecret: envVars.BYBIT_SECRET_KEY,
    byBitName: envVars.BYBIT_NAME,
    byBitWss: envVars.BYBIT_WSS,
    byBitBtcWss: envVars.BYBITBTC_WSS,
    binanceApi: envVars.BINANCE_API,
    binanceSecret: envVars.BYBIT_SECRET_KEY,
    binanceName: envVars.BINANCE_NAME,
}

export default config
