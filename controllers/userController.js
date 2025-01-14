const users=require('../models/userSchema')
const jwt=require('jsonwebtoken')
const jwtsecret=process.env.JWTSECRET


// register
exports.registerController=async(req,res)=>{
    const {username,email,password}=req.body
    try{
        const userDetails=await users.findOne({email})

        if (userDetails) {

            res.status(406).json('user already exists')
            
        } else {

            const newuser=new users({
                username ,email ,password
            })

            await newuser.save()
            res.status(200).json(newuser)
            
        }
    }

    catch(err){
        res.status(401).json(err)
    }
}

// login

exports.logincontroller=async(req,res)=>{
    const {email,password}=req.body

    try{
        const existingUser=await users.findOne({email,password})

        if(existingUser){
            const token =jwt.sign({userId:existingUser._id},jwtsecret)
            res.status(200).json({existingUser,token})
        }

        else{
            res.status(406).json('incorrect email or password')
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}




exports.getAuserid=async(req,res)=>{
    const {_id}=req.params

    try{
        const getAuser_userid=await users.findOne({_id})
        res.status(200).json(getAuser_userid)
    }
    catch(err){
        res.status(401).json(err)
    }
}