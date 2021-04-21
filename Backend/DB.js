import mongoose from "mongoose"
import config from "config"
const  connectToDatabase = async () => {
    try {
        await mongoose.connect(config.get("mongoURI"), () => {
            console.log("-----------------------------DaTaBaSe ConNeCteD-----------------------------------");
        })
    } catch (error) {
        console.log(error.message); 
        process.exit(1)
    }
}
export default connectToDatabase
