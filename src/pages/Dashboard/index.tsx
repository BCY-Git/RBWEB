import { Home, LineChart, FolderKanban, Users, Settings, Search } from 'lucide-react'
import styles from './index.module.scss'

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>Acme Inc.</div>
        <nav className={styles.nav}>
          <div className={`${styles.item} ${styles.active}`}><Home size={18} /> Dashboard</div>
          <div className={styles.item}><LineChart size={18} /> Analytics</div>
          <div className={styles.item}><FolderKanban size={18} /> Projects</div>
          <div className={styles.item}><Users size={18} /> Team</div>
        </nav>
        <div className={styles.bottom}>
          <div className={styles.item}><Settings size={18} /> Settings</div>
          <div className={styles.item}><Search size={18} /> Search</div>
        </div>
      </aside>

      <section className={styles.content}>
        <header className={styles.header}>
          <div className={styles.title}>Documents</div>
          <div className={styles.actions}>
            <button className={styles.btn}>Last 3 months</button>
            <button className={styles.btn}>Last 30 days</button>
            <button className={styles.btn}>Last 7 days</button>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.label}>Total Revenue</div>
              <div className={styles.value}>$1,250.00</div>
            </div>
            <div className={styles.card}>
              <div className={styles.label}>New Customers</div>
              <div className={styles.value}>1,234</div>
            </div>
            <div className={styles.card}>
              <div className={styles.label}>Active Accounts</div>
              <div className={styles.value}>45,678</div>
            </div>
            <div className={styles.card}>
              <div className={styles.label}>Growth Rate</div>
              <div className={styles.value}>4.5%</div>
            </div>
          </div>

          <div className={styles.chart} />

          <div className={styles.table}>
            <div className={styles.toolbar}>
              <div className={`${styles.tab} ${styles.active}`}>Outline</div>
              <div className={styles.tab}>Past Performance</div>
              <div className={styles.tab}>Key Personnel</div>
              <div className={styles.tab}>Focus Documents</div>
            </div>
            <div className={styles.rows}>
              <div className={styles.row}>
                <div>Cover page</div>
                <div>Cover page</div>
                <div>In Process</div>
                <div>18</div>
                <div>Eddie Lake</div>
              </div>
              <div className={styles.row}>
                <div>Table of contents</div>
                <div>Table of contents</div>
                <div>Done</div>
                <div>29</div>
                <div>Eddie Lake</div>
              </div>
              <div className={styles.row}>
                <div>Executive summary</div>
                <div>Narrative</div>
                <div>Done</div>
                <div>10</div>
                <div>Eddie Lake</div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}
