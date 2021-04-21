import mongoose from "mongoose"
import config from "config"
const connectToDatabase = async () => {
    try {
        await mongoose.connect(config.get("mongoURI"), { useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true 
          })
        console.log("<==Database Connexted==>".cyan.underline.bold.inverse)
    } catch (error) {
        console.log(error)
    }
}
export default connectToDatabase