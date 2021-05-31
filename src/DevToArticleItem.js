import DevToTagList from './DevToTagList';

export default function DevToArticleItem({ article }) {
    return (
        <div className="p-10">
            <div className="max-w-lgrounded overflow-hidden shadow-2xl">
                <img className="w-full" src={article.cover_image} alt={article.title} />
                <div className="px-6 py-4">
                    <a className="hover:text-gray-50" href={article.url} target="blank">
                        <p className="font-bold text-xl mb-2 ">
                            {article.title}
                        </p>
                        <p className="font-normal text-sm ">
                            {article.description}
                        </p>
                    </a>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <DevToTagList tags={article.tag_list} />
                </div>
            </div>
        </div>
    )
}