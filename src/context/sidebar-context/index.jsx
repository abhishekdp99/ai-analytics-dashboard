/* React Import */
"use client"
import React, { createContext, useContext, useState } from 'react'

// Create a context with a default value
const SidebarContext = createContext();

// Create a context provider component
export const SidebarProvider= ({ children }) => {

   const [isMobileOpen, setMobileOpen] = useState(false);

    // Function to toggle sidebar
    const toggleSidebar = () => setMobileOpen(prev => !prev);
    
    // Function to explicitly close (useful for navigation links)
    const closeSidebar = () => setMobileOpen(false);

    return (
        <SidebarContext.Provider value={{ isMobileOpen, setMobileOpen, toggleSidebar, closeSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => useContext(SidebarContext);