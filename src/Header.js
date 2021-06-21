import me from './me_bitmoji.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Header() {
  return (
    <header className="flex justify-center md:justify-between space-x-4 p-6">
      <div className="flex items-center">
        <img className="rounded-full w-10 h-10 mr-4" src={me} alt="" />
        <a href="/" className="hover:text-white text-2xl">alexkates.dev</a>
      </div>
      <nav className="hidden text-xl md:flex items-center">
        <AnchorLink className="mx-2" href='#articles'>Articles</AnchorLink>
        <AnchorLink className="mx-2" href='#tweets'>Tweets</AnchorLink>
      </nav>
    </header>
  );
}