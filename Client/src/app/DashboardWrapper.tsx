"use client";
import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '@/components/SideBar'
import useGlobalState from '@/store/useStore';



const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useGlobalState((state) => state.isSidebarCollapsed);
  const isDarkMode = useGlobalState((state) => state.isDarkMode);
 useEffect (() => {
if(isDarkMode) {
    document.documentElement.classList.add("dark")
}else{
    document.documentElement.classList.add("light")
}
 },[])

  return (
      <div className={`${isDarkMode ? "dark" : "light"} flex min-h-screen w-full bg-gray-50 text-gray-900`}>
          <SideBar />
          <main className={`flex flex-col h-full w-full py-7 px-9 bg-gray-50 ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"}`}>
              <NavBar />
              {children}
          </main>
      </div>
  );
};







export default DashboardWrapper