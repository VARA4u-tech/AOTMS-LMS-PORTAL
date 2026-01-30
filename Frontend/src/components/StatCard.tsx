import React from "react";
import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  color: string;
}

const StatCard = ({ icon: Icon, value, label, color }: StatCardProps) => {
  return (
    <div
      className="stat-card"
      style={{ "--stat-color": color } as React.CSSProperties}
    >
      <div className="stat-icon">
        <Icon size={24} />
      </div>
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
};

export default StatCard;
