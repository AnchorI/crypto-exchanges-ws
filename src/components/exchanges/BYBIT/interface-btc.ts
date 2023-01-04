export interface DataBtc {
    'ETHBTC'?: string
    '1INCHBTC'?: string
    'AAVEBTC'?: string
    'ACHBTC'?: string
    'ADABTC'?: string
    'AGLDBTC'?: string
    'AKROBTC'?: string
    'ALGOBTC'?: string
    'ALICEBTC'?: string
    'ALPHABTC'?: string
    'ANCBTC'?: string
    'ANKRBTC'?: string
    'ANTBTC'?: string
    'APEBTC'?: string
    'API3BTC'?: string
    'ARPABTC'?: string
    'ARBTC'?: string
    'ASTRBTC'?: string
    'ATOMBTC'?: string
    'AUDIOBTC'?: string
    'AVAXBTC'?: string
    'AXSBTC'?: string
    'BAKEBTC'?: string
    'BALBTC'?: string
    'BANDBTC'?: string
    'BATBTC'?: string
    'BCHBTC'?: string
    'BELBTC'?: string
    'BICOBTC'?: string
    'BLZBTC'?: string
    'BNBBTC'?: string
    'BNXBTC'?: string
    'BSWBTC'?: string
    'C98BTC'?: string
    'CELOBTC'?: string
    'CELRBTC'?: string
    'CHRBTC'?: string
    'CHZBTC'?: string
    'CKBBTC'?: string
    'COMPBTC'?: string
    'COTIBTC'?: string
    'CRVBTC'?: string
    'CTKBTC'?: string
    'CTSIBTC'?: string
    'CVCBTC'?: string
    'CVXBTC'?: string
    'DARBTC'?: string
    'DASHBTC'?: string
    'DENTBTC'?: string
    'DGBBTC'?: string
    'DOGEBTC'?: string
    'DOTBTC'?: string
    'DUSKBTC'?: string
    'DYDXBTC'?: string
    'EGLDBTC'?: string
    'ENJBTC'?: string
    'ENSBTC'?: string
    'EOSBTC'?: string
    'ETCBTC'?: string
    'FILBTC'?: string
    'FLMBTC'?: string
    'FTTBTC'?: string
    'FXSBTC'?: string
    'GALABTC'?: string
    'GALBTC'?: string
    'ICPBTC'?: string
    'ICXBTC'?: string
    'ILVBTC'?: string
    'IMXBTC'?: string
    'INJBTC'?: string
    'IOSTBTC'?: string
    'IOTABTC'?: string
    'IOTXBTC'?: string
    'JASMYBTC'?: string
    'JSTBTC'?: string
    'KAVABTC'?: string
    'KDABTC'?: string
    'KLAYBTC'?: string
    'KNCBTC'?: string
    'KSMBTC'?: string
    'LDOBTC'?: string
    'LTCBTC'?: string
    'LUNABTC'?: string
    'MANABTC'?: string
    'MASKBTC'?: string
    'MATICBTC'?: string
    'NEARBTC'?: string
    'NEOBTC'?: string
    'OCEANBTC'?: string
    'OGNBTC'?: string
    'OMGBTC'?: string
    'ONEBTC'?: string
    'ONTBTC'?: string
    'OPBTC'?: string
    'PAXGBTC'?: string
    'QTUMBTC'?: string
    'RAYBTC'?: string
    'REEFBTC'?: string
    'RNDRBTC'?: string
    'ROSEBTC'?: string
    'RSRBTC'?: string
    'RUNEBTC'?: string
    'RVNBTC'?: string
    'SANDBTC'?: string
    'SCRTBTC'?: string
    'SFPBTC'?: string
    'SKLBTC'?: string
    'SLPBTC'?: string
    'SNXBTC'?: string
    'SOLBTC'?: string
    'SPELLBTC'?: string
    'SRMBTC'?: string
    'STGBTC'?: string
    'STMXBTC'?: string
    'STORJBTC'?: string
    'STXBTC'?: string
    'SUNBTC'?: string
    'SUSHIBTC'?: string
    'SXPBTC'?: string
    'THETABTC'?: string
    'TLMBTC'?: string
    'TOMOBTC'?: string
    'TRBBTC'?: string
    'UNFIBTC'?: string
    'UNIBTC'?: string
    'USDCBTC'?: string
    'VETBTC'?: string
    'XEMBTC'?: string
    'XLMBTC'?: string
    'XMRBTC'?: string
    'XNOBTC'?: string
    'XRPBTC'?: string
    'XTZBTC'?: string
    'YFIBTC'?: string
    'YGGBTC'?: string
    'ZECBTC'?: string
    'ZENBTC'?: string
    'ZILBTC'?: string
    'ZRXBTC'?: string
}

export type AllDataBtcType = DataBtc


export const ListBtc = [
    'ETH',
    'ALGO',
    'XRP',
    'BIT',
    'XLM',
    'ALGO',
    'SOL',
    'MANA',
    'LTC'
]

export const ListBtc2 = [
    'DOT',
    'SAND',
    'WBTC'
]

export interface ByBitBtcResponse {
    data: ByBitBtcData
    type: string
    topic: string
    ts: number
}

interface ByBitBtcData {
    v: string
    t: number
    p: string
    q: string
    m: boolean
}
