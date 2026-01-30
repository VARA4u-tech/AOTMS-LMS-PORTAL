import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/authStore";

// Lazy Loaded Pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const RoleSelectionPage = lazy(() => import("./pages/RoleSelectionPage"));

// Lazy Loaded Dashboards
const StudentDashboard = lazy(
  () => import("./pages/dashboards/StudentDashboard"),
);
const InstructorDashboard = lazy(
  () => import("./pages/dashboards/InstructorDashboard"),
);
const ManagerDashboard = lazy(
  () => import("./pages/dashboards/ManagerDashboard"),
);
const AdminDashboard = lazy(() => import("./pages/dashboards/AdminDashboard"));

// Loading Component
const PageLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <div className="loader">Loading...</div>
  </div>
);

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
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
