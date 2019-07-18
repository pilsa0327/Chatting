
const Web3 = require('web3')
const rpcURL = 'https://rinkeby.infura.io/v3/f2d6082eec7d47fd9843b71b0651e47d'
const web3 = new Web3(rpcURL)
const addressMy = '0x77793A1Cd4615288A9564508dcc7257Ca6D0ADCC'

web3.eth.getBalance(addressMy, (err, wei) => { 
    balance = web3.utils.fromWei(wei, 'ether')
    console.log("balance : " , balance) })

  

    