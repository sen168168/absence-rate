export default function AbsenceForm({ mode, form, setForm, handleSubmit }) {
  return (
    <div>
      {mode === "class" && (
        <>
        <label>ចំនួនសិស្សក្នុងបញ្ជី(Total Students): </label>
        <input
        type="number"
        placeholder="Total Students"
        value={form.total_students || ""}
        onChange={(e) =>
          setForm({ ...form, total_students: e.target.value })
        }
        />
      </>
      )}

      <br></br>

      <label>បញ្ឍប់បញ្ជីក្នុងខែនេះ(School Days): </label>
      <input
        type="number"
        placeholder="Total School Days"
        value={form.total_days || ""}
        onChange={(e) => setForm({ ...form, total_days: e.target.value })}
      />

      <br></br>

      <label>ពេលអវត្តមាន(Absences): </label>
      <input
        type="number"
        placeholder="Absences"
        value={form.absences || ""}
        onChange={(e) => setForm({ ...form, absences: e.target.value })}
      />

      <br></br> <br></br>

      <button onClick={handleSubmit}>Calculate</button>
    </div>
  );
}
