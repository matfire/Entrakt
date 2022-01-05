import axios from "axios"

const REDIRECT_URL = process.env.NODE_ENV === "development" ? `${process.env.NEXT_PUBLIC_TRAKT_REDIRECT}/auth/callback` : `${process.env.VERCEL_URL}/auth/callback`


const getAuthUrl = () => {
    return `https://trakt.tv/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_TRAKT_ID}&redirect_uri=${REDIRECT_URL}`
}

const getToken = async(code) => {
    try {
        const res = await axios.post("https://api.trakt.tv/oauth/token", {
        code: code,
        grant_type: "authorization_code",
        redirect_uri: REDIRECT_URL,
        client_id: `${process.env.NEXT_PUBLIC_TRAKT_ID}`,
        client_secret: `${process.env.NEXT_PUBLIC_TRAKT_SECRET}`,
        })

        return res.data
    } catch (error) {
        throw new Error("could not get token: " + error)
    }
}

const client = axios.create({
    baseURL: "https://api.trakt.tv",
    headers: {
        "trakt-api-key": process.env.NEXT_PUBLIC_TRAKT_ID,
        "trakt-api-version": 2,
    }
})

const getProfile = async() => {
    return client.get("/users/settings", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("entrakt_access")}`
        }
    })
}

export {getAuthUrl, getToken, getProfile}