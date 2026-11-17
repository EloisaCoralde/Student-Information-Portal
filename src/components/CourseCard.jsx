import "./CourseCard.css";

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-card-top">
        <span className="course-code">{course.code}</span>
        <span className="course-units">{course.units} units</span>
      </div>
      <div>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
      </div>
      <div className="course-card-bottom">
        <span>{course.department}</span>
        <span className="course-arrow" aria-hidden="true">↗</span>
      </div>
    </article>
  );
}