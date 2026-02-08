import { useState, useEffect } from 'react'
import { Home, LineChart, FolderKanban, Users, Settings, Search, ChevronDown, ChevronRight } from 'lucide-react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'

const DAILY_REPORT_BASE = '/dashboard/daily-report'

export default function Dashboard() {
  const location = useLocation()
  const [dailyReportOpen, setDailyReportOpen] = useState(false)

  useEffect(() => {
    if (location.pathname.startsWith(DAILY_REPORT_BASE)) setDailyReportOpen(true)
  }, [location.pathname])

  return (
    <div className="flex h-screen w-full bg-zinc-950 text-white font-sans">
      <aside className="w-[250px] border-r border-zinc-800 flex flex-col bg-zinc-950">
        <div className="h-[60px] flex items-center px-6 font-semibold text-lg border-b border-zinc-800">Acme Inc.</div>
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <NavLink 
            to="/dashboard" 
            end
            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-md cursor-pointer transition-all duration-200 text-sm ${isActive ? 'text-white bg-zinc-800' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
          >
            <Home size={18} /> Dashboard
          </NavLink>
          <div className="rounded-md overflow-hidden">
            <button
              type="button"
              onClick={() => setDailyReportOpen((o) => !o)}
              className={`flex items-center gap-3 w-full p-3 rounded-md cursor-pointer transition-all duration-200 text-sm ${location.pathname.startsWith(DAILY_REPORT_BASE) ? 'text-white bg-zinc-800' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
            >
              <LineChart size={18} />
              <span className="flex-1 text-left">日报内容</span>
              {dailyReportOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {dailyReportOpen && (
              <div className="flex flex-col gap-0.5 pl-4 py-1">
                <NavLink
                  to={DAILY_REPORT_BASE}
                  end
                  className={({ isActive }) => `flex items-center gap-2 py-2.5 px-3 rounded-md text-sm transition-all duration-200 ${isActive ? 'text-white bg-zinc-800' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
                >
                  日报列表
                </NavLink>
                <NavLink
                  to={`${DAILY_REPORT_BASE}/new`}
                  className={({ isActive }) => `flex items-center gap-2 py-2.5 px-3 rounded-md text-sm transition-all duration-200 ${isActive ? 'text-white bg-zinc-800' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
                >
                  写日报
                </NavLink>
              </div>
            )}
          </div>
          <div className="flex items-center gap-3 p-3 rounded-md text-zinc-400 cursor-pointer transition-all duration-200 text-sm hover:text-white hover:bg-zinc-800"><FolderKanban size={18} /> 项目</div>
          <div className="flex items-center gap-3 p-3 rounded-md text-zinc-400 cursor-pointer transition-all duration-200 text-sm hover:text-white hover:bg-zinc-800"><Users size={18} /> 团队</div>
        </nav>
        <div className="p-4 border-t border-zinc-800">
          <div className="flex items-center gap-3 p-3 text-zinc-400 cursor-pointer text-sm hover:text-white"><Settings size={18} /> Settings</div>
          <div className="flex items-center gap-3 p-3 text-zinc-400 cursor-pointer text-sm hover:text-white"><Search size={18} /> Search</div>
        </div>
      </aside>

      <section className="flex-1 flex flex-col overflow-hidden">
        <header className="h-[60px] border-b border-zinc-800 flex items-center justify-between px-8">
          <div className="text-xl font-semibold">Documents</div>
          <div className="flex gap-2">
            <button className="bg-transparent border border-zinc-800 text-white px-4 py-2 rounded-md text-sm cursor-pointer transition-colors duration-200 hover:bg-zinc-800">Last 3 months</button>
            <button className="bg-transparent border border-zinc-800 text-white px-4 py-2 rounded-md text-sm cursor-pointer transition-colors duration-200 hover:bg-zinc-800">Last 30 days</button>
            <button className="bg-transparent border border-zinc-800 text-white px-4 py-2 rounded-md text-sm cursor-pointer transition-colors duration-200 hover:bg-zinc-800">Last 7 days</button>
          </div>
        </header>

        <Outlet />
      </section>
    </div>
  )
}
