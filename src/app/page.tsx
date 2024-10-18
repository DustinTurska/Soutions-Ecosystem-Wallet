"use client";

import { ConnectButton, ClaimButton, MediaRenderer } from "thirdweb/react";
import { client } from "./client";
import { ecosystemWallet, createWallet } from "thirdweb/wallets";
import { sepolia } from "thirdweb/chains";

const wallet = [ecosystemWallet("ecosystem.solutions-team-test"),
createWallet("io.metamask")];

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <div className="flex justify-center mb-20">
          <ConnectButton
            client={client}
            wallets={wallet}
            appMetadata={{
              name: "Example App",
              url: "https://example.com",
            }}
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-1 justify-center">
          <MediaRenderer
            client={client}
            src="ipfs://QmREjo5qf32MqKizi1AP2EzTdgehnfRZbFxncSYW3mULnm/0.png"
          />
          <ClaimButton
            contractAddress="0x34F7232e87AF847bb9A028308e368Aed1303632A"
            chain={sepolia}
            client={client}
            claimParams={{
              type: "ERC1155",
              quantity: 1n,
              tokenId: 0n,
            }}
          >
            Claim now
          </ClaimButton>
        </div>
      </div>
    </main>
  );
}
