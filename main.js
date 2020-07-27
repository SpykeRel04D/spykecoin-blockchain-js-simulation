const { Blockchain, Transaction } = require('./Blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate("046752d8b87e5ad13dfad2d62d4c55e39515c79ce6c8dce3ffcc97583fe2a3e8");
const myWalletAddress = myKey.getPublic('hex');

let SpykeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);
SpykeCoin.addTransaction(tx1);

console.log("\n Starting the miner...");
SpykeCoin.minePendingTransactions(myWalletAddress);

console.log("\nBalance of Spyke is", SpykeCoin.getBalanceOfAddress(myWalletAddress));
