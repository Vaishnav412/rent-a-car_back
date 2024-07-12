const bookings=require('../models/bookingSchema')


// bookings

exports.addbooking=async(req,res)=>{
    const {usermail,name,carname,carmodel,color,carid,carimage, transmission,price,mobile,startingDate,endingDate,age,proofID}=req.body
    try{
        const newBookings=new bookings({
            usermail,name,carname,carmodel,color ,carid,carimage, transmission, price,mobile,startingDate,endingDate,age,proofID
        })
        await newBookings.save()
        res.status(200).json(newBookings)
    }
    catch(err){
        res.status(401).json(err)
    }
}


// view add booking

exports.getAllbookings=async(req,res)=>{


    try{
        const allBooking=await bookings.find()
        res.status(200).json(allBooking)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// cancel booking

exports.cancelBookings=async (req,res)=>{
    const {id}=req.params
    try{
        const cancelbook=await bookings.findByIdAndDelete({_id:id})
        res.status(200).json(cancelbook)
    }catch(err){
        res.status(401).json(err)
    }
}