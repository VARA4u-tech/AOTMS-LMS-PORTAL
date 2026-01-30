import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
  LogIn,
  UserPlus,
} from "lucide-react";
import "./AuthPages.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, guestLogin, isLoading } = useAuthStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(formData.email, formData.password);
      navigate("/select-role");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleGuestLogin = () => {
    guestLogin();
    navigate("/select-role");
  };

  return (
    <div className="auth-page">
      <div className="auth-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="auth-container">
        {/* Left Side - Branding */}
        <div className="auth-branding">
          <div className="brand-content">
            <div className="brand-icon">
              <GraduationCap size={48} />
            </div>
            <h1>Welcome Back!</h1>
            <p>Sign in to continue your learning journey with AOTMS LMS</p>

            <div className="brand-features">
              <div className="brand-feature">
                <div className="feature-check">✓</div>
                <span>Access all your courses</span>
              </div>
              <div className="brand-feature">
                <div className="feature-check">✓</div>
                <span>Track your progress</span>
              </div>
              <div className="brand-feature">
                <div className="feature-check">✓</div>
                <span>Join live classes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="auth-form-container">
          <div className="auth-form-wrapper">
            <div className="auth-header">
              <h2>Sign In</h2>
              <p>Enter your credentials to access your account</p>
            </div>

            {error && <div className="alert alert-error">{error}</div>}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-with-icon">
                  <Mail size={20} />
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-with-icon">
                  <Lock size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-link">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="spinner"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn size={20} />
                    Sign In
                  </>
                )}
              </button>
            </form>

            <div className="divider">
              <span>or</span>
            </div>

            <button
              className="btn btn-secondary btn-block"
              onClick={handleGuestLogin}
            >
              <UserPlus size={20} />
              Continue as Guest
            </button>

            <div className="auth-footer">
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="auth-link">
                  Create one now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
