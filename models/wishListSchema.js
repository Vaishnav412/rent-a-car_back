const mangoose=require('mongoose')

const wishListSchema=new mangoose.Schema({

   email:{
    type:String,
    required:true
   },
    id:{
        type:Number,
        required:true,
        unique:true
    },
    model:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    transmission:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    seat:{
        type:String,
        required:true
    },
    kilometer:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})

// model
const wishlists=mangoose.model('wishlists',wishListSchema)
// export
module.exports=wishlists