'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, Map, Bot, User } from 'lucide-react'

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/search', icon: Search, label: 'Buscar' },
  { href: '/guide', icon: Map, label: 'Guia' },
  { href: '/ai', icon: Bot, label: 'IA' },
  { href: '/profile', icon: User, label: 'Perfil' },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-around items-center">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
              isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}