import Image from 'next/image';
import React, { Fragment } from 'react';
import { Job } from '../../../types/fetch-jobs';
import parse from 'html-react-parser';
import { subDays } from 'date-fns';

// import { Container } from './styles';

type CardProps = {
  job: Job
}


const Card: React.FC<CardProps> = ({ job }) => {

  const addDots = job.jobDescription.length > 350 ? '...' : ''
  const jobDescription = parse(job.jobDescription.substring(0, 350) + addDots)
  const newJob = new Date(job.postingDate) > subDays(new Date(), 7)

  return (

    <div className='border border-px border-solid border-gray-300 p-6 rounded-md relative '>
      <div className='grid sm:grid-cols-[150px_1fr] grid-cols-1 gap-3 content-center cotent'>

        <span className='font-medium'>JOB TITLE: </span>
        <div>
          <h3 className=' px-4 py-2 font-semibold bg-gray-100 rounded-lg inline'>{job.jobTitle}</h3>
        </div>

        <span className='font-medium'>COMPANY:</span>
        <h5 className=' font-bold'>{job.companyName}</h5>

        <span className='font-medium'>POSTED:</span>
        <h5 className=' font-bold'>{job.postedDate}</h5>

      </div>
      <h6 className='text-center mt-6 text-2xl font-medium'>Description:</h6>
      <div className='space-y-4 leading-tight mt-4'>
        {jobDescription}
      </div>
      {newJob &&
        <>
          <span className='inline-block px-6 py-1 bg-green-600 border-gray-400 shadow-md font-semibold text-white rounded-md sm:-rotate-45 sm:top-10 sm:right-3 sm:absolute mt-4 '>N E W</span>
          <div className='absolute left-[-2px] h-[100%] w-2 bg-green-600 top-0 bottom-0 rounded-l-md'></div>
        </>

      }
    </div>
  )
}

export default Card;
