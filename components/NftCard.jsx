const NftCard = (props) => {
  const { name, nftImg, artistImg, artistName, price, highestBid, bgColor } =
    props;
  return (
    <div
      className={`flex flex-col justify-center rounded-2xl ${bgColor} w-full`}
    >
      <div className="h-60 w-xs md:h-[296px] md:w-[330px]">
        <img
          src={nftImg}
          className="h-full w-full rounded-t-2xl object-cover"
          alt=""
        />
      </div>

      <div className="p-5 pb-[25px]">
        <h3 className="mb-[5px] text-2xl font-semibold">{name}</h3>
        <div className="mb-[25px] flex items-center">
          <img src={artistImg} className="h-6 w-6 rounded-full" alt="artist" />
          <p className="ml-3">{artistName}</p>
        </div>
        <div className="flex justify-between font-space">
          <p>
            <span className="text-caption">Price</span> <br /> {price} ETH
          </p>
          <p>
            <span className="text-caption">Highest Bid</span> <br />{' '}
            {highestBid} wETH
          </p>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
