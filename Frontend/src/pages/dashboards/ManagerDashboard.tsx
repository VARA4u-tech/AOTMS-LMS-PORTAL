import { BarChart3, Users, BookOpen, FileText, TrendingUp } from "lucide-react";
import { managerStats, recentActivities } from "../../data/mockData";
import DashboardLayout from "../../components/DashboardLayout";
import StatCard from "../../components/StatCard";
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
          <StatCard
            icon={BookOpen}
            value={stats.totalCourses}
            label="Total Courses"
            color="#f59e0b"
          />
          <StatCard
            icon={Users}
            value={stats.activeStudents}
            label="Active Users"
            color="#3b82f6"
          />
          <StatCard
            icon={FileText}
            value={stats.revenue}
            label="Total Revenue"
            color="#8b5cf6"
          />
          <StatCard
            icon={TrendingUp}
            value={stats.platformGrowth}
            label="Platform Growth"
            color="#10b981"
          />
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
