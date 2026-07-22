import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import Projects from "./pages/dashboard/Projects";
import Executions from "./pages/dashboard/Executions";
import Reports from "./pages/dashboard/Reports";
import Agents from "./pages/dashboard/Agents";
import Settings from "./pages/dashboard/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="projects" element={<Projects />} />
          <Route path="executions" element={<Executions />} />
          <Route path="reports" element={<Reports />} />
          <Route path="agents" element={<Agents />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
