/** React Import */
'use client'
import React, { useState } from 'react'

/** Icons */
import DashboardIcon from '@/icons/dashboard.svg'
import LogoIcon from '@/icons/sun.svg'
import ModelIcon from '@/icons/chip.svg'
import ClientIcon from '@/icons/clients.svg'
import UsageIcon from '@/icons/activity.svg'
import LogsIcon from '@/icons/logs.svg'
import BillingIcon from '@/icons/credit-card.svg'
import SettingsIcon from '@/icons/settings.svg'
import LogoutIcon from '@/icons/logout.svg'
import CrossIcon from '@/icons/cross.svg'

/** Local Imports */
import { useSidebar } from 'context/sidebar-context'

/** Styles */
import styles from './sidebar.module.scss'

/** Main Export */
const Sidebar = () => {

    const [active, setActive] = useState('dashboard')
    const { isMobileOpen, closeSidebar } = useSidebar();

    const NavClick = (type) => {
        setActive(type)
        closeSidebar()
    }

    return (
        <>
            <div
                className={`${styles.ai_sidebar_overlay} ${isMobileOpen ? styles.show : ''}`}
                onClick={closeSidebar}
            />
            <div className={`${styles.ai_sidebar} ${isMobileOpen ? styles.open : ''}`}>
                <div className={styles.ai_sidebar_wrapper}>
                    <div className={styles.ai_sidebar_head}>
                        <div className={styles.ai_logo}>
                            <LogoIcon />
                            <p className={styles.ai_title}>AI Analytics</p>
                        </div>
                        <button
                            className={styles.ai_cross_icon}
                            onClick={closeSidebar}
                        >
                            <CrossIcon />
                        </button>
                    </div>
                    <div className={styles.ai_sidebar_body}>
                        {Data.map((section) => (
                            <div key={section.category} className={styles.ai_nav_section}>
                                <p className={styles.ai_nav_title}>{section.category}</p>
                                <div className={styles.ai_sidebar_nav}>
                                    {section.items.map((item) => (
                                        <button
                                            key={item.type}
                                            onClick={() => NavClick(item.type)}
                                            className={`${styles.ai_sidebar_nav_link} ${active === item.type ? styles.active : ''
                                                }`}
                                        >
                                            <div className={styles.ai_content}>
                                                <span className={styles.ai_icon}>{item.icon}</span>
                                                <span className={styles.ai_text}>{item.title}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.ai_sidebar_footer}>
                        <button className={styles.ai_logout}>
                            <LogoutIcon />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar

const Data = [
    {
        category: 'Overview',
        items: [
            { title: 'Dashboard', type: 'dashboard', icon: <DashboardIcon /> },
            { title: 'Models', type: 'models', icon: <ModelIcon /> },
        ],
    },
    {
        category: 'Management',
        items: [
            { title: 'Clients', type: 'clients', icon: <ClientIcon /> },
            { title: 'Usage', type: 'usage', icon: <UsageIcon /> },
            { title: 'Logs', type: 'logs', icon: <LogsIcon /> },
        ],
    },
    {
        category: 'Finance',
        items: [
            { title: 'Billing', type: 'billing', icon: <BillingIcon /> },
        ],
    },
    {
        category: 'System',
        items: [
            { title: 'Settings', type: 'settings', icon: <SettingsIcon /> },
        ],
    },
]