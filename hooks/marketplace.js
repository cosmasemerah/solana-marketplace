import { AnchorProvider, Program, web3, BN } from "@project-serum/anchor";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { IDL } from "../constants/idl"; // Import your IDL here
import { MARKETPLACE_PROGRAM_PUBKEY } from "../constants";
import {
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { Buffer } from "buffer";

export function useMarketplace() {
  const wallet = useAnchorWallet();
  const programID = MARKETPLACE_PROGRAM_PUBKEY;
  const network = clusterApiUrl("devnet");
  const connection = new Connection(network);
  const provider = new AnchorProvider(connection, wallet, {
    commitment: "processed",
  });
  const program = new Program(IDL, programID, provider);

  // Initialize Marketplace
  const initializeMarketplace = async (name, fee) => {
    const [marketplacePDA, marketplaceBump] = findProgramAddressSync(
      [Buffer.from("marketplace"), Buffer.from(name)],
      programID
    );

    const [rewardsMintPDA] = findProgramAddressSync(
      [Buffer.from("rewards"), marketplacePDA.toBuffer()],
      programID
    );

    const [treasuryPDA] = findProgramAddressSync(
      [Buffer.from("treasury"), marketplacePDA.toBuffer()],
      programID
    );

    const tx = await program.methods
      .initialize(name, new BN(fee), {
        accounts: {
          admin: provider.wallet.publicKey,
          marketplace: marketplacePDA,
          rewardsMint: rewardsMintPDA,
          treasury: treasuryPDA,
          systemProgram: web3.SystemProgram.programId,
          tokenProgram: TOKEN_PROGRAM_ID,
        },
      })
      .rpc();
    console.log("Marketplace initialized, transaction:", tx);
  };

  // List NFT
  const listNFT = async (marketplaceName, price, mintAddress) => {
    const [marketplacePDA] = findProgramAddressSync(
      [Buffer.from("marketplace"), Buffer.from(marketplaceName)],
      programID
    );

    const [listingPDA] = findProgramAddressSync(
      [marketplacePDA.toBuffer(), new PublicKey(mintAddress).toBuffer()],
      programID
    );

    const [makerATA] = findProgramAddressSync(
      [
        provider.wallet.publicKey.toBuffer(),
        TOKEN_PROGRAM_ID.toBuffer(),
        new PublicKey(mintAddress).toBuffer(),
      ],
      ASSOCIATED_TOKEN_PROGRAM_ID
    );

    const [vaultATA] = findProgramAddressSync(
      [
        listingPDA.toBuffer(),
        TOKEN_PROGRAM_ID.toBuffer(),
        new PublicKey(mintAddress).toBuffer(),
      ],
      ASSOCIATED_TOKEN_PROGRAM_ID
    );

    const tx = await program.methods
      .list(new BN(price), {
        accounts: {
          maker: provider.wallet.publicKey,
          marketplace: marketplacePDA,
          makerMint: new PublicKey(mintAddress),
          makerAta: makerATA,
          vault: vaultATA,
          listing: listingPDA,
          tokenProgram: TOKEN_PROGRAM_ID,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
          systemProgram: web3.SystemProgram.programId,
        },
      })
      .rpc();
    console.log("NFT listed, transaction:", tx);
  };

  // Delist NFT
  const delistNFT = async (marketplaceName, mintAddress) => {
    const [marketplacePDA] = findProgramAddressSync(
      [Buffer.from("marketplace"), Buffer.from(marketplaceName)],
      programID
    );

    const [listingPDA] = findProgramAddressSync(
      [marketplacePDA.toBuffer(), new PublicKey(mintAddress).toBuffer()],
      programID
    );

    const [makerATA] = findProgramAddressSync(
      [
        provider.wallet.publicKey.toBuffer(),
        TOKEN_PROGRAM_ID.toBuffer(),
        new PublicKey(mintAddress).toBuffer(),
      ],
      ASSOCIATED_TOKEN_PROGRAM_ID
    );

    const [vaultATA] = findProgramAddressSync(
      [
        listingPDA.toBuffer(),
        TOKEN_PROGRAM_ID.toBuffer(),
        new PublicKey(mintAddress).toBuffer(),
      ],
      ASSOCIATED_TOKEN_PROGRAM_ID
    );

    const tx = await program.methods
      .delist({
        accounts: {
          maker: provider.wallet.publicKey,
          marketplace: marketplacePDA,
          makerMint: new PublicKey(mintAddress),
          makerAta: makerATA,
          listing: listingPDA,
          vault: vaultATA,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: web3.SystemProgram.programId,
        },
      })
      .rpc();
    console.log("NFT delisted, transaction:", tx);
  };

  // Purchase NFT
  const purchaseNFT = async (marketplaceName, mintAddress) => {
    const [marketplacePDA] = findProgramAddressSync(
      [Buffer.from("marketplace"), Buffer.from(marketplaceName)],
      programID
    );

    const [listingPDA] = findProgramAddressSync(
      [marketplacePDA.toBuffer(), new PublicKey(mintAddress).toBuffer()],
      programID
    );

    const [rewardsMintPDA] = findProgramAddressSync(
      [Buffer.from("rewards"), marketplacePDA.toBuffer()],
      programID
    );

    const [treasuryPDA] = findProgramAddressSync(
      [Buffer.from("treasury"), marketplacePDA.toBuffer()],
      programID
    );

    const [takerATA] = findProgramAddressSync(
      [
        provider.wallet.publicKey.toBuffer(),
        TOKEN_PROGRAM_ID.toBuffer(),
        new PublicKey(mintAddress).toBuffer(),
      ],
      ASSOCIATED_TOKEN_PROGRAM_ID
    );

    const [vaultATA] = findProgramAddressSync(
      [
        listingPDA.toBuffer(),
        TOKEN_PROGRAM_ID.toBuffer(),
        new PublicKey(mintAddress).toBuffer(),
      ],
      ASSOCIATED_TOKEN_PROGRAM_ID
    );

    const tx = await program.methods
      .purchase({
        accounts: {
          taker: provider.wallet.publicKey,
          maker: null, // Provide maker account public key
          makerMint: new PublicKey(mintAddress),
          marketplace: marketplacePDA,
          takerAta: takerATA,
          vault: vaultATA,
          rewards: rewardsMintPDA,
          listing: listingPDA,
          treasury: treasuryPDA,
          tokenProgram: TOKEN_PROGRAM_ID,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
          systemProgram: web3.SystemProgram.programId,
        },
      })
      .rpc();
    console.log("NFT purchased, transaction:", tx);
  };

  return { initializeMarketplace, listNFT, delistNFT, purchaseNFT };
}
