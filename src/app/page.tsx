'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Plane } from 'lucide-react'

export default function SplashPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login')
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="mb-8">
          <Plane size={80} className="mx-auto mb-4 animate-bounce" />
          <h1 className="text-4xl font-bold mb-2">TripSaver</h1>
          <p className="text-lg opacity-90">Encontre passagens aéreas baratas</p>
        </div>
        <div className="animate-pulse">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full mx-auto animate-spin"></div>
        </div>
      </div>
    </div>
  )
}