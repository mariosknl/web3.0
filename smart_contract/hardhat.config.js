// https://eth-ropsten.alchemyapi.io/v2/2_vj7_yF35T02G4PtLTVC_YaCp-_pWoQ

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/2_vj7_yF35T02G4PtLTVC_YaCp-_pWoQ",
      accounts: [
        "672b1fee3fb77211c268db0a614517614d8de6e14e994f0b66324890a8bc602b",
      ],
    },
  },
};
