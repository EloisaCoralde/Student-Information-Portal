import { useMemo, useState } from "react";
import CourseCard from "../components/CourseCard";
import "./Pages.css";

const courses = [
  { code: "DCIT 26", title: "Application Development", units: 3, department: "Computing Studies", description: "Explore application development concepts, reusable components, routing, and modern development tools." },
  { code: "DCIT 21", title: "Introduction to Computing", units: 3, department: "Computing Studies", description: "Understand foundational computing concepts, computer systems, and digital technologies." },
  { code: "DCIT 23", title: "Computer Programming", units: 3, department: "Computing Studies", description: "Practice problem solving, programming logic, and writing structured code." },
  { code: "DCIT 24", title: "Information Management", units: 3, department: "Computing Studies", description: "Learn how information is organized, stored, managed, and retrieved." },
  { code: "GNED 01", title: "Art Appreciation", units: 3, department: "General Education", description: "Explore art, creative expression, and the role of art in society." },
  { code: "GNED 08", title: "Understanding the Self", units: 3, department: "General Education", description: "Reflect on personal identity and the factors that shape the self." },
];

export default function Courses() {
  const [search, setSearch] = useState("");
  const filteredCourses = useMemo(() => courses.filter((course) =>
    `${course.code} ${course.title} ${course.department}`.toLowerCase().includes(search.toLowerCase())
  ), [search]);

  return (
    <div className="page-container inner-page">
      <section className="page-intro">
        <span className="eyebrow">ACADEMICS</span>
        <h1>Course catalog</h1>
        <p>Discover sample subjects and their descriptions. Search by course code, title, or department.</p>
      </section>
      <div className="toolbar">
        <label className="search-box"><span aria-hidden="true">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search courses..." aria-label="Search courses" /></label>
        <span className="result-count">{filteredCourses.length} {filteredCourses.length === 1 ? "course" : "courses"}</span>
      </div>
      {filteredCourses.length ? <div className="course-grid">{filteredCourses.map((course) => <CourseCard key={course.code} course={course} />)}</div> : <div className="empty-state"><strong>No courses found</strong><p>Try another course code, title, or department.</p></div>}
    </div>
  );
}