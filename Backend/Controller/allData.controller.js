import cars from "../car.js"
function allData(req,res){
    return res.json({status:true,data:cars})
}

export default allData