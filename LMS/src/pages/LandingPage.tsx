import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  Code,
  Cpu,
  Globe,
} from "lucide-react";
import Logo from "../components/Logo";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Code size={32} />,
      title: "Practical Coding",
      description:
        "Hands-on projects with real-world application from day one.",
      color: "var(--color-brand-blue)",
    },
    {
      icon: <Cpu size={32} />,
      title: "Modern Tech Stack",
      description: "Learn the latest technologies dominating the industry.",
      color: "var(--color-brand-orange)",
    },
    {
      icon: <Users size={32} />,
      title: "Expert Mentorship",
      description: "Direct guidance from industry veterans and tech masters.",
      color: "var(--color-brand-blue)",
    },
    {
      icon: <Award size={32} />,
      title: "Industry Certification",
      description: "Valuable certificates recognized by top tech companies.",
      color: "var(--color-brand-orange)",
    },
  ];

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="landing-nav">
        <div className="container nav-content">
          <Logo size="sm" />
          <div className="nav-actions">
            <button
              className="btn btn-outline"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="grid-overlay"></div>
        </div>

        <div className="container hero-content">
          <div className="hero-text animate-fade-in">
            <div className="badge-pill">
              <Sparkles size={16} />
              <span>Future of Tech Education</span>
            </div>

            <h1 className="hero-title">
              Master the Art of <br />
              <span className="text-gradient">Technology</span>
            </h1>

            <p className="hero-description">
              Bridge the gap between theoretical knowledge and industry
              expertise. Join the <strong>Academy of Tech Masters</strong> and
              transform your career today.
            </p>

            <div className="hero-actions">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => navigate("/register")}
              >
                Join the Academy
                <ArrowRight size={20} />
              </button>

              <button
                className="btn btn-outline btn-lg"
                onClick={() => navigate("/login")}
              >
                Explore Courses
              </button>
            </div>

            <div className="hero-trust">
              <span>Trusted by future tech leaders from</span>
              <div className="company-logos">
                <div className="company-dot"></div>
                <div className="company-dot"></div>
                <div className="company-dot"></div>
                <div className="company-dot"></div>
              </div>
            </div>
          </div>

          <div className="hero-visual animate-slide-in">
            <div className="floating-card glass-card main-card">
              <Logo size="lg" />
            </div>

            <div className="floating-card glass-card stat-card-1 animate-float">
              <div className="stat-icon blue">
                <Code size={20} />
              </div>
              <div>
                <div className="stat-num">500+</div>
                <div className="stat-label">Projects</div>
              </div>
            </div>

            <div
              className="floating-card glass-card stat-card-2 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="stat-icon orange">
                <Users size={20} />
              </div>
              <div>
                <div className="stat-num">10k+</div>
                <div className="stat-label">Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose AOTMS?</h2>
            <p className="subtitle">
              We don't just teach code; we build engineers.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={
                  { "--accent-color": feature.color } as React.CSSProperties
                }
              >
                <div
                  className="feature-icon"
                  style={{ borderColor: feature.color, color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Logo size="md" />
              <p>
                Empowering the next generation of tech leaders through
                excellence in education.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Platform</h4>
                <a href="#">Courses</a>
                <a href="#">Mentorship</a>
                <a href="#">Pricing</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Academy of Tech Masters. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
