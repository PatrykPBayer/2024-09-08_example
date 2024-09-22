import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Offer as OfferData } from "../../@types/Offer";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { OfferHeader } from "./components/OfferHeader/OfferHeader";
import { OfferGallery } from "./components/OfferHeader/OfferGallery/OfferGallery";

export const Offer = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState<OfferData | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    setIsError(false);
    axios
      .get<OfferData>(`https://dummyjson.com/products/${id}`)
      .then((response) => setOffer(response.data))
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [id]);

  const reloadPage = () => {
    window.location.reload();
  };

  if (isFetching) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Button variant="contained" onClick={reloadPage} />;
  }

  if (!isFetching && !offer) {
    return <div>No offer data</div>;
  }

  if (!offer) {
    return <div>No offer data</div>;
  }

  return (
    <div>
      <OfferHeader
        title={offer.title}
        category={offer.category}
        imageUrl={offer.thumbnail}
        description={offer.description}
      />
      <OfferGallery images={offer.images} />
    </div>
  );

  return <div>Offer: {id}</div>;
};
