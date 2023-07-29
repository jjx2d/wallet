const Post = require("./pinSchema")
const handleNewPin = async(req, res)=>{
	const {data} = req.body;
	try{
	const newPin = await Post.create({
	    "pin": data
    });
console.log(newPin);
	res.status(201);
		}catch (err){
		res.status(500);
		}
}

module.exports = handleNewPin;
