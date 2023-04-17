import { HardhatUserConfig } from "hardhat/config";
import { mnemonic } from "./settings";

import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",

  networks: {
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: {
        mnemonic,
      },
    },
  },
};

export default config;
