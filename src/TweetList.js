import Tweet from './Tweet';

export default function DevToArticleList() {
  const tweetIds = [
    '1380273199812853767',
    '1403403419688243207',
    '1402412058923122689',
    '1401202542156058624',
    '1400894257112752128',
    '1400555383391989763'
  ];

  return (
    <section id="tweets" className="grid items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1">
      {
        tweetIds
          .map(tweetId => <Tweet key={tweetId} tweetId={tweetId} />)
      }
    </section>
  )
}