//https://eth-goerli.g.alchemy.com/v2/Te7T4WAPABuukm-iMkM8J124FmoO0TAR

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Te7T4WAPABuukm-iMkM8J124FmoO0TAR',
      accounts: ['769fb103b7009c5a2a1c940c516c04a9806766be21e1a4a1136da5927848cf13'],
    },
  },
};