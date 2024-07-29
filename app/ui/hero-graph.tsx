// This component fetches all the data that is displayed on the graph in the form of nodes.
import '@xyflow/react/dist/style.css';
import { fetchFilmsByHeroId, fetchHeroById, fetchStarshipsByHeroId } from '../lib/data';
import GraphNodes from './graph-nodes';
import { Film, Hero, HeroFilmsData, HeroStarshipsData, Starship } from '../lib/definitions';
import ErrorPage from '../error-page';

export default async function HeroGraph({ heroId }: { heroId: number }) {
  let hero: Hero | null = null;
  let heroStarships: HeroStarshipsData | null = null
  let heroFilms: HeroFilmsData | null = null

  try {
    hero = await fetchHeroById(heroId);
    heroStarships = await fetchStarshipsByHeroId(heroId)
    heroFilms = await fetchFilmsByHeroId(heroId);
  } catch (error) {
    console.error("Database Error:", error);
  }

  if (!hero || !heroFilms || !heroStarships) {
    return <ErrorPage/>
  }

  return (
    <GraphNodes hero={hero} heroStarships={heroStarships} heroFilms={heroFilms} />
  );
}
