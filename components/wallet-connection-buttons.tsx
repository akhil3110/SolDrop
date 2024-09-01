"use client"

import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui"

export  function WalletConnectionButtons() {
  return (
    <div className=" flex mt-7 justify-around">
        <div>
            <WalletMultiButton />
        </div>
        <div className="hidden sm:block">
            <WalletDisconnectButton />
        </div>
    </div>
  )
}
