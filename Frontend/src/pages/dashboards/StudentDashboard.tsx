import { useState } from "react";
import {
  BookOpen,
  Video,
  Calendar,
  Award,
  TrendingUp,
  Clock,
  PlayCircle,
  FileText,
  Target,
} from "lucide-react";
import DashboardLayout from "../../components/DashboardLayout";
import "./StudentDashboard.css";

import { studentStats, courses, upcomingClasses } from "../../data/mockData";

const StudentDashboard = () => {
  const [stats] = useState(studentStats);

  return (
    <DashboardLayout role="student">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div>
            <h1>My Learning Dashboard</h1>
            <p>Track your progress and continue learning</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div
            className="stat-card"
            style={{ "--stat-color": "#3b82f6" } as React.CSSProperties}
          >
            <div className="stat-icon">
              <BookOpen size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.enrolledCourses}</div>
              <div className="stat-label">Enrolled Courses</div>
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
              <div className="stat-value">{stats.completedCourses}</div>
              <div className="stat-label">Completed</div>
            </div>
          </div>

          <div
            className="stat-card"
            style={{ "--stat-color": "#f59e0b" } as React.CSSProperties}
          >
            <div className="stat-icon">
              <Calendar size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.upcomingClasses}</div>
              <div className="stat-label">Upcoming Classes</div>
            </div>
          </div>

          <div
            className="stat-card"
            style={{ "--stat-color": "#8b5cf6" } as React.CSSProperties}
          >
            <div className="stat-icon">
              <Target size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.certificates}</div>
              <div className="stat-label">Certificates</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="content-grid">
          {/* My Courses */}
          <div className="content-section">
            <div className="section-header">
              <h2>My Courses</h2>
              <a href="#" className="view-all">
                View All
              </a>
            </div>

            <div className="courses-list">
              {courses.map((course) => (
                <div key={course.id} className="course-card">
                  <div className="course-thumbnail">
                    <img src={course.thumbnail} alt={course.title} />
                    <div className="course-overlay">
                      <button className="play-btn">
                        <PlayCircle size={40} />
                      </button>
                    </div>
                  </div>

                  <div className="course-content">
                    <h3>{course.title}</h3>
                    <p className="course-instructor">by {course.instructor}</p>

                    <div className="progress-section">
                      <div className="progress-header">
                        <span>Progress</span>
                        <span className="progress-value">
                          {course.progress}%
                        </span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="course-footer">
                      <div className="next-class">
                        <Clock size={16} />
                        <span>{course.nextClass}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar-section">
            {/* Upcoming Classes */}
            <div className="sidebar-card">
              <div className="sidebar-header">
                <Video size={20} />
                <h3>Upcoming Live Classes</h3>
              </div>

              <div className="upcoming-classes">
                {upcomingClasses.map((cls) => (
                  <div key={cls.id} className="class-item">
                    <div className="class-info">
                      <h4>{cls.topic}</h4>
                      <p className="class-course">{cls.course}</p>
                      <div className="class-meta">
                        <span className="class-time">
                          <Calendar size={14} />
                          {cls.time}
                        </span>
                        <span className="class-duration">
                          <Clock size={14} />
                          {cls.duration}
                        </span>
                      </div>
                    </div>
                    <button className="join-btn">Join</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Summary */}
            <div className="sidebar-card">
              <div className="sidebar-header">
                <TrendingUp size={20} />
                <h3>This Week's Progress</h3>
              </div>

              <div className="progress-summary">
                <div className="summary-item">
                  <FileText size={18} />
                  <div>
                    <div className="summary-value">12</div>
                    <div className="summary-label">Videos Watched</div>
                  </div>
                </div>

                <div className="summary-item">
                  <Award size={18} />
                  <div>
                    <div className="summary-value">8</div>
                    <div className="summary-label">Assignments Done</div>
                  </div>
                </div>

                <div className="summary-item">
                  <Clock size={18} />
                  <div>
                    <div className="summary-value">24h</div>
                    <div className="summary-label">Study Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
