const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("rent a car server connected successfully to mongo db atlas");
}).catch((err)=>{
    console.log(`mongo db connection failed error:${err}`);
})