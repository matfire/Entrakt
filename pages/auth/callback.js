import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { getToken } from "../../api"

export default function Callback() {
    const [loading, setLoading] = useState(true)
    const [firstLoad, setFirstLoad] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const signIn = async(code) => {
            try {
                const {access_token, refresh_token} = await getToken(code)
                setLoading(false)
                localStorage.setItem("entrakt_access", access_token)
                localStorage.setItem("entrakt_refresh", refresh_token)
                toast.success("Signed you in!")
                router.push("/dashboard")
            } catch (error) {
                console.log(error)
            }
        }
        
        const {code} = router.query

        if (code) {
            signIn(code)
        } else if (firstLoad) {
            setFirstLoad(false)
        } else {
            console.log("token not found")
        }
    }, [router, firstLoad])


    return (
        <div className="w-full h-full">
            {loading && 
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <p>Signing you in with Trakt.tv, please wait...</p>
                </div>}
            {!loading &&
                <div className="w-full h-full flex flex-col justify-center items-center">
                <p>You are signed in, redirecting...</p>
            </div>}
        </div>
    )
}