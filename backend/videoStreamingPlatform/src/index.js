import connectDB from "./db/connection.js";
import { configDotenv } from "dotenv"
import app from "./app.js"

configDotenv.apply()

connectDB().then(() => {
    app.on("error", (error) => {
        console.log("Error: ", error)
        throw error
    })
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${ process.env.PORT }`)
    })
}).catch((error) => {
    console.log("MongoDB Connection Failed!", error)
})