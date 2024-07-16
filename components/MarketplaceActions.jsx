import React, { useState } from "react";

function MarketplaceActions({
  initializeMarketplace,
  listNFT,
  delistNFT,
  purchaseNFT,
}) {
  const [marketplaceName, setMarketplaceName] = useState("");
  const [fee, setFee] = useState("");
  const [mintAddress, setMintAddress] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className='space-y-4'>
      <div className='p-4 bg-white shadow rounded'>
        <h2 className='text-lg font-bold mb-2'>Initialize Marketplace</h2>
        <input
          type='text'
          placeholder='Marketplace Name'
          value={marketplaceName}
          onChange={(e) => setMarketplaceName(e.target.value)}
          className='input'
        />
        <input
          type='text'
          placeholder='Fee'
          value={fee}
          onChange={(e) => setFee(e.target.value)}
          className='input'
        />
        <button
          onClick={() => initializeMarketplace(marketplaceName, fee)}
          className='btn-primary'
        >
          Initialize
        </button>
      </div>
      {/* <div className='p-4 bg-white shadow rounded'>
        <h2 className='text-lg font-bold mb-2'>List NFT</h2>
        <input
          type='text'
          placeholder='Marketplace Name'
          value={marketplaceName}
          onChange={(e) => setMarketplaceName(e.target.value)}
          className='input'
        />
        <input
          type='text'
          placeholder='Mint Address'
          value={mintAddress}
          onChange={(e) => setMintAddress(e.target.value)}
          className='input'
        />
        <input
          type='text'
          placeholder='Price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className='input'
        />
        <button
          onClick={() => listNFT(marketplaceName, price, mintAddress)}
          className='btn-primary'
        >
          List
        </button>
      </div>
      <div className='p-4 bg-white shadow rounded'>
        <h2 className='text-lg font-bold mb-2'>Delist NFT</h2>
        <input
          type='text'
          placeholder='Marketplace Name'
          value={marketplaceName}
          onChange={(e) => setMarketplaceName(e.target.value)}
          className='input'
        />
        <input
          type='text'
          placeholder='Mint Address'
          value={mintAddress}
          onChange={(e) => setMintAddress(e.target.value)}
          className='input'
        />
        <button
          onClick={() => delistNFT(marketplaceName, mintAddress)}
          className='btn-primary'
        >
          Delist
        </button>
      </div>
      <div className='p-4 bg-white shadow rounded'>
        <h2 className='text-lg font-bold mb-2'>Purchase NFT</h2>
        <input
          type='text'
          placeholder='Marketplace Name'
          value={marketplaceName}
          onChange={(e) => setMarketplaceName(e.target.value)}
          className='input'
        />
        <input
          type='text'
          placeholder='Mint Address'
          value={mintAddress}
          onChange={(e) => setMintAddress(e.target.value)}
          className='input'
        />
        <button
          onClick={() => purchaseNFT(marketplaceName, mintAddress)}
          className='btn-primary'
        >
          Purchase
        </button>
      </div> */}
    </div>
  );
}

export default MarketplaceActions;
