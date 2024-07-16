import db from "../db/marketplace.json";
import { marketImgData as images } from "./imageData";

export const fetchMarketplaceData = () => {
  return db.map((item) => ({
    ...item,
    nftImg: images[`ma${item.id}`],
    artistImg: images[`maA${item.id}`],
  }));
};
