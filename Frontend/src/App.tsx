import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/authStore";

// Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RoleSelectionPage from "./pages/RoleSelectionPage";

// Dashboards
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import InstructorDashboard from "./pages/dashboards/InstructorDashboard";
import ManagerDashboard from "./pages/dashboards/ManagerDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// Role-based Route Component
const RoleRoute = ({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles: string[];
}) => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user?.role) {
    return <Navigate to="/select-role" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/access-denied" replace />;
  }

  return <>{children}</>;
};

// Dashboard Router - Routes to correct dashboard based on role
const DashboardRouter = () => {
  const { user } = useAuthStore();

  if (!user?.role) {
    return <Navigate to="/select-role" replace />;
  }

  switch (user.role) {
    case "student":
      return <StudentDashboard />;
    case "instructor":
      return <InstructorDashboard />;
    case "manager":
      return <ManagerDashboard />;
    case "admin":
      return <AdminDashboard />;
    default:
      return <Navigate to="/select-role" replace />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route
          path="/select-role"
          element={
            <ProtectedRoute>
              <RoleSelectionPage />
            </ProtectedRoute>
          }
        />

        {/* Dashboard - Auto-routes based on role */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardRouter />
            </ProtectedRoute>
          }
        />

        {/* Role-specific routes */}
        <Route
          path="/student/*"
          element={
            <RoleRoute allowedRoles={["student"]}>
              <StudentDashboard />
            </RoleRoute>
          }
        />

        <Route
          path="/instructor/*"
          element={
            <RoleRoute allowedRoles={["instructor"]}>
              <InstructorDashboard />
            </RoleRoute>
          }
        />

        <Route
          path="/manager/*"
          element={
            <RoleRoute allowedRoles={["manager"]}>
              <ManagerDashboard />
            </RoleRoute>
          }
        />

        <Route
          path="/admin/*"
          element={
            <RoleRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </RoleRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
