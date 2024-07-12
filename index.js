// dotenv configuration
require('dotenv').config()

require('./DB/connection')

const express=require('express')

const router=require('./Routes/router')

const cors=require('cors')


// create server

const rentAcarServer=express() 

rentAcarServer.use(cors())

rentAcarServer.use(express.json())

rentAcarServer.use(router)

const PORT=3000||process.env.PORT

rentAcarServer.listen(PORT,()=>{
    console.log(`rent a car server running  ${PORT}`);
})
