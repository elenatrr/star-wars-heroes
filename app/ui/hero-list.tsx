import { Hero } from "../lib/definitions";
import HeroItem from "./hero-item";

export default async function HeroList({ heroesArray, selectedHeroId }: { heroesArray: Hero[], selectedHeroId: number | null }) {
  return (
    <ul className="flex md:flex-col flex-wrap gap-2 justify-center">
      {heroesArray.map((hero: Hero) => {
        return <HeroItem key={hero.id} hero={hero} selectedHeroId={selectedHeroId}/>
      })}
    </ul>
  )
}