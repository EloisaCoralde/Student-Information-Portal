import { useMemo, useState } from "react";
import StudentCard from "../components/StudentCard";
import "./Pages.css";

const students = [
  { id: "2026-001", name: "Alex Santos", course: "BS Information Technology", year: 2 },
  { id: "2026-002", name: "Jamie Reyes", course: "BS Computer Science", year: 1 },
  { id: "2026-003", name: "Taylor Cruz", course: "BS Information Technology", year: 3 },
  { id: "2026-004", name: "Morgan Garcia", course: "BS Information Systems", year: 2 },
  { id: "2026-005", name: "Riley Mendoza", course: "BS Computer Science", year: 4 },
  { id: "2026-006", name: "Casey Flores", course: "BS Information Technology", year: 1 },
];

export default function Students() {
  const [search, setSearch] = useState("");
  const filteredStudents = useMemo(() => students.filter((student) =>
    `${student.name} ${student.id} ${student.course}`.toLowerCase().includes(search.toLowerCase())
  ), [search]);

  return (
    <div className="page-container inner-page">
      <section className="page-intro">
        <span className="eyebrow">DIRECTORY</span>
        <h1>Our students</h1>
        <p>Browse the sample student directory. Use the search field to find a student by name, ID, or program.</p>
      </section>
      <div className="toolbar">
        <label className="search-box"><span aria-hidden="true">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search students..." aria-label="Search students" /></label>
        <span className="result-count">{filteredStudents.length} {filteredStudents.length === 1 ? "student" : "students"}</span>
      </div>
      {filteredStudents.length ? <div className="student-grid">{filteredStudents.map((student) => <StudentCard key={student.id} student={student} />)}</div> : <div className="empty-state"><strong>No students found</strong><p>Try another name, student ID, or course.</p></div>}
    </div>
  );
}