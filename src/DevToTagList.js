import DevToTagItem from './DevToTagItem'

export default function DevToTagList({ tags }) {
    return (
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            {
                tags
                    .slice(0, 3)
                    .map(tag => <DevToTagItem key={tag} tag={tag} />)
            }
        </span>
    )
}