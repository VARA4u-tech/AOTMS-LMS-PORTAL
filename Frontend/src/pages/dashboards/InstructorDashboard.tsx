import { BookOpen, Users, Award, TrendingUp } from "lucide-react";
import DashboardLayout from "../../components/DashboardLayout";
import StatCard from "../../components/StatCard";
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
          <StatCard
            icon={BookOpen}
            value={stats.activeCourses}
            label="Active Courses"
            color="#8b5cf6"
          />
          <StatCard
            icon={Users}
            value={stats.totalStudents}
            label="Total Students"
            color="#3b82f6"
          />
          <StatCard
            icon={TrendingUp}
            value={stats.totalHoursTaught}
            label="Hours Taught"
            color="#f59e0b"
          />
          <StatCard
            icon={Award}
            value={stats.averageRating}
            label="Avg Rating"
            color="#10b981"
          />
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
