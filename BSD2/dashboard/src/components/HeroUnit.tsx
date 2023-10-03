import Image from "next/image"
import React from "react"

const HeroUnit = () => {
  return (
    <div>
      Hero unit
      <Image
        src={"/next.svg"}
        alt='Logo next'
        width={300}
        height={200}
        priority
      />
    </div>
  )
}

export default HeroUnit
