import { Hero } from "../lib/definitions";
import HeroeItem from "./hero-item";

export default async function HeroList({ heroesArray, selectedHeroId }: { heroesArray: Hero[], selectedHeroId: number | null }) {
  return (
    <ul>
      {heroesArray.map((hero: Hero) => {
        return <li key={hero.id} className={`p-1 mb-2 text-center rounded-full border-2 cursor-pointer transition-colors hover:bg-white hover:text-black ${selectedHeroId === hero.id ? "bg-banana text-black border-banana" : "bg-black text-white"}`}>
          <HeroeItem hero={hero} />
        </li>
      })}
    </ul>
  )
}