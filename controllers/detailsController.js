const details=require('../models/detailsSchema')




// add details

exports.adddetails=async(req,res)=>{
    const {id,model,name,photo,description,type,transmission,color,year,seat,kilometer,price}=req.body

    try{
        const detailsid= await details.findOne({id})

        if(detailsid){
            res.status(406).json("id already exists")
        }
        else{
            const newDetails = new details({
                id,model,name,photo,description,type,transmission,color,year,seat,kilometer,price
            })
            await newDetails.save()
            res.status(200).json(newDetails)
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}