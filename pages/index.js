"use client";
import React from "react";
import { useMarketplace } from "../hooks/marketplace";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "tailwindcss/tailwind.css";
import MarketplaceActions from "../components/MarketplaceActions";
import { Link } from "next/navigation";
import { fetchMarketplaceData } from "../utils/fetchMarketplaceData";
import NftCard from "../components/NftCard";
import SearchInput from "../components/SearchInput";
import { useEffect, useState } from "react";

export default function App() {
  const { initializeMarketplace, listNFT, delistNFT, purchaseNFT } =
    useMarketplace();

  const [nftData, setNftData] = useState([]);

  useEffect(() => {
    const data = fetchMarketplaceData();
    setNftData(data);
  }, []);

  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <header className='bg-white shadow mb-6'>
        <div className='container mx-auto py-4 flex justify-between items-center'>
          <h1 className='text-xl font-bold'>Solana NFT Marketplace</h1>
          <WalletMultiButton />
        </div>
      </header>
      <main className=''>
        <div className='flex flex-col items-center self-stretch'>
          <div className='flex w-full max-w-xs flex-col items-start gap-7 py-10 md:max-w-2xl md:py-14 lg:max-w-5xl lg:py-20'>
            <div className='space-y-2.5'>
              <h1 className='text-3xl font-semibold md:text-4xl lg:text-5xl'>
                Browse Marketplace
              </h1>
              <p className='lg:text-2xl'>
                Browse through more than 50k NFTs on the NFT Marketplace.
              </p>
              <WalletMultiButton />
            </div>
            <div className='self-stretch'>
              <SearchInput />
            </div>
          </div>

          <div className='flex items-center justify-center self-stretch border border-secondary pt-2.5'>
            <div className='flex h-14 w-full max-w-xs items-center gap-2.5 md:max-w-2xl lg:max-w-5xl'>
              <div className='flex h-full flex-1 items-center justify-center border-b-2'>
                NFTs
                <span className='ml-4 hidden rounded-3xl bg-caption px-4 py-2 font-space text-base md:flex'>
                  302
                </span>
              </div>
              <div className='flex h-full flex-1 items-center justify-center'>
                Collections
                <span className='ml-4 hidden rounded-3xl bg-secondary px-4 py-2 font-space text-base md:flex'>
                  30
                </span>
              </div>
            </div>
          </div>

          <div className='flex justify-center self-stretch border-b-4 border-primary bg-secondary py-10 md:py-14'>
            <div className='flex w-xs flex-wrap items-center justify-center gap-5 md:w-2xl lg:w-5xl'>
              {nftData.map((item, index) => (
                <Link
                  href={`/nft/${item.id}`} // Update the link to a dynamic route if needed
                  key={item.id}
                >
                  <a
                    className={`animation flex cursor-pointer ${
                      index >= 4 && index <= 7 ? "hidden md:flex" : ""
                    } ${index >= 8 ? "hidden lg:flex" : ""}`}
                  >
                    <NftCard
                      name={item.name}
                      nftImg={item.nftImg}
                      artistImg={item.artistImg}
                      artistName={item.artist}
                      price={item.price}
                      highestBid={item.highestBid}
                      bgColor='bg-primary'
                    />
                  </a>
                </Link>
              ))}
              {/* {db.map((item, index) => (
            <Link
              to='/nft'
              className={`animation flex cursor-pointer ${
                index >= 4 && index <= 7 ? "hidden md:flex" : ""
              } ${index >= 8 ? "hidden lg:flex" : ""}`}
              key={item.id}
            >
              <NftCard
                name={item.name}
                nftImg={images[`ma${item.id}`]}
                artistImg={images[`maA${item.id}`]}
                artistName={item.artist}
                price={item.price}
                highestBid={item.highestBid}
                bgColor={"bg-primary"}
              />
            </Link>
          ))} */}
            </div>
          </div>

          <MarketplaceActions
            initializeMarketplace={initializeMarketplace}
            listNFT={listNFT}
            delistNFT={delistNFT}
            purchaseNFT={purchaseNFT}
          />
        </div>
      </main>
    </div>
  );
}
