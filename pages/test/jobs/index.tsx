import { subDays } from 'date-fns'
import type { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
import Card from '../../../src/components/Card'
import Header from '../../../src/components/Header'
import { FetchJobResponse, Job } from '../../../types/fetch-jobs'
import { menuItems } from '../../../src/helpers/config'


type HomeProps = {
  jobs: Job[]
  totalJobs: number
}

const Home: NextPage<HomeProps> = ({ jobs, totalJobs }) => {
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const handleClick7DaysJob = () => {
    // Filter and update state
    const filtered = jobs.filter(({ postingDate }) => new Date(postingDate) > subDays(new Date, 7))
    setFilteredJobs(filtered)
  }
  return (
    <>
      <Header />
      <div className='limit-x'>
        <div className='mt-10 text-center md:text-start flex gap-4 items-center flex-col md:flex-row'>
          <h2 className='text-4xl font-bold text-zippia_black'> DEVELOPER JOBS NEAR ME - {totalJobs.toLocaleString('en-US')} JOBS</h2>
          <div className='flex border border-solid rounded-md'>
            <input type="text" className='max-w-xs py-2 px-4 rounded-md' placeholder='Search For A Job Title' />
            <button className='flex justify-center items-center px-2 text-gray-400'>P</button>
          </div>
        </div>
      </div>

      <div className='mt-8 border-y-px border-solid border hidden lg:block'>
        <nav className='limit-x flex items-center gap-4 justify-between '>
          {/* Display menu items list and simulate a selected item */}
          {menuItems.map((item, index) => {
            const selected = index == 1
            return (
              <>
                <a href="#" key={index} className={`hover:text-zippia_blue transition ease-in-out duration-100 text-zippia_text py-4 relative ${selected ? 'font-bold' : 'font-medium'}`}>{item}
                  {selected && (<span className='absolute h-1 w-full left-0 bg-zippia_blue bottom-0 rounded-t-sm' />)}
                </a>
              </>
            )
          })}
        </nav>
      </div>
      <div className='mt-8 limit-x flex justify-center'>
        {/* Set a listener to trigger the filter of products */}
        <button className='button bg-gray-600 hover:bg-green-700 text-white' onClick={handleClick7DaysJob}>LAST 7 DAYS JOBS</button>
      </div>
      {/* Set overflow Y and hide scrollbar  */}
      <div className='limit-x  mt-10 max-h-[70vh] overflow-y-auto no-scrollbar '>
        <div className='flex flex-col gap-4 mb-8 '>
          {/* Limit the number of jobs by 10 according to the requirements */}
          {filteredJobs?.slice(0, 10).map(job => (
            <Card key={job.jobId} job={job} />
          ))}
        </div>

      </div>
    </>

  )
}

export default Home

// Generate SSR Page according to the requirements
export const getServerSideProps: GetServerSideProps = async (ctx) => {


  const body = {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: "Business Analyst",
    locations: [],
    numJobs: 50,
    previousListingHashes: []
  }

  // Fetch products on server side to allow SSR and achieve a better SEO score, for a better perfomance the response can be cached
  const { jobs, totalJobs }: FetchJobResponse = await fetch('https://www.zippia.com/api/jobs/', { method: 'POST', body: JSON.stringify(body), headers: { "Content-type": "application/json; charset=UTF-8" } }).then(res => res.json())

  return {
    props: {
      jobs,
      totalJobs,
      date: new Date().toISOString()
    },
  }
}
