import styles from './newsCard.module.css';
import DateIcon from '../../../images/Icons/ic_date_range_24px.svg';
import FavIcon from '../../../images/Icons/ic_favorite_border_24px.svg';
import ShareIcon from '../../../images/Icons/ic_share_24px.svg';

export const NewsCard = ({data}) => {
  return (
    <div className={styles.newsCard}>
      <img className={styles.newsImg} src={data?.image} alt={data.title} />
      <h5>{data.title}</h5>
      <span>
        <img src={DateIcon} alt="Date Icon" />
        {data.date}
      </span>
      <div>
        <h6>{data.type}</h6>
        <div>
          <img src={FavIcon} alt="Fav Icon" />
          <img src={ShareIcon} alt="Share Icon" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
