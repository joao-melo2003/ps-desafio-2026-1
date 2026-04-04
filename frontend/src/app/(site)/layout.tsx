"use client";

import styles from "./_components/layoutCss/Layout.module.css";
import Navbar from "./_components/Navbar/Navbar";
import { usePathname } from "next/navigation";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const hideNavbar = pathname.startsWith("/auth");

    return (
        <div className={styles.layout}>
            {!hideNavbar && <Navbar />}
            {children}
            <footer></footer>
        </div>
    );
}