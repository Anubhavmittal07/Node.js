//callback function
const checkrole = (...allowedroles)=>{
    (req,res,next)=>{
        const role = req.header.role;
        if(!role){
            return res.status(403).json({message:"Role is not provided"})
        }
        if(allowedroles.includes()){
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