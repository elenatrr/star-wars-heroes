import HeroList from "./ui/hero-list";
import { fetchHeroes } from "./lib/data";
import Pagination from "./ui/pagination";
import HeroGraph from "./ui/hero-graph";
import { Suspense } from "react";
import { HeroListSkeleton, HeroGraphSkeleton } from "./ui/skeletons";
import GraphReplacer from "./ui/graph-replacer";

export default async function Home({
  searchParams
}: {
  searchParams?: {
    page?: string,
    heroId?: string
  }
}) {
  // Retrieve searchParams to set the right page for pagination and display correct data for selected hero.
  const currentPage = Number(searchParams?.page) || 1
  const selectedHeroId = Number(searchParams?.heroId) || null

  // Fetch heroes data to count the total pages and pass the array of heroes to the HeroList component.
  const heroesData = await fetchHeroes(currentPage)
  const totalPages = Math.ceil(heroesData.count / 10)
  const heroesArray = heroesData.results

  return (
    <main className="container mx-auto p-4 flex flex-col min-h-screen font-sans">
      <h1 className={`font-starjedi text-3xl font-bold mb-8 whitespace-pre-line text-banana text-center`}>{`Star\nWars\nHeroes`}</h1>
      <p className="mb-4 text-lg italic">Choose a hero to see their details:</p>
      <div className="flex-1 mb-6">
        <div className="flex gap-4">
          <div className="w-1/4">
            <Suspense key={currentPage} fallback={<HeroListSkeleton />}>
              <HeroList heroesArray={heroesArray} selectedHeroId={selectedHeroId} />
            </Suspense>
          </div>
          <div className="w-3/4 flex-1 mb-2">
            {selectedHeroId ?
              <Suspense key={currentPage} fallback={<HeroGraphSkeleton />}>
                <HeroGraph heroId={selectedHeroId} />
              </Suspense>
              : <GraphReplacer />
            }
          </div>
        </div>
      </div>
      <Pagination totalPages={totalPages} />
    </main>
  );
}
