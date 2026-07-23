import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "@/components/layout/AuthLayout";
import DashboardShell from "@/components/layout/DashboardShell";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import VerifyEmailPage from "@/pages/auth/VerifyEmailPage";
import LandingPage from "@/pages/landing/LandingPage";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import ProjectListPage from "@/pages/projects/ProjectListPage";
import RunListPage from "@/pages/runs/RunListPage";
import ReportListPage from "@/pages/reports/ReportListPage";
import AgentsPage from "@/pages/dashboard/AgentsPage";
import SettingsPage from "@/pages/settings/SettingsPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/verify-email" element={<VerifyEmailPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardShell />}>
              <Route index element={<DashboardPage />} />
              <Route path="projects" element={<ProjectListPage />} />
              <Route path="executions" element={<RunListPage />} />
              <Route path="reports" element={<ReportListPage />} />
              <Route path="agents" element={<AgentsPage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
