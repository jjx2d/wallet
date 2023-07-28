const Post = require("./pinSchema")
const handleNewPin = async(req, res)=>{
	const {data} = req.body;
	try{
	const newPin = await Post.create({
	    "pin": data
    });
console.log(newPin);
	res.status(201).json({"success":"New pin created!"});
		}catch (err){
		res.status(500).json({"message":err.message});
		}
}

module.exports = handleNewPin;