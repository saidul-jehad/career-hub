import { MdAddLocation } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { logo, id, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, experiences } = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#9873FF]  mr-4">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#9873FF] mr-4">{job_type}</button>
                    </div>
                    <div className="mt-4 flex gap-7">
                        <h2 className="flex"><MdAddLocation className="mr-2 text-2xl"></MdAddLocation> {location}</h2>

                        <h2 className="flex"><AiFillDollarCircle className="text-2xl mr-2"></AiFillDollarCircle> {salary}</h2>
                    </div>
                    <div className="card-actions">
                        <Link to={`/job/${id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;