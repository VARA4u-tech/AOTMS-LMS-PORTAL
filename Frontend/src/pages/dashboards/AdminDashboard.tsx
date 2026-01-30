import { Shield, Users, Database, Settings, Activity } from "lucide-react";
import { adminStats, systemAlerts } from "../../data/mockData";
import DashboardLayout from "../../components/DashboardLayout";
import "../dashboards/StudentDashboard.css";

const AdminDashboard = () => {
  const stats = adminStats;

  return (
    <DashboardLayout role="admin">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Complete system control and management</p>
          </div>
          <button className="btn btn-primary">System Health Check</button>
        </div>

        <div className="stats-grid">
          <div
            className="stat-card"
            style={{ "--stat-color": "#ef4444" } as React.CSSProperties}
          >
            <div className="stat-icon">
              <Users size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.totalUsers}</div>
              <div className="stat-label">Total Users</div>
            </div>
          </div>

          <div
            className="stat-card"
            style={{ "--stat-color": "#8b5cf6" } as React.CSSProperties}
          >
            <div className="stat-icon">
              <Shield size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.systemHealth}</div>
              <div className="stat-label">System Health</div>
            </div>
          </div>

          <div
            className="stat-card"
            style={{ "--stat-color": "#3b82f6" } as React.CSSProperties}
          >
            <div className="stat-icon">
              <Database size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.storageUsed}</div>
              <div className="stat-label">Storage Used</div>
            </div>
          </div>

          <div
            className="stat-card"
            style={{ "--stat-color": "#10b981" } as React.CSSProperties}
          >
            <div className="stat-icon">
              <Activity size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.activeSessions}</div>
              <div className="stat-label">Active Sessions</div>
            </div>
          </div>
        </div>

        <div
          className="content-grid"
          style={{ gridTemplateColumns: "2fr 1fr" }}
        >
          <div className="content-section">
            <div className="section-header">
              <h2>System Alerts</h2>
            </div>
            <div className="alerts-list">
              {systemAlerts.map((alert) => (
                <div key={alert.id} className={`alert-item ${alert.type}`}>
                  <div className="alert-content">
                    <p className="alert-message">{alert.message}</p>
                    <span className="alert-time">{alert.time}</span>
                  </div>
                  <button className="btn btn-sm btn-outline">Resolve</button>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-card">
              <div className="sidebar-header">
                <Settings size={20} />
                <h3>Admin Actions</h3>
              </div>
              <div className="action-buttons">
                <button className="btn btn-outline w-full mb-2">
                  User Management
                </button>
                <button className="btn btn-outline w-full mb-2">
                  Security Logs
                </button>
                <button className="btn btn-outline w-full mb-2">
                  Backup & Restore
                </button>
                <button className="btn btn-outline w-full">
                  API Configuration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
