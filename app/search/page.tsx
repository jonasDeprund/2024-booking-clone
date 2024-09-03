import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  searchParams: SearchParams;
};

type searchParams = {
  url: URL;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkin: string;
  checkout: string;
};

async function SearchPage({ searchParams }: Props) {
  console.log(searchParams);
  if (!searchParams.url) return notFound();

  const results = await fetchResults(searchParams);

  if (!results) return <div>No results...</div>;
  return <div>SearchPage</div>;
}

export default SearchPage;
