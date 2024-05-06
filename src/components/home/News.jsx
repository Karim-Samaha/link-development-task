import Container from '../shared/Container/Container';
import styles from './home.module.css';
import {AllNews} from '../../data/Data';
import {useMemo, useState} from 'react';
import NewsCard from '../shared/News/NewsCard';
import PrymaryButton from '../shared/Button/PrimaryButton';
import NewsSectionIconBg from '../../images/Decore (5).svg';
export const NewsSection = () => {
  const NewsButtons = useMemo(() => ['All news', ...[...new Set(AllNews.map((item) => item.type))]], []);
  const [currentNews, setCurrentNews] = useState(NewsButtons[0]);
  const renderNewsSelectionButtons = () => {
    return NewsButtons.map((item) => (
      <button className={item === currentNews && styles.newsActive} key={item} onClick={() => setCurrentNews(item)}>
        {item}
      </button>
    ));
  };
  const renderNewsCards = () => {
    let newsToBeRendered = AllNews;
    if (currentNews !== 'All news') {
      newsToBeRendered = AllNews.filter((item) => item.type === currentNews);
    }
    return newsToBeRendered.map((item) => <NewsCard key={item.id} data={item} />);
  };
  return (
    <section className={styles.newsSection}>
      <img src={NewsSectionIconBg} alt="News BG" />
      <Container className={styles.newsContainer}>
        <h4>Media</h4>
        <h2>Top News</h2>
        <div className={styles.selectionButtons}>{renderNewsSelectionButtons()}</div>
        <div className={styles.newsCards}>{renderNewsCards()}</div>
        <div className={styles.newsButtonContainer}>
          <PrymaryButton text="View All News" />
        </div>
      </Container>
    </section>
  );
};

export default NewsSection;
