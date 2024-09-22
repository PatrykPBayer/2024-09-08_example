import { ReactImageGalleryItem } from "react-image-gallery";

export const getGalleryItems = (images: string[]): ReactImageGalleryItem[] => {
  return images.map((imageUrl) => {
    return {
      original: imageUrl,
      thumbnail: imageUrl,
    };
  });
};
