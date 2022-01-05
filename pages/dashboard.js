import { useRouter } from "next/router"
import { useEffect } from "react"
import toast from "react-hot-toast"

export default function Dashboard() {

    const router = useRouter()

    useEffect(() => {
        if (!localStorage.getItem("entrakt_access")) {
            toast.error("You do not appear to be logged in...")
            router.push("/")
        }
    })
    return (
        <div>
            something is coming
        </div>
    )
}
