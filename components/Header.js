import me from '../images/me_bitmoji.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex justify-center md:justify-between space-x-4 p-6">
      <div className="flex items-center">
        <Image className="rounded-full" width="40px" height="40px" src={me} alt="" />
        <a href="/" className="hover:text-white ml-4 text-2xl">alexkates.dev</a>
      </div>
      <nav className="hidden text-xl md:flex items-center">
        <AnchorLink className="mx-2" href='#articles'>Articles</AnchorLink>
        <AnchorLink className="mx-2" href='#tweets'>Tweets</AnchorLink>
      </nav>
    </header>
  );
}