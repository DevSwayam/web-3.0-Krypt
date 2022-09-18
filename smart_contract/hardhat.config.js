// https://eth-goerli.g.alchemy.com/v2/EegRWy3EwXc0pFMk-t7HJOdRdtmbfnv2

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity : '0.8.0',
  networks : {
    goerli :{
      url:'https://eth-goerli.g.alchemy.com/v2/EegRWy3EwXc0pFMk-t7HJOdRdtmbfnv2',
      accounts: [ '5c9957f472cbba03ad23f52684e688fc5becb76a3b44cdfd6d874bd91f222625' ]
    }
  }
}
