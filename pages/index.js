import React from "react";
import { useMarketplace } from "../hooks/marketplace";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "tailwindcss/tailwind.css";
import MarketplaceActions from "../components/MarketplaceActions";

export default function App() {
  const { initializeMarketplace, listNFT, delistNFT, purchaseNFT } =
    useMarketplace();

  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <header className='bg-white shadow mb-6'>
        <div className='container mx-auto py-4 flex justify-between items-center'>
          <h1 className='text-xl font-bold'>Solana NFT Marketplace</h1>
          <WalletMultiButton />
        </div>
      </header>
      <main className='container mx-auto'>
        <MarketplaceActions
          initializeMarketplace={initializeMarketplace}
          listNFT={listNFT}
          delistNFT={delistNFT}
          purchaseNFT={purchaseNFT}
        />
      </main>
    </div>
  );
}
