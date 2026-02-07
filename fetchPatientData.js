const API_URL = "https://coalitiontechnologies.com/api/patient";

async function fetchPatientData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    populatePatientInfo(data);
    renderBloodPressureChart(data.blood_pressure_history);
  } catch (error) {
    console.error("Error fetching patient data:", error);
  }
}

fetchPatientData();
