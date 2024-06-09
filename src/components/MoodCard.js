import Link from 'next/link';

export default function MoodCard({ mood }) {
  return (
    <Link href={`/mood/${mood.name}`}>
      <a className="block p-4 bg-gray-200 rounded shadow-md hover:bg-gray-300 text-center">
        <h2 className="text-xl font-semibold">{mood.name}</h2>
      </a>
    </Link>
  );
}
