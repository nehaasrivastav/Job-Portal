import jobModel from "../models/jobModel.js";

export const createJob = async (req, res, next) => {
  try {
    const { company, position, jobType } = req.body;
    if (!company || !position) {
      next("please provide all fields ");
    }
    if (jobType === "teaching") {
      next("teaching job is not allowed");
    }

    const newJob = {
      company: company,
      position: position,
      jobType: jobType,
    };

    const job = await jobModel.create(newJob);
    res.status(200).json({
      success: true,
      message: "job added successfully",
    });
  } catch (err) { }
};

export const getAllJob = async (req, res) => {
  const jobs = await jobModel.find();
  res.status(200).json({
    success: true,
    jobs,
    totalJobs: jobs.length,
});
};

export const updateJob = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { location, position } = req.body;
    console.log(req.body)
    // console.log(location, position)

    if (!location || !position) {
      next("provide all fields")
    }
    const job = await jobModel.findOne({ _id: id })
    if (!job) {
      next(`no job  found with this id ${id}`)
    }

    const updatedJob = await jobModel.findOneAndUpdate(
      { _id: id },
      {
        location: location,
        position: position,
      }
    );

    res.status(200).json({
      updatedJob,
    });
  } catch (err) {
    next("error in controller");
  }
};

export const deleteJob = async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await jobModel.findOne({ _id: id })
    if (!job) {
      next(`no job  found with this id ${id}`)
    }

    await job.deleteOne({ _id: id });
    res.status(200).json({
      message: "Success,job deleted"
    });
  } catch (err) {
    next("error in controller");
  }
};
