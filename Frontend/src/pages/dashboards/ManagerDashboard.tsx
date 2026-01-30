import { BarChart3, Users, BookOpen, FileText, TrendingUp } from "lucide-react";
import { managerStats, recentActivities } from "../../data/mockData";
import DashboardLayout from "../../components/DashboardLayout";
import "../dashboards/StudentDashboard.css";

const ManagerDashboard = () => {
  const stats = managerStats;

  return (
    <DashboardLayout role="manager">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div>
            <h1>LMS Manager Dashboard</h1>
            <p>Platform oversight and operational control</p>
          </div>
          <button className="btn btn-primary">Generate Reports</button>
        </div>

        <div className="stats-grid">
          <div
            className="stat-card"
            style={{ "--stat-color": "#f59e0b" } as React.CSSProperties}
          >
            <div className="stat-icon">
              <BookOpen size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.totalCourses}</div>
              <div className="stat-label">Total Courses</div>
            </div>
          </div>

          <div
            className="stat-card"
            style={{ "--stat-color": "#3b82f6" } as React.CSSProperties}
          >
            <div className="stat-icon">
              <Users size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.activeStudents}</div>
              <div className="stat-label">Active Users</div>
            </div>
          </div>

          <div
            className="stat-card"
            style={{ "--stat-color": "#8b5cf6" } as React.CSSProperties}
          >
            <div className="stat-icon">
              <FileText size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.revenue}</div>
              <div className="stat-label">Total Revenue</div>
            </div>
          </div>

          <div
            className="stat-card"
            style={{ "--stat-color": "#10b981" } as React.CSSProperties}
          >
            <div className="stat-icon">
              <TrendingUp size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.platformGrowth}</div>
              <div className="stat-label">Platform Growth</div>
            </div>
          </div>
        </div>

        <div
          className="content-grid"
          style={{ gridTemplateColumns: "2fr 1fr" }}
        >
          <div className="content-section">
            <div className="section-header">
              <h2>Recent Activities</h2>
            </div>
            <div className="activity-list">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">
                    <Users size={16} />
                  </div>
                  <div className="activity-details">
                    <p className="activity-text">
                      <strong>{activity.user}</strong> {activity.action}{" "}
                      <span className="activity-target">{activity.target}</span>
                    </p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-card">
              <div className="sidebar-header">
                <BarChart3 size={20} />
                <h3>Quick Actions</h3>
              </div>
              <div className="action-buttons">
                <button className="btn btn-outline w-full mb-2">
                  Approve Instructors
                </button>
                <button className="btn btn-outline w-full mb-2">
                  Review Content
                </button>
                <button className="btn btn-outline w-full">
                  System Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManagerDashboard;
