const admin=require('../models/adminSchema')
const jwt=require('jsonwebtoken')
const jwtsecret=process.env.JWTSECRET



exports.adminlogincontroller=async(req,res)=>{
    const {email,password}=req.body

    try{
        const existingadmin=await admin.findOne({email,password})

        if(existingadmin){
            const token =jwt.sign({userId:existingadmin._id},jwtsecret)
            res.status(200).json({existingadmin,token})
        }

        else{
            res.status(406).json('incorrect email or password')
        }
    }
    catch(err){
        res.status(401).json(err)
    }


    
}
