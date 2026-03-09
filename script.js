const result1 = document.getElementById("result");
const notesDiv = document.getElementById("notes");
const actionBtn = document.getElementById("actionBtn");

function handleAction() {
  const quantity = Number(document.getElementById("quantity").value);
  if (quantity <= 0 || isNaN(quantity)) {
    result1.textContent = "Invalid number. Please enter again.";
    result1.classList.add("NoteError");
    actionBtn.classList.add("error");
    return;
  }

  const notes = notesDiv.querySelectorAll(".note");

  if (notes.length !== quantity) {
    document.getElementById("text").style.display = "block";
    notesDiv.innerHTML = "";
    for (let i = 1; i <= quantity; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.placeholder = `Note ${i}`;
      input.className = "note";
      notesDiv.appendChild(input);
    }
    result1.textContent = "Now fill your notes and click the button again";
    actionBtn.textContent = "Calculate Average";
    result1.classList.remove("NoteError");
    actionBtn.classList.remove("error");
    return;
  }

  // Calcula a média
  let sum = 0;
  let invalid = false;
  notes.forEach((input) => {
    const value = Number(input.value);
    if (input.value === "" || isNaN(value)) invalid = true;
    sum += value;
  });

  if (invalid) {
    result1.textContent = "Please fill all notes with valid numbers!";
    result1.classList.add("NoteError");
    actionBtn.classList.add("error");
    return;
  }

  const mean = sum / notes.length;
  const status = mean > 5 ? "approved" : mean >= 4 ? "recovery" : "reproved";

  result1.textContent = `The mean is ${Number(mean.toFixed(2))}, you are ${status}  `;

  
  result1.classList.remove("NoteError");
  actionBtn.classList.remove("error");
}
