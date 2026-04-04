import styles from "./_components/layoutCss/Layout.module.css"
import Panel from "./_components/TopPanel/Panel";
import Sale from './_components/Sale/Sale'

export default async function Home() {
  return (
    <main className={styles.conteudoPrincipal}>

      <Panel/>
      <Sale/>

    </main>

  )
}
