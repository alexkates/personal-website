import DevToArticleList from './DevToArticleList';
import Hero from './Hero';
import TweetList from './TweetList';

export default function Content() {
  return (
    <div className="px-6">
      <Hero />
      <DevToArticleList />
      <TweetList />
    </div>
  );
}