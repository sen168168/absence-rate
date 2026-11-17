export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div>
      <p>បញ្ឍប់បញ្ជីក្នុងខែនេះ(School Days): {result.total_days}</p>
      <p>ពេលសិស្សត្រូវមករៀន(Possible Student Days): {result.possible_student_days}</p>
      {/* <p>Total Absences: {result.absences}</p> under mentainants*/}
      <p>ពេលអវត្តមាន(Absences): {result.absences}</p>
      <p>ពេលសិស្សត្រូវមករៀន(Actual Student Days): {result.actual_days}</p>
      <p>ភាគរយអវត្តមាន(Absence Rate): ...({result.absences}/{result.possible_student_days})....x100 = {result.absence_rate_percent}%</p>
    </div>
  );
}
