
const wishlist=require('../models/wishListSchema')

exports.addToWishlist=async (req,res)=>{
    const {email,id,model,name,photo,description,type,transmission,color,year,seat,kilometer,price}=req.body

    try{
       const newwishlist=new wishlist({
        email,id,model,name,photo,description,type,transmission,color,year,seat,kilometer,price
       })
       await newwishlist.save()
       res.status(200).json(newwishlist)
    }   
    catch(err){
       res.status(401).json(err)
    }
}

exports.getwishlist=async(req,res)=>{


    try{
        const allwishlist=await wishlist.find()
        res.status(200).json(allwishlist)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// cancel wishlist

exports.cancelwishlist=async (req,res)=>{
    const {id}=req.params
    try{
        const cancelwish=await wishlist.findByIdAndDelete({_id:id})
        res.status(200).json(cancelwish)
    }catch(err){
        res.status(401).json(err)
    }
}