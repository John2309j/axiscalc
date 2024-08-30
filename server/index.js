const express=require('express')
const cors=require('cors')

const app=express();


app.use(cors({
    origin:['https://66d1dce12b9c54465e098811--deluxe-speculoos-9853e4.netlify.app']
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