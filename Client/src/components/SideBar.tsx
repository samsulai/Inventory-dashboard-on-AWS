"use client"
import { sidebarLinks } from '@/constants';
import useGlobalState from '@/store/useStore';
import { LucideIcon, Menu, Sun } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface sideBarLinkProps {
  icon : LucideIcon,
  href : string,
  label : string,
  isCollapsed : boolean
}

const SidebarLink = ({icon : Icon, href, label,isCollapsed} : sideBarLinkProps) => {

  const pathname = usePathname()
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard") 
return (
<Link href={href}>
<div className={`cursor-pointer flex items-center ${isCollapsed ? "justify-center py-4 " : "px-8 py-4"} hover:text-blue-500 hover:bg-blue-500 gap-3 transition-colors ${isActive ? "bg-blue-200 text-white" : ""}`}>
<Icon className='w-6 h-6 !text-gray-700'/> 
<span className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>
  {label}
</span>
</div>
</Link>

)
}





const SideBar = () => {
  const { isSidebarCollapsed, setIsSidebarCollapsed } = useGlobalState();
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  const sidebarClassnames = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`

  return (
    <div className={sidebarClassnames}>
        <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
            <div className=''>
            Logo
            </div>
            <h1 className={`${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>
            EDSTOCK
            </h1>
            <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggleSidebar}>
            <Menu className='w-5 h-5'/>
            </button>
        </div>

        <div className='flex-grow mt-8'>
{
sidebarLinks.map((link, index) => (
<SidebarLink 
key={index}
icon={link.icon}
href={link.href}
label={link.label}
isCollapsed={isSidebarCollapsed}
/>
))

}
        </div>


        <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
            <p className='text-center text-xs text-gray-500'>&copy; 2024 Edstock</p>
        </div>
        
    </div>
  )
}

export default SideBar