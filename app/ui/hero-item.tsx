'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Hero } from "../lib/definitions";

export default function HeroeItem({ hero }: { hero: Hero }) {
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

    replace(`${pathname}?${params.toString()}`)
  }


  return (
    <p onClick={() => handleSelectedHeroId(hero.id)}>
      {hero.name}
    </p>
  )
}