export default function DevToArticleItem({ article }) {
  return (
    <div className="px-4 py-8 lg:p-8">
      <div className="max-w-lg rounded overflow-hidden shadow-2xl">
        <img className="w-full" src={article.cover_image} alt={article.title} />
        <div className="px-6 py-4">
          <a className="hover:text-gray-100" href={article.url} target="blank">
            <p className="font-bold text-xl mb-2 ">
              {article.title}
            </p>
            <p className="font-normal text-sm ">
              {article.description}
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}