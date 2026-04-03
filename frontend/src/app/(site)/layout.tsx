import styles from "./_components/layoutCss/Layout.module.css"
import Navbar from "./_components/Navbar/Navbar";
import Panel from "./_components/TopPanel/Panel";

export default function SiteLayout({children}:{children:React.ReactNode}){
    return(
        <div className={styles.layout}>
            
            <Navbar/>
            
            <main className={styles.conteudoPrincipal}>

                <Panel/>

                
            </main>


            <footer>
                
            </footer>
        </div>
    )
}