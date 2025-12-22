import { useState } from "react";
import ModeSelector from "../components/ModeSelector";
import AbsenceForm from "../components/AbsenceForm";
import ResultCard from "../components/ResultCard";
import { calculateAbsence } from "../api/absenceApi";

export default function Calculator() {
  const [mode, setMode] = useState("student");
  const [form, setForm] = useState({});
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      setError("");
      const res = await calculateAbsence({ mode, ...form });
      setResult(res);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div>
      <h1>Absence Rate Calculator</h1>
      <ModeSelector mode={mode} setMode={setMode} />
      <AbsenceForm mode={mode} form={form} setForm={setForm} handleSubmit={handleSubmit} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ResultCard result={result} />
    </div>
  );
}
