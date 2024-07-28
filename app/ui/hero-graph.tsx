import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { fetchFilmsByHeroId, fetchHeroById, fetchStarshipsByHeroId } from '../lib/data';
import { Film, Hero, Starship } from '../lib/definitions';

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
    return <div className="font-sans p-4 text-center text-rose-600">Failed to load data. Please try again later.</div>;
  }

  if (!hero || !heroFilms || !heroStarships) {
    return <div className="font-sans p-4 text-center text-rose-600">Failed to load data. Please try again later.</div>;
  }

  const reactFlowStyle = {
    backgroundColor: '#000',
    color: "#000",
    borderRadius: "12px",
  };
  const edges: { id: string, source: string, target: string, label?: string, type?: string }[] = [];
  const nodes = [
    {
      id: hero.name,
      data: { label: hero.name },
      position: { x: 250, y: 5 },
      style: { border: '4px solid #FFE81F', padding: 10 }
    },
  ];

  heroFilms.results.forEach(async (film: Film, index: number) => {
    nodes.push({
      id: film.title,
      data: { label: film.title },
      position: { x: 100 + index * 200, y: 200 },
      style: { border: '4px solid #FFE81F', padding: 10 }
    });

    edges.push({
      id: `${hero.name}-${film.title}`,
      source: hero.name,
      target: film.title,
      label: 'appears in',
    });

    heroStarships.results.forEach((starship: Starship, index: number) => {
      if (starship.films.includes(film.id)) {
        nodes.push({
          id: starship.name,
          data: { label: starship.name },
          position: { x: 100 + index * 200, y: 400 },
          style: { border: '4px solid #FFE81F', padding: 10 }
        });

        edges.push({
          id: `${film.title}-${starship.name}`,
          source: film.title,
          target: starship.name,
          label: 'piloted'
        });
      }
      return
    });
  })

  return (
    <ReactFlow nodes={nodes} edges={edges} style={reactFlowStyle} fitView>
      <Background />
      <Controls />
    </ReactFlow>
  );
}
