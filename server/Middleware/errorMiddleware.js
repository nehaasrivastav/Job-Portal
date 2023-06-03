const errorMiddleware = (err,req,res,next)=>{
    next()
   return  res.status(400).send({
       success:false,
       message:"Some Error occured",
       err 
    })
}
export default errorMiddleware