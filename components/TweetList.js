import Tweet from './Tweet';
import SectionHeader from './SectionHeader';
import meTweet from '../images/me_tweet.png';

export default function DevToArticleList() {
  const tweetIds = [
    '1403403419688243207',
    '1406586524792246280',
    '1404929365209751552',
    '1402412058923122689',
    '1400894257112752128',
    '1400555383391989763'
  ];

  return (
    <section id="tweets">
      <SectionHeader text="Recent Tweets" imageSrc={meTweet} />
      <div className="grid items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1">
        {
          tweetIds
            .map(tweetId => <Tweet key={tweetId} tweetId={tweetId} />)
        }
      </div>
    </section>
  )
}