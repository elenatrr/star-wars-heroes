import Image from "next/image"

export default function GraphReplacer() {
  return (
    <div className="w-full bg-black h-full rounded overflow-hidden relative">
      <Image
        src="/graph-replacer-bg.webp"
        width={600}
        height={500}
        className="w-full h-full object-cover object-right-top"
        alt="Star Wars hero walking in the snow"
      />
    </div>
  )
}