const express=require('express')
const cors=require('cors')

const app=express();


app.use(cors({
    origin:['https://axiscalcfrontend-git-main-johns-projects-1a9cd462.vercel.app']
}))


app.get('/',(req,res)=>{
res.json('Up and running')
})


app.post('/',(req,res)=>{
    res.json('data submitted successfully')
})

app.listen(5000,()=>{
    console.log('server up')
})