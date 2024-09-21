import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

const photos = [
  { src: "https://i.imgur.com/7CdDEvD.png", width: 400, height: 400 },
  {
    src: "https://i.imgur.com/sqMFWYA.png",
    width: 400,
    height: 400,
  },
  { src: "https://i.imgur.com/NWrNzBN.png", width: 400, height: 400 },
  { src: "https://i.imgur.com/pDUi73H.png", width: 400, height: 400 },
  { src: "https://i.imgur.com/8jnvOsH.png", width: 400, height: 400 },
  { src: "https://i.imgur.com/dzTEgPd.png", width: 400, height: 400 },
  { src: "https://i.imgur.com/FHZo1uQ.png", width: 400, height: 400 },
  { src: "https://i.imgur.com/lLVlTEv.png", width: 400, height: 400 },
  { src: "https://i.imgur.com/txCUT59.png", width: 400, height: 400 },
  { src: "https://i.imgur.com/ZCKhS1n.png", width: 400, height: 400 },
  { src: "https://i.imgur.com/dDNliEm.png", width: 400, height: 400 },
  { src: "https://i.imgur.com/CJmjBLt.png", width: 400, height: 400 },
];

const ProductsGallery = () => {
  return (
    <div className="">
      <ColumnsPhotoAlbum
        photos={photos}
        columns={(containerWidth) => {
          if (containerWidth < 500) return 1;
          if (containerWidth < 900) return 2;
          return 6;
        }}
      />
    </div>
  );
};

export default ProductsGallery;
