import { useNavigate } from "react-router-dom";
import { useAuthStore, type UserRole } from "../store/authStore";
import {
  GraduationCap,
  BookOpen,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import Logo from "../components/Logo";
import "./RoleSelectionPage.css";

const RoleSelectionPage = () => {
  const navigate = useNavigate();
  const { selectRole, user } = useAuthStore();

  const roles = [
    {
      id: "student" as UserRole,
      title: "Student",
      description:
        "Access courses, attend live classes, take exams, and track your progress",
      icon: <GraduationCap size={48} />,
      color: "#3b82f6",
      features: [
        "Enroll in courses",
        "Watch recorded videos",
        "Join live classes",
        "Take exams & quizzes",
        "Track progress",
        "Earn certificates",
      ],
    },
    {
      id: "instructor" as UserRole,
      title: "Instructor",
      description:
        "Create courses, upload content, conduct live classes, and monitor student performance",
      icon: <BookOpen size={48} />,
      color: "#8b5cf6",
      features: [
        "Create & manage courses",
        "Upload video content",
        "Conduct live classes",
        "Create assignments",
        "Monitor students",
        "Provide feedback",
      ],
    },
    {
      id: "manager" as UserRole,
      title: "LMS Manager",
      description:
        "Oversee platform operations, manage exams, validate leaderboards, and control access",
      icon: <Users size={48} />,
      color: "#f59e0b",
      features: [
        "Platform oversight",
        "Course monitoring",
        "Exam management",
        "Leaderboard validation",
        "Guest access control",
        "Generate reports",
      ],
    },
    {
      id: "admin" as UserRole,
      title: "Administrator",
      description:
        "Full system control with user management, role permissions, and platform configuration",
      icon: <Shield size={48} />,
      color: "#ef4444",
      features: [
        "User management",
        "Role & permissions",
        "System settings",
        "Platform analytics",
        "Security & logs",
        "Complete override",
      ],
    },
  ];

  const handleRoleSelect = (role: UserRole) => {
    selectRole(role);
    navigate("/dashboard");
  };

  return (
    <div className="role-selection-page">
      <div className="role-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="container role-container">
        <div className="role-header">
          <div className="role-branding">
            <Logo size="lg" className="mx-auto mb-6" />
          </div>
          <div className="user-welcome">
            <div>
              <h1>Welcome, {user?.name}!</h1>
              <p>Select your role to continue</p>
            </div>
          </div>
        </div>

        <div className="roles-grid">
          {roles.map((role) => (
            <div
              key={role.id}
              className="role-card"
              style={{ "--role-color": role.color } as React.CSSProperties}
              onClick={() => handleRoleSelect(role.id)}
            >
              <div className="role-card-header">
                <div className="role-icon" style={{ color: role.color }}>
                  {role.icon}
                </div>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </div>

              <div className="role-features">
                {role.features.map((feature, index) => (
                  <div key={index} className="role-feature">
                    <div className="feature-dot"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="role-select-btn">
                Select Role
                <ArrowRight size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="role-footer">
          <p>You can change your role anytime from your profile settings</p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;
