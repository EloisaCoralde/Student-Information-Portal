import { Link } from "react-router-dom";
import StudentCard from "../components/StudentCard";
import CourseCard from "../components/CourseCard";
import "./Pages.css";

const featuredStudents = [
  { id: "2026-001", name: "Alex Santos", course: "BS Information Technology", year: 2 },
  { id: "2026-002", name: "Jamie Reyes", course: "BS Computer Science", year: 1 },
  { id: "2026-003", name: "Taylor Cruz", course: "BS Information Technology", year: 3 },
];

const featuredCourses = [
  { code: "DCIT 26", title: "Application Development", units: 3, department: "Computing Studies", description: "Explore application development concepts and modern tools." },
  { code: "DCIT 21", title: "Introduction to Computing", units: 3, department: "Computing Studies", description: "Build a foundation in computing concepts and systems." },
];

export default function Home() {
  return (
    <div className="page-container">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">WELCOME TO YOUR CAMPUS HUB</span>
          <h1>Everything student life, <span>in one place.</span></h1>
          <p>Explore student information, discover courses, and learn more about the portal through one simple dashboard.</p>
          <div className="hero-actions">
            <Link className="button button-light" to="/students">Explore Students <span aria-hidden="true">→</span></Link>
            <Link className="hero-text-link" to="/courses">Browse courses</Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-circle circle-one"></div><div className="art-circle circle-two"></div>
          <div className="art-card"><span className="art-icon">✦</span><strong>Learn.</strong><strong>Connect.</strong><strong>Grow.</strong><small>Your journey starts here.</small></div>
        </div>
      </section>

      <section className="welcome-strip">
        <div><span className="strip-dot"></span><span>One portal. Helpful information. Easier navigation.</span></div>
        <span className="strip-note">STUDENT INFORMATION PORTAL</span>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div><span className="eyebrow">GET STARTED</span><h2>Explore the portal</h2></div>
          <p>Quick access to the information you need.</p>
        </div>
        <div className="quick-grid">
          <Link to="/students" className="quick-card"><span className="quick-icon">♙</span><h3>Students</h3><p>View sample student profiles and academic details.</p><span className="quick-link">View students →</span></Link>
          <Link to="/courses" className="quick-card"><span className="quick-icon">▤</span><h3>Courses</h3><p>Browse course descriptions and subject information.</p><span className="quick-link">View courses →</span></Link>
          <Link to="/about" className="quick-card"><span className="quick-icon">ⓘ</span><h3>About</h3><p>Learn about the purpose and features of this portal.</p><span className="quick-link">Learn more →</span></Link>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading"><div><span className="eyebrow">STUDENT DIRECTORY</span><h2>Featured students</h2></div><Link className="section-link" to="/students">See all students →</Link></div>
        <div className="student-grid">{featuredStudents.map((student) => <StudentCard key={student.id} student={student} />)}</div>
      </section>

      <section className="content-section last-section">
        <div className="section-heading"><div><span className="eyebrow">ACADEMIC PROGRAMS</span><h2>Featured courses</h2></div><Link className="section-link" to="/courses">See all courses →</Link></div>
        <div className="course-grid">{featuredCourses.map((course) => <CourseCard key={course.code} course={course} />)}</div>
      </section>
    </div>
  );
}