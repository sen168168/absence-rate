export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div>
      <p>Possible Student Days: {result.possible_student_days}</p>
      {/* <p>Total Absences: {result.absences}</p> under mentainants*/}
      <p>Actual Student Days: {result.actual_days}</p>
      <p>Absence Rate: {result.absence_rate_percent}%</p>
    </div>
  );
}
