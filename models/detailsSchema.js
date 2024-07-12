const mangoose=require('mongoose')

const detailsSchema=new mangoose.Schema({
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


const details=mangoose.model('details',detailsSchema)
module.exports=details