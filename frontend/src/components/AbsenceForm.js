export default function AbsenceForm({ mode, form, setForm, handleSubmit }) {
  return (
    <div>
      {mode === "class" && (
        <input
          type="number"
          placeholder="Total Students"
          value={form.total_students || ""}
          onChange={(e) =>
            setForm({ ...form, total_students: e.target.value })
          }
        />
      )}

      <input
        type="number"
        placeholder="Total School Days"
        value={form.total_days || ""}
        onChange={(e) => setForm({ ...form, total_days: e.target.value })}
      />

      <input
        type="number"
        placeholder="Absences"
        value={form.absences || ""}
        onChange={(e) => setForm({ ...form, absences: e.target.value })}
      />

      <button onClick={handleSubmit}>Calculate</button>
    </div>
  );
}
