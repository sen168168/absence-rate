export default function ModeSelector({ mode, setMode }) {
  return (
    <div>
      <label>
        <input
          type="radio"
          value="student"
          checked={mode === "student"}
          onChange={(e) => setMode(e.target.value)}
        />
        One Student
      </label>
      <label>
        <input
          type="radio"
          value="class"
          checked={mode === "class"}
          onChange={(e) => setMode(e.target.value)}
        />
        Whole Class
      </label>
    </div>
  );
}
