import { useEffect, useState } from 'react';
import axios from 'axios'
import DevToArticleItem from './DevToArticleItem';

export default function DevToArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(`https://dev.to/api/articles?username=thealexkates`)
      const articles = response.data;

      setArticles(articles);
    }

    getArticles();
  }, [])
  return (
    <div className="grid items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1">
      {
        articles
          .map(article => <DevToArticleItem key={article.id} article={article} />)
      }
    </div>
  )
}