import Header from '../components/Header';
import Content from '../components/Content';

export default function Home() {
  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen">
      <div className="container mx-auto">
        <Header />
        <Content />
      </div>
    </div>
  );
}