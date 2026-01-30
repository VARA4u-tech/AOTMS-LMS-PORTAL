export const currentUser = {
  name: "Alex Morgan",
  email: "alex.morgan@student.aotms.edu",
  role: "Student",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
};

export const studentStats = {
  enrolledCourses: 12,
  completedCourses: 5,
  upcomingClasses: 8,
  certificates: 4,
  studyTime: "128h",
  assignmentsDone: 24,
  videosWatched: 45,
};

export const courses = [
  {
    id: 1,
    title: "Advanced React Patterns & Performance",
    instructor: "Sarah Drasner",
    category: "Frontend",
    level: "Advanced",
    progress: 85,
    totalLessons: 42,
    completedLessons: 36,
    nextClass: "2026-02-05 10:00 AM",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Full Stack System Design Architecture",
    instructor: "Martin Fowler",
    category: "Backend",
    level: "Intermediate",
    progress: 42,
    totalLessons: 56,
    completedLessons: 24,
    nextClass: "2026-02-06 2:00 PM",
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "Cloud Native DevOps with Kubernetes",
    instructor: "Kelsey Hightower",
    category: "DevOps",
    level: "Advanced",
    progress: 15,
    totalLessons: 38,
    completedLessons: 6,
    nextClass: "2026-02-07 11:00 AM",
    thumbnail:
      "https://images.unsplash.com/photo-1667372393119-38663e956549?w=800&h=450&fit=crop",
    color: "#10b981",
  },
  {
    id: 4,
    title: "Mobile Application Development with Flutter",
    instructor: "Angela Yu",
    category: "Mobile",
    level: "Beginner",
    progress: 0,
    totalLessons: 45,
    completedLessons: 0,
    nextClass: "2026-02-08 09:00 AM",
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop",
    color: "#f59e0b",
  },
];

export const upcomingClasses = [
  {
    id: 1,
    course: "Advanced React Patterns & Performance",
    topic: "Custom Hooks & State Management Strategies",
    instructor: "Sarah Drasner",
    time: "2026-02-05 10:00 AM",
    duration: "2 hours",
    type: "Live Workshop",
  },
  {
    id: 2,
    course: "Full Stack System Design Architecture",
    topic: "Microservices vs Monoliths: Deep Dive",
    instructor: "Martin Fowler",
    time: "2026-02-06 2:00 PM",
    duration: "1.5 hours",
    type: "Lecture",
  },
  {
    id: 3,
    course: "Cloud Native DevOps with Kubernetes",
    topic: "Setting up a Production Cluster",
    instructor: "Kelsey Hightower",
    time: "2026-02-07 11:00 AM",
    duration: "2 hours",
    type: "Lab",
  },
];

// Instructor specific data
export const instructorStats = {
  activeCourses: 8,
  totalStudents: 1245,
  totalHoursTaught: 450,
  averageRating: 4.9,
  reviews: 328,
};

export const instructorCourses = [
  {
    id: 101,
    title: "Modern JavaScript Masterclass",
    students: 450,
    rating: 4.8,
    revenue: "$12,450",
    status: "Active",
  },
  {
    id: 102,
    title: "React Zero to Hero",
    students: 890,
    rating: 4.9,
    revenue: "$28,300",
    status: "Active",
  },
  {
    id: 103,
    title: "Node.js Backend Assessment",
    students: 120,
    rating: 4.7,
    revenue: "$4,200",
    status: "Draft",
  },
];

// Manager specific data
export const managerStats = {
  totalCourses: 156,
  activeInstructors: 42,
  activeStudents: 8500,
  revenue: "$1.2M",
  platformGrowth: "+24%",
};

export const recentActivities = [
  {
    id: 1,
    user: "Sarah Thompson",
    action: "Completed Course",
    target: "Data Structures & Algorithms",
    time: "2 mins ago",
  },
  {
    id: 2,
    user: "James Wilson",
    action: "New Enrollment",
    target: "AWS Certified Solutions Architect",
    time: "15 mins ago",
  },
  {
    id: 3,
    user: "Elena Rodriguez",
    action: "Submitted Assignment",
    target: "Frontend Capstone Project",
    time: "45 mins ago",
  },
  {
    id: 4,
    user: "System",
    action: "Backup Completed",
    target: "Daily Database Snapshot",
    time: "1 hour ago",
  },
];

// Admin specific data
export const adminStats = {
  totalUsers: 12450,
  systemHealth: "99.9%",
  activeSessions: 1420,
  storageUsed: "4.2TB",
  serverLoad: "34%",
};

export const systemAlerts = [
  {
    id: 1,
    type: "warning",
    message: "High memory usage on Server US-East-2",
    time: "10 mins ago",
  },
  {
    id: 2,
    type: "info",
    message: "Scheduled maintenance in 24 hours",
    time: "1 hour ago",
  },
  {
    id: 3,
    type: "success",
    message: "Database migration completed successfully",
    time: "2 hours ago",
  },
];
