import React from "react";
import "./Logo.css";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = "md",
  variant = "light",
  className = "",
}) => {
  return (
    <div className={`brand-logo logo-${size} ${className}`}>
      <div className="logo-icon-container">
        <div className="logo-circle-outer"></div>
        <div className="logo-circle-inner"></div>
        <div className="logo-brackets">
          <span className="bracket-left">&lt;</span>
          <span className="bracket-center">/</span>
          <span className="bracket-right">&gt;</span>
        </div>
      </div>

      <div
        className={`logo-text-container ${variant === "dark" ? "text-dark" : "text-light"}`}
      >
        <div className="logo-title-row">
          <span className="text-academy">ACADEMY OF</span>
          <span className="text-tech">TECH MASTERS</span>
        </div>
        <div className="logo-tagline">LEARN TODAY, LEAD TOMORROW</div>
      </div>
    </div>
  );
};

export default Logo;
