import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${ process.env.MONGODB_URI }/${ process.env.DB_NAME }`)
        console.log(`\nMongoDB Connected! DB_HOST: ${ connectionInstance.connection.host }`)
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
}

export default connectDB