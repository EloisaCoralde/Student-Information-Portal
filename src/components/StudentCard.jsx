import "./StudentCard.css";

export default function StudentCard({ student }) {
  const initials = student.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <article className="student-card">
      <div className="student-avatar" aria-hidden="true">{initials}</div>
      <div className="student-info">
        <h3>{student.name}</h3>
        <p className="student-course">{student.course}</p>
        <div className="student-meta">
          <span>ID: {student.id}</span>
          <span className={`year-tag year-${student.year}`}>{student.year} Year</span>
        </div>
      </div>
    </article>
  );
}