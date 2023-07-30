// Project Card is used in the skills section to make consistent looking project cards
// Includes default styles which can be slightly overriden to fit the specific needs

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({
  name,
  description,
  tools,
  imgUrl,
  liveUrl,
  githubUrl,
}: {
  name: string
  description: string
  tools: string
  imgUrl: string
  liveUrl: string
  githubUrl: string
}) => {
  return (
    <div className="text-[20px] md:text-[18px] text-left mont smallCaps md:mb-[50px] xl:mb-[20px] w-[301px] relative">
      {/* Project image */}

      <Image
        src={imgUrl}
        width={350}
        height={300}
        alt={name}
        className="drop-shadow-2xl imageBorder"
      />

      {/* Github logo */}
      <Link
        href={githubUrl}
        target="_blank"
        className="bg-white p-[3px] xs:mr-[10px] absolute top-1 right-10 rounded-[15px]"
      >
        <Image
          src="/githubLogo.svg"
          width={25}
          height={25}
          alt="github logo"
          className="xs:w-[35px]"
        />
      </Link>

      {/* Live site url */}
      <Link
        href={liveUrl}
        target="_blank"
        className="bg-white p-[3px] absolute top-1 right-1 rounded-[15px]"
      >
        <Image
          src="/liveUrlButton.svg"
          width={25}
          height={25}
          alt="live logo"
          className="xs:w-[35px]"
        />
      </Link>

      {/* Details */}
      <p>{name}</p>
      <p>{description}</p>
      <p>{tools}</p>
    </div>
  )
}

export default ProjectCard
