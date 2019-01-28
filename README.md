# C.R.E.A.M. API

Cream is a nodeJS Shopping Cart Rest API

### Installation

```sh
$ git clone git@github.com:clickbox/c.r.e.a.m..git
$ cd c.r.e.a.m.
$ yarn install
$ npx jest --coverage
```

## VS Code Test Debugger

There is a config file for VS Code which enables the use of the VS Code Debugger tools for running test.

## API Routes

Available API routes for various cart functionality

| Operation | Route  | Parameters | 
| ------ | ------ | ------ |
| Add | /add | Name, Number |
| Remove | /remove | Name, Number |
| New Product | /newProduct | Name, Price, Quantity |
| Buy1Get1Free | /buy1Get1Free | Name, BuyQty, NumOff, Limit |
| BuyNGetMX | /buyNGetMX | Name, BuytQty, NumOff, PercentOff |
| BuyForSet | /buyForSet | Name, NumQty, SetPrice, Limit |
