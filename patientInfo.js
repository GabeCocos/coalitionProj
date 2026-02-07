const jessica = data.patients.find(
  patient => patient.name === "Jessica Taylor"
);

populatePatientInfo(jessica);
renderBloodPressureChart(jessica.blood_pressure_history);
