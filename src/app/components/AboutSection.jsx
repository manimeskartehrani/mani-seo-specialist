'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>On-Page SEO</li>
        <li>Keyword Clustring</li>
        <li>Technical SEO</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: 'Works',
    id: 'works',
    content: (
      <ul className='list-disc pl-2'>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>
          University Canada West <br /> Master of Business Administration - MBA{' '}
          <br /> Oct 2020 - Jan 2022
          <br />
          <br />
        </li>
        <li>
          Guilan University <br /> Bachelor of Engineering - BE, Computer
          Software Engineering <br />
          2007 - 2012
          <br />
          <br />
        </li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-2'>
        <li>
          Certified Digital Marketing Professional <br /> Digital Marketing
          Institute <br />
          Issued Jun 2022 <br />
          Credential ID 54020055 <br /> <br />
        </li>
        <li>
          JavaScript Algorithms and Data Structures <br />
          freeCodeCamp <br />
          Issued Feb 2022 <br /> <br />
        </li>
      </ul>
    ),
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-3 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src='/images/SEO-Specialist.png'
          width={800}
          height={800}
          alt='SEO Specialist'
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I am Mani an SEO specialist With over 6 years of experience in SEO
            analysis and data analytics, I specialize in conducting in-depth
            keyword clustering and topical mapping, analyzing website
            performance metrics, and developing data-driven strategies to
            improve online visibility and drive organic traffic. <br /> <br />
            Throughout my career, I have demonstrated proficiency in utilizing
            advanced analytics tools such as Google Analytics, Ahrefs, Screaming
            Frog, and Tableau to interpret data, uncover trends, and communicate
            actionable insights to stakeholders. <br />
            <br />I am skilled in Python programming, particularly in
            extracting, transforming, and loading data from Google Search
            Console and Google Analytics 4 API, as well as automating reporting
            processes in Excel. <br />
            <br />I am committed to staying updated on industry trends, emerging
            technologies, and best practices in data analytics to ensure that I
            deliver impactful results and maintain a competitive edge.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
