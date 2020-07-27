const { Blockchain, Transaction } = require('./Blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate("046752d8b87e5ad13dfad2d62d4c55e39515c79ce6c8dce3ffcc97583fe2a3e8");
const myWalletAddress = myKey.getPublic('hex');

const SpykeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "address2", 100);
tx1.signTransaction(myKey);
SpykeCoin.addTransaction(tx1);

console.log("\n Starting the miner...");
SpykeCoin.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
savjeeCoin.addTransaction(tx2);

console.log("\n Starting the miner...");
SpykeCoin.minePendingTransactions(myWalletAddress);

console.log("\nBalance of Spyke is", SpykeCoin.getBalanceOfAddress(myWalletAddress));

console.log();
console.log('Blockchain valid?', savjeeCoin.isChainValid() ? 'Yes' : 'No');