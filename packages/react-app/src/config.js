import { Sepolia } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x139F3Bd4b84Cb8189Ea37AE8a1eCBA270a399CaC";

export const DAPP_CONFIG = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]:
      "https://eth-sepolia.g.alchemy.com/v2/xbclpUJUaS7GXEmHFu87_LAZKtrTK9CV",
  },
};
