import Header from './Header';
import Content from './Content';

export default function App() {
  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen">
      <div className="container mx-auto px-4 md:px-10">
        <Header />
        <Content />
      </div>
    </div>
  );
}