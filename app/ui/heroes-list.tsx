import { Hero } from "../lib/definitions";
import HeroeItem from "./hero-item";

export default async function HeroesList({ heroesArray, selectedHeroId }: { heroesArray: Hero[], selectedHeroId: number | null }) {

  if (!heroesArray || heroesArray.length === 0) {
    return <div className="font-sans p-4 text-center text-rose-600">Failed to load data. Please try again later.</div>;
  }

  return (
    <ul>
      {heroesArray.map((hero: Hero) => {
        return <li key={hero.id} className={`p-1 mb-2 text-center rounded-full border-2 cursor-pointer hover:bg-white hover:text-black ${selectedHeroId === hero.id ? "bg-banana text-black border-banana" : "bg-black text-white"}`}>
          <HeroeItem hero={hero} />
        </li>
      })}
    </ul>
  )
}