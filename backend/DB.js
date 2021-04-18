import mongoose from "mongoose"
import config from "config"
const mongoURI = config.get("mongoURI")



const connectToDatabase = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true 
          })
        console.log("<==Database Connexted==>".cyan.underline.bold)
    } catch (error) {
        console.log(error)
    }
}
export default connectToDatabase
