
import { getCurrentUser } from '@/lib/session'
import React from 'react'
import { redirect } from "next/navigation"
import Navbar from "@/components/navbar"


const Dashboard = async () => {
    const user = await getCurrentUser()

    if (!user) {
        redirect("/auth/login")
    }
    return (
        <div> <Navbar />
            Dashboard

            USerName: {user.email}

            
        </div>



    )
}

export default Dashboard