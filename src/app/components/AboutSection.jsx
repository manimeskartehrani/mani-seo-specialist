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
        <li>Semantic SEO</li>
        <li>Keyword Clustring</li>
        <li>Entity Optimization</li>
        <li>Technical SEO</li>
        <li>Backlink Audit</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul className='list-disc pl-2'>
        <li>
          Conducted keyword clustering and semantic SEO strategies, by focusing
          on contextual understanding, natural language processing, entity
          recognition, and structured data markup, ensuring that content aligns
          with user intent and delivers more accurate and relevant search
          results.
        </li>
        <br />
        <li>
          Collaborated closely with the content team to implement on-page SEO
          techniques for published content, with a specific emphasis on entity
          optimization strategies.
        </li>
        <br />
        <li>
          Performed comprehensive backlink analysis to evaluate the quality,
          relevance, and authority of inbound links, identifying opportunities
          for optimization and developing strategies to enhance the overall
          backlink profile.
        </li>
        <br />
        <li>
          Monitored and Fixed technical issues found on Google search console,
          Ahrefs and Screaming Frog crawl on an ongoing basis result in 10%
          increase.
        </li>
        <br />
        <li>
          Implemented a automated page performance report using python library
          such as Panda, NumPy, Streamlit and GA4 and GSC API to provide
          actionable data-driven recommendation monthly.
        </li>
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
          Google Analytics Individual Qualification
          <br /> Google Digital Academy
          <br />
          (Skillshop) Issued Jun 2023 · Expires Jun 2024 <br />
          Credential ID 156598959 <br /> <br />
        </li>
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
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-3 xl:gap-16 xl:px-16 xl:py-0 sm:py-16 '>
        <Image
          src='/images/SEO-Specialist.png'
          width={800}
          height={1200}
          alt='SEO Specialist'
        />
        <div className='mt-0 py-0 md:mt-24 text-left flex flex-col h-full'>
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
              selectTab={() => handleTabChange('experience')}
              active={tab === 'experience'}
            >
              {' '}
              Experience{' '}
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
