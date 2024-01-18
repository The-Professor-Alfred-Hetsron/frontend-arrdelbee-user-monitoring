'use client'
import { useRouter } from "next/navigation"

export default function Root() {
  const router = useRouter()
  return (
    <main className="min-w-screen min-h-screen flex flex-col gap-8 items-center justify-center">
      Landing Page
      <div className="flex flex-row gap-2">
        <span className='aspect-square text-center p-5 rounded-xl bg-primary-blue flex justify-center items-center text-tertiary-lightYellow'>Primary Blue</span>
        <span className='aspect-square text-center p-5 rounded-xl bg-secondary-yellow flex justify-center items-center text-primary-blue'>Secondary Yellow</span>
        <span className='aspect-square text-center p-5 rounded-xl bg-tertiary-lightYellow flex justify-center items-center text-primary-blue'>Tertiary Light Yellow</span>
      </div>
      <h1>ArrdelBee - Lovelace h1 font</h1>
      <h2>ArrdelBee - Catamarann h2 font</h2>
      <h3>ArrdelBee - Montserrat h3 font</h3>
      <button type="button" onClick={()=>{router.push("/auth")}} className="text-center font-bold text-white bg-primary-blue rounded-lg px-8 py-3 hover:text-tertiary-lightYellow">Se Connecter</button>
    </main>
  )
}