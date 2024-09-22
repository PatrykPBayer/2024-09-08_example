import styles from "./OfferHeader.module.css";

interface Props {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export const OfferHeader = (props: Props) => {
  return (
    <header className={styles.container}>
      <img src={props.imageUrl} alt={props.title} className={styles.image} />
      <div>
        <h1>{props.title}</h1>
        <div className={styles.category}>{props.category}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </header>
  );
};
