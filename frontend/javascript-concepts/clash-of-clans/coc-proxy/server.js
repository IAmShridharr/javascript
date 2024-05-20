import express from "express"
import fetch from "node-fetch"
import cors from "cors"
import { configDotenv } from "dotenv"

configDotenv.apply()

const app = express()
const port = process.env.PORT

app.use(cors())

const API_KEY = process.env.COC_API_KEY // Replace with your actual API key

app.get('/player/:tag', async (req, res) => {
    const playerTag = req.params.tag;
    const url = `https://api.clashofclans.com/v1/players/${ encodeURIComponent(playerTag) }`

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${ API_KEY }`
            }
        })
        const data = await response.json()
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.listen(port, () => {
    console.log(`Proxy server listening at port ${ port }`)
})