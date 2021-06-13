import { Tweet as TweetWidget } from 'react-twitter-widgets'

export default function Tweet({ tweetId }) {
  return (
    <div className="px-4 py-8 lg:p-8">
      <TweetWidget tweetId={tweetId} options={{ theme: "dark" }} />
    </div>
  )
}