import { BookOpen, Users, Award, TrendingUp } from "lucide-react";
import DashboardLayout from "../../components/DashboardLayout";
import "../dashboards/StudentDashboard.css";
import { instructorStats, instructorCourses } from "../../data/mockData";

const InstructorDashboard = () => {
  console.log("InstructorDashboard stats:", instructorStats);
  const stats = instructorStats;
  const courses = instructorCourses;

  return (
    <DashboardLayout role="instructor">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div>
            <h1>Instructor Dashboard</h1>
            <p>Manage your courses and monitor student progress</p>
          </div>
          <button className="btn btn-primary">Create New Course</button>
        </div>

        <div className="stats-grid">
          <div
            className="stat-card"
            style={{ "--stat-color": "#8b5cf6" } as React.CSSProperties}
          >
            <div className="stat-icon">
              <BookOpen size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.activeCourses}</div>
              <div className="stat-label">Active Courses</div>
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
              <div className="stat-value">{stats.totalStudents}</div>
              <div className="stat-label">Total Students</div>
            </div>
          </div>

          <div
            className="stat-card"
            style={{ "--stat-color": "#f59e0b" } as React.CSSProperties}
          >
            <div className="stat-icon">
              <TrendingUp size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.totalHoursTaught}</div>
              <div className="stat-label">Hours Taught</div>
            </div>
          </div>

          <div
            className="stat-card"
            style={{ "--stat-color": "#10b981" } as React.CSSProperties}
          >
            <div className="stat-icon">
              <Award size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.averageRating}</div>
              <div className="stat-label">Avg Rating</div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="section-header">
            <h2>My Courses</h2>
          </div>

          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Students</th>
                  <th>Rating</th>
                  <th>Revenue</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td>
                      <div className="course-name-cell">
                        <div className="course-icon-small">
                          <BookOpen size={16} />
                        </div>
                        {course.title}
                      </div>
                    </td>
                    <td>{course.students}</td>
                    <td>
                      <div className="rating-cell">
                        <span className="star">★</span>
                        {course.rating}
                      </div>
                    </td>
                    <td>{course.revenue}</td>
                    <td>
                      <span
                        className={`status-badge ${course.status.toLowerCase()}`}
                      >
                        {course.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn-link">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InstructorDashboard;
