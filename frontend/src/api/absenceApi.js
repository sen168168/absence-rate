export async function calculateAbsence(data) {
  const res = await fetch("http://127.0.0.1:5000/calculate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Something went wrong");
  }

  return res.json();
}
