const details = require('../models/detailsSchema')
const getdetails=require('../models/detailsSchema')

// get details

exports.getAlldetailscontroller=async(req,res)=>{

    try{
        const alldetails=await getdetails.find()
        res.status(200).json(alldetails)
    }
    catch(err){
        res.status(401).json(err)
    }

}

// get a single details

exports.getAdetails=async(req,res)=>{
    const {id}=req.params

    try{
        const getdetail=await getdetails.findOne({id})
        res.status(200).json(getdetail)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// edit details

exports.editDetails=async(req,res)=>{
    const {_id}=req.params

    const {id,model,name,photo,description,type,transmission,color,year,seat,kilometer,price}=req.body

    try{
        const updateDetails=await getdetails.findByIdAndUpdate({_id:_id},{
            id,model,name,photo,description,type,transmission,color,year,seat,kilometer,price
        },{new:true})
        await updateDetails.save()
        res.status(200).json(updateDetails)
    }catch(err){
        res.status(401).json(err)
    }
}

// delete details

exports.deleteDetails=async (req,res)=>{
    const {id}=req.params
    try{
        const removeDetails=await details.findByIdAndDelete({_id:id})
        res.status(200).json(removeDetails)
    }catch(err){
        res.status(401).json(err)
    }
}