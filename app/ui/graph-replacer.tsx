// This component replaces HeroGraph component if no hero was selected.
import Image from "next/image"

export default function GraphReplacer() {
  return (
    <div className="bg-black h-full rounded overflow-hidden relative graph-image-height">
      <Image
        src="/graph-replacer-bg.webp"
        width={500}
        height={400}
        className="w-full h-full object-cover object-right-top"
        alt="Star Wars hero walking in the snow"
        priority={true}
      />
    </div>
  )
}