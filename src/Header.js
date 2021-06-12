import me from './me_bitmoji.png';

export default function Header() {
  return (
    <header className="flex justify-center sm:justify-between space-x-4 p-6">
      <div className="flex items-center">
        <img className="rounded-full w-10 h-10 mr-4" src={me} alt="" />
        <a href="/" className="hover:text-white text-2xl">alexkates.dev</a>
      </div>
    </header>
  );
}