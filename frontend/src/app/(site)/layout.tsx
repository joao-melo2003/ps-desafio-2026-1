"use client";

import styles from "./_components/layoutCss/Layout.module.css";
import Navbar from "./_components/Navbar/Navbar";
import { usePathname } from "next/navigation";
import { CategoryProvider } from "./_components/Navbar/CategoryContext";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideNavbar = pathname.startsWith("/auth");

    return (
        <CategoryProvider>
            <div className={styles.layout}>
                {!hideNavbar && <Navbar />}
                
                {children}

                <footer>
                    
                </footer>
            </div>
        </CategoryProvider>
    );
}