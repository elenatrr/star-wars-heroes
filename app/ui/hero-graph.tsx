// This component fetches all the data that is displayed on the graph in the form of nodes.
import '@xyflow/react/dist/style.css';
import { fetchFilmsByHeroId, fetchHeroById, fetchStarshipsByHeroId } from '../lib/data';
import GraphNodes from './graph-nodes';

export default async function HeroGraph({ heroId }: { heroId: number }) {
  const hero = await fetchHeroById(heroId);
  const heroFilms = await fetchFilmsByHeroId(heroId);
  const heroStarships = await fetchStarshipsByHeroId(heroId);

  return (
    <div className="w-full flex-1 mb-2 react-flow-height md:h-full">
      <GraphNodes hero={hero} heroStarships={heroStarships} heroFilms={heroFilms} />
    </div>
  );
}
