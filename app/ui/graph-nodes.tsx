'use client'

import { ReactFlow, Controls, Background } from '@xyflow/react';
import CustomNode from './node-types/custom-node';
import { Film, Hero, HeroFilmsData, HeroStarshipsData, Starship } from '../lib/definitions';

export default function GraphNodes({
  hero,
  heroStarships,
  heroFilms
}: {
  hero: Hero,
  heroStarships: HeroStarshipsData,
  heroFilms: HeroFilmsData
}) {
  const edges: { id: string, source: string, target: string, label?: string, type?: string }[] = [];
  const nodeTypes = { custom: CustomNode };
  const nodes: {
    id: string,
    type: string,
    data: { [key: string]: string },
    position: { x: number, y: number },
  }[] = [
      {
        id: hero.name,
        type: 'custom',
        data: { name: hero.name, height: hero.height, hair_color: hero.hair_color, gender: hero.gender },
        position: { x: 250, y: 5 },
      },
    ];

  heroFilms.results.forEach(async (film: Film, index: number) => {
    nodes.push({
      id: film.title,
      type: 'custom',
      data: { name: film.title, director: film.director, producer: film.producer },
      position: { x: 100 + index * 300, y: 300 },
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
          type: 'custom',
          data: { name: starship.name, model: starship.model, max_atmosphering_speed: starship.max_atmosphering_speed },
          position: { x: 100 + index * 300, y: 600 },
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
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
}