import connectDB from "./db/connection.js";
import dotenv from "dotenv"
import app from "./app.js"

dotenv.config({
    path: './.env'
})

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