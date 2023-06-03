import  express from "express";
import { createJob, deleteJob, getAllJob, updateJob} from "../controllers/jobController.js";

const route=express.Router()

// add new job
route.post("/new-job",createJob)

// show all job
route.get("/All-Jobs",getAllJob)

// update job
route.put("/update-Job/:id",updateJob)

// delete job
route.delete("/delete-Job/:id",deleteJob)

export default route