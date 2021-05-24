import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialIcon({
    href,
    icon,
}) {
    return (
        <a className="text-xl hover:text-gray-300" href={href} target="blank">
            <FontAwesomeIcon icon={icon} />
        </a>
    );
}