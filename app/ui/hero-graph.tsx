import '@xyflow/react/dist/style.css';
import { fetchFilmsByHeroId, fetchHeroById, fetchStarshipsByHeroId } from '../lib/data';
import { Film, Hero, Starship } from '../lib/definitions';
import GraphNodes from './graph-nodes';

export default async function HeroGraph({ heroId }: { heroId: number }) {
  let hero: Hero | null = null;
  let heroStarships: {
    count: string;
    next: string | null;
    previous: string | null;
    results: Starship[]
  } | null = null
  let heroFilms: {
    count: string;
    next: string | null;
    previous: string | null;
    results: Film[]
  } | null = null

  try {
    hero = await fetchHeroById(heroId);
    heroStarships = await fetchStarshipsByHeroId(heroId)
    heroFilms = await fetchFilmsByHeroId(heroId);
  } catch (error) {
    console.error("Database Error:", error);
    return <div className="font-sans p-4 text-center text-rose-600">Failed to load data.</div>;
  }

  if (!hero || !heroFilms || !heroStarships) {
    return <div className="font-sans p-4 text-center text-rose-600">Failed to load data.</div>;
  }

  return (
    <GraphNodes hero={hero} heroStarships={heroStarships} heroFilms={heroFilms}/>
  );
}
