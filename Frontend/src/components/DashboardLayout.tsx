import { useState } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore, type UserRole } from "../store/authStore";
import {
  GraduationCap,
  BookOpen,
  Video,
  FileText,
  Award,
  TrendingUp,
  Users,
  Settings,
  Bell,
  LogOut,
  Menu,
  X,
  Home,
  BarChart3,
  Shield,
  Database,
} from "lucide-react";
import "./DashboardLayout.css";

interface DashboardLayoutProps {
  children: ReactNode;
  role: UserRole;
}

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Role-specific navigation items
  const getNavigationItems = () => {
    switch (role) {
      case "student":
        return [
          { icon: <Home size={20} />, label: "Dashboard", path: "/dashboard" },
          {
            icon: <BookOpen size={20} />,
            label: "My Courses",
            path: "/student/courses",
          },
          {
            icon: <Video size={20} />,
            label: "Live Classes",
            path: "/student/live",
          },
          {
            icon: <FileText size={20} />,
            label: "Exams",
            path: "/student/exams",
          },
          {
            icon: <TrendingUp size={20} />,
            label: "Progress",
            path: "/student/progress",
          },
          {
            icon: <Award size={20} />,
            label: "Certificates",
            path: "/student/certificates",
          },
        ];

      case "instructor":
        return [
          { icon: <Home size={20} />, label: "Dashboard", path: "/dashboard" },
          {
            icon: <BookOpen size={20} />,
            label: "My Courses",
            path: "/instructor/courses",
          },
          {
            icon: <Video size={20} />,
            label: "Live Classes",
            path: "/instructor/live",
          },
          {
            icon: <Users size={20} />,
            label: "Students",
            path: "/instructor/students",
          },
          {
            icon: <FileText size={20} />,
            label: "Assignments",
            path: "/instructor/assignments",
          },
          {
            icon: <BarChart3 size={20} />,
            label: "Analytics",
            path: "/instructor/analytics",
          },
        ];

      case "manager":
        return [
          { icon: <Home size={20} />, label: "Dashboard", path: "/dashboard" },
          {
            icon: <BarChart3 size={20} />,
            label: "Overview",
            path: "/manager/overview",
          },
          {
            icon: <BookOpen size={20} />,
            label: "Courses",
            path: "/manager/courses",
          },
          {
            icon: <FileText size={20} />,
            label: "Exams",
            path: "/manager/exams",
          },
          {
            icon: <Award size={20} />,
            label: "Leaderboard",
            path: "/manager/leaderboard",
          },
          {
            icon: <Users size={20} />,
            label: "Access Control",
            path: "/manager/access",
          },
        ];

      case "admin":
        return [
          { icon: <Home size={20} />, label: "Dashboard", path: "/dashboard" },
          {
            icon: <Users size={20} />,
            label: "User Management",
            path: "/admin/users",
          },
          {
            icon: <Shield size={20} />,
            label: "Roles & Permissions",
            path: "/admin/roles",
          },
          {
            icon: <BookOpen size={20} />,
            label: "Courses",
            path: "/admin/courses",
          },
          {
            icon: <BarChart3 size={20} />,
            label: "Analytics",
            path: "/admin/analytics",
          },
          {
            icon: <Database size={20} />,
            label: "System Settings",
            path: "/admin/settings",
          },
        ];

      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();

  const roleColors = {
    student: "#3b82f6",
    instructor: "#8b5cf6",
    manager: "#f59e0b",
    admin: "#ef4444",
  };

  return (
    <div
      className="dashboard-layout"
      style={{ "--role-color": roleColors[role] } as React.CSSProperties}
    >
      {/* Sidebar */}
      <aside
        className={`sidebar ${sidebarOpen ? "open" : "closed"} ${mobileMenuOpen ? "mobile-open" : ""}`}
      >
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <GraduationCap size={32} />
            {sidebarOpen && <span>AOTMS LMS</span>}
          </div>
        </div>

        <div className="sidebar-user">
          {user?.avatar && (
            <img src={user.avatar} alt={user.name} className="sidebar-avatar" />
          )}
          {sidebarOpen && (
            <div className="sidebar-user-info">
              <div className="sidebar-user-name">{user?.name}</div>
              <div
                className="sidebar-user-role"
                style={{ color: roleColors[role] }}
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </div>
            </div>
          )}
        </div>

        <nav className="sidebar-nav">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              className="nav-item"
              onClick={() => {
                navigate(item.path);
                setMobileMenuOpen(false);
              }}
            >
              {item.icon}
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item">
            <Settings size={20} />
            {sidebarOpen && <span>Settings</span>}
          </button>
          <button className="nav-item" onClick={handleLogout}>
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Bar */}
        <header className="topbar">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={24} />
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="topbar-actions">
            <button className="icon-btn">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>

            <div className="user-menu">
              <img src={user?.avatar} alt={user?.name} />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">{children}</main>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
