async function submitLead() {
  const data = {
    name: document.getElementById("name").value,
    role: document.getElementById("role").value,
    problem: document.getElementById("problem").value,
    urgency: Number(document.getElementById("urgency").value)
  };

  const response = await fetch("http://localhost:5000/api/qualify-lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  document.getElementById("output").textContent =
    JSON.stringify(result, null, 2);
}
