import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            Mood Movie App
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/">Home
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
}
