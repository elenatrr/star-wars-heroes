'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Hero } from "../lib/definitions";

export default function HeroItem({ hero, selectedHeroId }: { hero: Hero, selectedHeroId: number | null }) {
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()

  const handleSelectedHeroId = (heroId: number) => {
    const params = new URLSearchParams(searchParams)

    if (heroId) {
      params.set("heroId", heroId.toString())
    } else {
      params.delete("heroId")
    }
    // Change selected hero ID in URL params.
    replace(`${pathname}?${params.toString()}`)
  }


  return (
    <li onClick={() => handleSelectedHeroId(hero.id)} className={`p-1 mb-2 text-center rounded-full border-2 cursor-pointer transition-colors hover:bg-white hover:text-black ${selectedHeroId === hero.id ? "bg-banana text-black border-banana" : "bg-black text-white"}`}>
      <p>
        {hero.name}
      </p>
    </li>
  )
}