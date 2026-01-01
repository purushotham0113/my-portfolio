import mongoose from "mongoose"
// console.log("mongoos ", mongoose)
const skillSchema = new mongoose.Schema({
    name: String,
    category: String,
    level: Number
})

export default mongoose.model("Skill", skillSchema)