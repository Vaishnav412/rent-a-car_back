const mongoose=require('mongoose')


const bookingSchema=new mongoose.Schema({
    usermail:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    carname:{
        type:String,
        required:true
    },
    carmodel:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    carid:{
        type:String,
        required:true
    },
    carimage:{
        type:String,
        required:true
    },
    
    transmission:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    
    mobile:{
        type:String,
        required:true
    },
    startingDate:{
        type:String,
        required:true
    },
    endingDate:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    proofID:{
        type:String,
        required:true
    }
})


const bookings=mongoose.model('bookings',bookingSchema)

module.exports=bookings