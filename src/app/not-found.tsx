'use client'
import { usePathname } from "next/navigation"

const NotFound = () => {
    const pathname = usePathname()
  return (
    <div>NotFound {pathname}</div>
  )
}
export default NotFound