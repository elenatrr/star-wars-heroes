import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { fetchFilmsByHeroId, fetchHeroById, fetchStarshipsByHeroId } from '../lib/data';
import { Film, Starship } from '../lib/definitions';

export default async function HeroGraph({ heroId }: { heroId: number }) {
  const hero = await fetchHeroById(heroId);
  const heroStarships = await fetchStarshipsByHeroId(heroId)
  const heroFilms = await fetchFilmsByHeroId(heroId);
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
