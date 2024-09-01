"use client"
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';



// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

const WalletConnectionProvider = ({
    children
}:
{
    children: React.ReactNode
}) => {
    
    return ( 
        <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/kwQaE_e2Hf_UF0Knd72fAroXzn_40vuC">
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
     );
}
 
export default WalletConnectionProvider;