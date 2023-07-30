// Flag component is used in the Contact section to make the languages I speak
// look more interesting
// Includes default styles which can be slightly overriden to fit the specific needs

import React from 'react'
import Image from 'next/image'

const Flag = ({
  source,
  alt,
  width,
  height,
  classname,
}: {
  source: string
  alt: string
  width: number
  height: number
  classname: string
}) => {
  return (
    <Image
      src={source}
      alt={alt}
      width={width}
      height={height}
      className={classname}
    />
  )
}

export default Flag
