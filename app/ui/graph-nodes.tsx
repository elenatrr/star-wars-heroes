// This component displays all the information about the selected hero in the form of graph.
'use client'

import { ReactFlow, Controls, Background } from '@xyflow/react';
import CustomNode from './node-types/custom-node';
import { Film, GraphEdge, GraphNode, Hero, HeroFilmsData, HeroStarshipsData, Starship } from '../lib/definitions';

export default function GraphNodes({
  hero,
  heroStarships,
  heroFilms
}: {
  hero: Hero,
  heroStarships: HeroStarshipsData,
  heroFilms: HeroFilmsData
}) {
  // Customized node with specific styles.
  const nodeTypes = { custom: CustomNode };

  // Initial nodes array.
  const nodes: GraphNode[] = [{
    id: hero.name,
    type: 'custom',
    data: { name: hero.name, height: hero.height, hair_color: hero.hair_color, gender: hero.gender },
    position: { x: 250, y: 5 },
  }];

  // Initial edges empty array.
  const edges: GraphEdge[] = [];


  heroFilms.results.forEach(async (film: Film, index: number) => {
    // Push hero films into the nodes array.
    nodes.push({
      id: film.title,
      type: 'custom',
      data: { name: film.title, director: film.director, producer: film.producer },
      position: { x: 100 + index * 300, y: 300 },
    });

    // Push "hero-film" links into the edges array.
    edges.push({
      id: `${hero.name}-${film.title}`,
      source: hero.name,
      target: film.title,
      label: 'appears in',
    });

    heroStarships.results.forEach((starship: Starship, index: number) => {

      // Check if the starship was presented in the film.
      if (starship.films.includes(film.id)) {

        // Push hero starship into the nodes array.
        nodes.push({
          id: starship.name,
          type: 'custom',
          data: { name: starship.name, model: starship.model, max_atmosphering_speed: starship.max_atmosphering_speed },
          position: { x: 100 + index * 300, y: 600 },
        });

        // Push "film-starship" links into the edges array.
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