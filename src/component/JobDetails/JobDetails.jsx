import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams();
    const pId = parseInt(id)
    const job = jobs.find(job => job.id === pId);
    // console.log(job);
    const { job_title, contact_information, salary, job_description, job_responsibility, experiences } = job;

    const handleApplyJob = () => {
        saveJobApplication(pId)
        toast('You have Applied successfully')
    }

    return (
        <div>
            <div className="grid grid-cols-4 gap-7">
                <div className="border col-span-3 space-y-3 p-8">
                    <h3 ><span className="text-2xl font-bold">Job Description: </span>{job_description}</h3>
                    <p> <span className="text-2xl font-bold"> Job Responsibility : </span>{job_responsibility}</p>
                    <p className="text-2xl font-bold"> Experience</p>
                    <p>{experiences}</p>

                </div>

                <div className="border space-y-4 p-3">
                    <h3 className=" text-2xl">Job Details</h3>
                    <div className="space-y-3">
                        <p><span className="text-xl font-bold">Salary : </span> {salary}</p>
                        <p><span className="text-xl font-bold">Job Title : </span> {job_title}</p>
                    </div>

                    <h3 className=" text-2xl">Contact Information</h3>
                    <div className="space-y-2 p-">

                        <p><span className="text-xl font-bold">Phone : </span> {contact_information.phone}</p>
                        <p><span className="text-xl font-bold">Email : </span> {contact_information.email}</p>
                        <p><span className="text-xl font-bold">Address : </span> {contact_information.address}</p>
                        <button onClick={handleApplyJob} className="btn btn-primary w-full m">Apply Now</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>

            <Link to={-1}><button className="btn btn-primary mt-4"> Go Back Job</button></Link>
        </div>
    );
};

export default JobDetails;