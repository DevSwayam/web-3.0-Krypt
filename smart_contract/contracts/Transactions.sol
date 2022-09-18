// SPDX-License-Identifier : UNLICENSED // use to import pre build contracts 

pragma solidity ^0.8.0; // defining which version of solidity we are going to use 

// class in contract 
contract Transactions{
    uint256 transactionCount ; // which will hold the value of trnsactions

    event Transfer(address from , address receiver , uint amount , string message , uint256 timestamp , string keyword );

    struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
        string message ;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[]transactions; // an array of object 


    // this function will add block it in structure data type we created and also call transfer funvtions so that we can add it on block chain 
    function addToBlockChain(address payable receiver , uint amount , string memory message ,  string memory keyword) public{
        transactionCount += 1; // transaction count will be updated 
        transactions.push(TransferStruct(msg.sender , receiver , amount , message ,block.timestamp ,keyword)); // will push the info in stucture
        emit Transfer(msg.sender , receiver , amount , message ,block.timestamp ,keyword);
    }
    function getAllTransactions() public view returns (TransferStruct[] memory){
        // will return transactions
        return transactions;

    }
    function getTransactionCount() public view returns(uint256){
        return transactionCount ;
    }
}
