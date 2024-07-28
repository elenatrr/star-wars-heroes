import HeroesList from "./ui/heroes-list";
import { fetchHeroes } from "./lib/data";
import Pagination from "./ui/pagination";
import HeroGraph from "./ui/hero-graph";
import { Suspense } from "react";
import { HeroGraphSkeleton } from "./ui/skeletons";
import GraphReplacer from "./ui/graph-replacer";

export default async function Home({
  searchParams
}: {
  searchParams?: {
    page?: string,
    heroId?: string
  }
}) {
  const currentPage = Number(searchParams?.page) || 1
  const selectedHeroId = Number(searchParams?.heroId) || null

  const heroesData = await fetchHeroes(currentPage)
  const heroesArray = heroesData.results

  const totalPages = Math.ceil(heroesData.count / 10)

  return (
    <main className="container mx-auto p-4 flex flex-col min-h-screen">
      <h1 className={`font-starjedi text-3xl font-bold mb-8 whitespace-pre-line text-banana text-center`}>{`Star\nWars\nHeroes`}</h1>
      <div className="flex-1 mb-6 font-sans">
        <div className="flex gap-4">
          <div className="w-1/4">
            <HeroesList heroesArray={heroesArray} selectedHeroId={selectedHeroId}/>
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
