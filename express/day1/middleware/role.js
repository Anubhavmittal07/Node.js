//callback function
const checkrole = (...allowedroles)=>{
    (req,res,next)=>{
        const role = req.header("role");
        if(!role){
            return res.status(403).json({message:"This role is not provided!"})
        }
        if(allowedroles.includes(role)){
            next();
        }
        else{
            return res.status(404).json({
                message:"Role Not Found"
            })
        }
    }
}

module.exports=checkrole