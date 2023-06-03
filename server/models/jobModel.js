import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        required:[ true,'company is required']
    },
   position: {
        type: String,
        required: [true,'enter position']
         
    },
  location: {
        type: String,
        required: [true,'enter location'],
        default: "Delhi"
    },
 workType: {
        type: String,
        default:"remote"
       
    },
    jobType:{
        type:String,
        default:"developer",
        required:[true,"enter job Type"]
    }
},
{timestamps:true}
)

export default mongoose.model('job', jobSchema)