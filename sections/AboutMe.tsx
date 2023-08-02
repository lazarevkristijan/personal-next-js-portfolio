'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heading, Button } from '../components/index'
import {
  sectionMediaQueries,
  sectionTopDivStyles,
  aboutTextStyles,
  hoverStyles,
} from '@/constants'

const AboutMe = () => {
  // States to show the full introduction text
  const [moreLessText, setMoreLessText] = useState('more')
  const [isFullText, setIsFullText] = useState(true)

  // Function to handle the showing and hiding of the full text
  // On lg(1020) > the full text gets automatically shown
  // On lg(1020) < the text is cut in half and a more button appear to show it
  useEffect(() => {
    const handleResize = () => {
      const onLargeRender = window.innerWidth > 1020
      setIsFullText(onLargeRender)
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleMoreLessOption = () => {
    setMoreLessText((prev) => (prev === 'more' ? 'less' : 'more'))
  }

  return (
    <div className={`mont xs:text-center ${sectionTopDivStyles}`} id="aboutMe">
      <div className={`${sectionMediaQueries} xs:w-[90%]`}>
        <Heading title="ABOUT ME" />
        {/* Div for the text */}
        <div className="mt-[80px] md:mt-[60px] md:mb-[60px] flex flex-wrap">
          <div
            className={`${aboutTextStyles} xl:pr-[20px] xs:mx-auto w-1/2 lg:w-full md:w-[450px] sm:w-[300px] text-justify`}
          >
            <p>
              KRISTIJAN, a 20 years old boy, overfilled with enthusiasm &
              craving for success. i accept every challenge as an opportunity
              for personal, professional growth & development. love taking
              risks, improving my mind, my body & health, making life purposely
              uncomfortable to get the best out of it!
            </p>

            {isFullText && (
              <p className="mt-[20px] lg:hidden">
                working since the age of 13, coming with experience as a sales
                agent, electrician & fitness trainer. since jan 2023 fully
                committed to front end web development. i withhold high level
                skills in computer set-ups and it&#39;s ecosystem, graphics
                design & 96 wpm typing speed. i possess good knowledge of the
                front end environment, how the internet works & a basic
                understanding of the back end workflow. constantly working on
                new ideas and learning new skills through projects & books
                written by the people that have already made it.
              </p>
            )}

            {moreLessText === 'less' && isFullText == false && (
              <p className={`mt-[20px] hidden lg:block`}>
                working since the age of 13, coming with experience as a sales
                agent, electrician & fitness trainer. since jan 2023 fully
                committed to front end web development. i withhold high level
                skills in computer set-ups and it&#39;s ecosystem, graphics
                design & 96 wpm typing speed. i possess good knowledge of the
                front end environment, how the internet works & a basic
                understanding of the back end workflow. constantly working on
                new ideas and learning new skills through projects & books
                written by the people that have already made it.
              </p>
            )}

            {moreLessText === 'more' ? (
              <span
                className={`w-fit hidden lg:inline`}
                onClick={handleMoreLessOption}
              >
                <Button
                  title={moreLessText}
                  overridePadding="px-2 py-1"
                  margin="mt-2"
                  inline
                />
              </span>
            ) : (
              <span
                className={`w-fit hidden lg:inline`}
                onClick={handleMoreLessOption}
              >
                <Button
                  title={moreLessText}
                  overridePadding="px-2 py-1"
                  margin="mt-2"
                  inline
                />
              </span>
            )}
          </div>

          {/* Div for the image */}
          <div className="xl:pl-[20px] my-auto mx-auto w-1/2 lg:w-full">
            <Image
              src="/setup.jpg"
              alt="me and my setup"
              width={502}
              height={100}
              // mt-[27px] to align the picture center, moving the p tag down
              className="mt-[27px] ml-auto lg:mx-auto mr-0 lg:w-2/3 object-cover imageBorder"
            />
            <div className="flex flex-wrap justify-end lg:justify-center">
              <Link
                className="flex"
                href="https://dl.dropboxusercontent.com/scl/fi/zbkkh2qhxml55ip4ti65u/Kristijan-Lazarev-CV-ENG.pdf?rlkey=4q793zfc99jhqzontj02lijxf&dl=0"
              >
                {/* PDF DOWNLOAD */}
                <p className={`${aboutTextStyles}`}>pdf portfolio</p>
                <span className="bg-[#1F1F2D] py-[6px] px-[6px] my-auto ml-1 max-w-fit rounded-full">
                  <Image
                    src="/download-button.svg"
                    width={15}
                    height={15}
                    alt="download button"
                    className={`text-right ${hoverStyles}`}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
