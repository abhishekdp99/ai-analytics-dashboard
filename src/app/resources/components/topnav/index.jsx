/** React Imports */
'use client'
import { useMemo } from "react"
import Image from "next/image"

/** Icons */
import BellIcon from "@/icons/bell.svg"
import AngleDownIcon from "@/icons/angle-small-down.svg"
import SearchIcon from "@/icons/search.svg"
import MenuIcon from "@/icons/menu-barger.svg"

/** Styles */
import styles from "./topnav.module.scss"
import { useSidebar } from "context/sidebar-context"

/** Main Export */
const TopNav = ({ setMobileOpen }) => {

    const { toggleSidebar } = useSidebar();
    const greeting = useMemo(() => {
        const hour = new Date().getHours()

        if (hour < 12) return "Good Morning"
        if (hour < 18) return "Good Afternoon"
        return "Good Evening"
    }, [])

    return (
        <header className={styles.ai_topnav}>
            <div className={styles.ai_topnav_wrapper}>
                <div className={styles.ai_topnav_left}>
                    <button
                        className={styles.ai_menu_btn}
                        onClick={toggleSidebar}
                    >
                        <MenuIcon />
                    </button>
                    <p className={styles.ai_greeting}>
                        {greeting}<span className={styles.hide_mobile}>, David 👋</span>
                    </p>
                </div>
                <div className={styles.ai_topnav_right}>
                    <div className={styles.ai_search}>
                        <SearchIcon />
                        <input placeholder="Search AI logs, users, models..." />
                    </div>
                    <button className={styles.ai_icon_btn}>
                        <BellIcon />
                    </button>
                    <div className={styles.ai_user}>
                        <div className={styles.ai_user_profile}>
                            <Image
                                src={'/images/avatar.jpg'}
                                alt="User Avatar"
                                fill
                                sizes="5vw"
                            />
                        </div>
                        <div className={styles.ai_user_info}>
                            <p className={styles.ai_name}>DavidRamson</p>
                            <p className={styles.ai_email}>devidramson@gmail.com</p>
                        </div>
                        <AngleDownIcon className={styles.ai_angle_icon} />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default TopNav