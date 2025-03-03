import { fetchResults } from '@/lib/fetchResults';
import { Link } from 'lucide-react';
import { notFound } from 'next/navigation';

type Props = {
  searchParams: SearchParams;
};

export type SearchParams = {
  url: URL;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkin: string;
  checkout: string;
};

async function SearchPage({ searchParams }: Props) {
  if (!searchParams.url) return notFound();

  const results = await fetchResults(searchParams);

  if (!results) return <div>No results...</div>;

  console.log(results);

  return (
    <section>
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <h1 className="text-4xl font-bold pb-3">Your Trip Results</h1>
        <h2 className="pb-3">
          Dates of trip :
          <span className="italic ml-2">
            {searchParams.checkin} to {searchParams.checkout}
          </span>
        </h2>
        <h3 className="font-semibold text-xl">
          {results.content.total_listings}
        </h3>

        <div className="space-y-2 mt-5">
          {results.content.listings.map((item, i) => (
            <div
              key={i}
              className="flex space-y-2 justify-between space-x-4 p-5 border rounded-lg"
            >
              <img
                src={item.url}
                alt="image of property"
                className="h-44 w-44 rounded-lg"
              />
              <div className="flex flex-1 space-x-5 justify-between">
                <div>
                  <Link
                    href={item.link}
                    className="font-bold text-blue-500 hover:text-blue-600 hover:underline"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
