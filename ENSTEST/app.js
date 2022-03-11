'use strict';

var Web3 = require("web3")
var accounts = ethereum.enable();
var web3 = new Web3(ethereum);
var ens = web3.eth.ens;
var ethers = require('ethers');
var provider = new ethers.providers.Web3Provider(ethereum);

// ENS functionality is provided directly on the core provider object.

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

// Getting contenthash
web3.eth.ens.getContenthash('ethereum.eth').then(function (result) {
    console.log(result);
});
// Setting contenthash
web3.eth.ens.setContenthash('ethereum.eth', hash);