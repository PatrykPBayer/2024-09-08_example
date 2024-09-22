import ImageGallery from "react-image-gallery";
import styles from "./OfferGallery.module.css";
import { getGalleryItems } from "./getGalleryItems";

// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//   },
// ];

interface Props {
  images?: string[];
}

export const OfferGallery = (props: Props) => {
  if (!props.images || props.images.length < 2) {
    return null;
  }

  const images = getGalleryItems(props.images);

  return (
    <section className={styles.container}>
      <ImageGallery items={images} />
    </section>
  );
};
