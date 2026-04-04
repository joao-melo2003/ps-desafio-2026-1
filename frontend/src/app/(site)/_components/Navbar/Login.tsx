'use client'

import { useSession } from 'next-auth/react';
import styles from './Navbar.module.css'
import Link from "next/link";

export default function Login(){

    const { data: session } = useSession();
    return (
        <div className={styles.conteinerBotao}>
            <Link href="/admin">
                <button className={styles.botao}>{session?"Editar":"login"}</button>
            </Link>
            
        </div>
    )
}
