import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";

const AppliedJobs = () => {

    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayAppliedJobs , setDisplayAppliedJobs] = useState([])

    const handleJobsFilter = filter => {
        if(filter === 'All'){
            setDisplayAppliedJobs(appliedJobs);
        }
        else if(filter === 'Remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayAppliedJobs(remoteJobs);
        }
        else{
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayAppliedJobs(onsiteJobs)
        }
    }

    useEffect(() => {
        const storedJobsId = getStoredJobApplication()
        // if(jobs.length  > 0){
        //     const jobApplied = jobs.filter(job =>  )
        // }

        const jobApplied = [];
        for (const id of storedJobsId) {
            const job = jobs.find(job => job.id == id);
            if (job) {
                jobApplied.push(job)
            }
            setAppliedJobs(jobApplied)
            setDisplayAppliedJobs(jobApplied)
            // console.log(jobs, storedJobsId, jobApplied);
        }
    }, [jobs])


    return (
        <div>

            <details className="dropdown mb-20">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('All')}><a>ALL</a></li>
                    <li onClick={() => handleJobsFilter('Remote')} ><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('Onsite')}><a>Onsite</a></li>
                </ul>
            </details>

            <h3 className="text-2xl">Job Applied {appliedJobs.length}</h3>
            <ul>
                {
                    displayAppliedJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name} : {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>

            <h5>4643646467</h5>
        </div>
    );
};

export default AppliedJobs;