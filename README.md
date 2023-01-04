# Crypto Exchanges WS

This README would normally document whatever steps are necessary to get the
application up and running.

## Quick Start on macOS

### Install Backend environment

Run command in a macOS Terminal:

```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Install NodeJS using the Homebrew package manager:

```zsh
brew install node
```

Clone project repository:

```zsh
git clone git@github.com:AnchorI/crypto-exchanges-ws.git
```

Go to application directory:

```zsh
cd crypto-exchanges-ws
```

## Run application

Create .env file 
```zsh
cp .env.example .env
```

Install dependencies:

```zsh
yarn install
```

Run application on development mode:

```zsh
yarn dev
```


### API Routes
#### fetch or curl to this route will start WebSocket connect with current Exchange for token/USDT price

``localhost:7777/exchanges/(Exchange u need in lovercase)`` 

#### fetch or curl to this route will start WebSocket connect with current Exchange for token/BTC price

``localhost:7777/exchanges/(Exchange u need in lovercase)/btc``

#### Use this ws address to connect WebSocket server (it's start by command yarn start + fetch to any exchange)

``ws://localhost:7780`` - data from all exchanges will be in one Object

```json
{
    "OKX": {
        "BTC-BTC": "0",
        ...
    },
    "BINANCE": {
        "BTCBTC": "0",
      ...
    },
    "BYBIT": {
        "BTCBTC": "0",
      ...
    }
}
```