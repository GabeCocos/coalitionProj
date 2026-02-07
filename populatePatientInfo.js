function populatePatientInfo(data) {
  document.getElementById("patient-name").textContent = data.name;
  document.getElementById("patient-age").textContent = data.age;
  document.getElementById("patient-gender").textContent = data.gender;
  document.getElementById("heart-rate").textContent = data.heart_rate + " bpm";
  document.getElementById("blood-pressure").textContent =
    `${data.blood_pressure.systolic}/${data.blood_pressure.diastolic}`;
}
