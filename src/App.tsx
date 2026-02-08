import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Overview from './pages/Dashboard/Overview'
import DailyReportList from './pages/Dashboard/DailyReport'
import DailyReportNew from './pages/Dashboard/DailyReportNew'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="daily-report" element={<Outlet />}>
            <Route index element={<DailyReportList />} />
            <Route path="new" element={<DailyReportNew />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
