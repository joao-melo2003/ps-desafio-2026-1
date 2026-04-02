import Navbar from "./_components/Navbar/Navbar";

export default function SiteLayout({children}:{children:React.ReactNode}){
    return(
        <>
            <header>
                <Navbar/>
            </header>


            <main>
                <section>
                    {children}
                </section>
            </main>


            <footer>
                
            </footer>
        </>
    )
}