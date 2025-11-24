
// Based on KP146 2021 and ICAO Doc 9988 / IPCC
// 1 kg Jet A-1 produces approximately 3.15 kg CO2
export const CO2_EMISSION_FACTOR = 3.15;
export const KP146_RNAV2_FUEL_FACTOR = 3.59; // kg/km specific for RNAV2 formula
export const KP146_RNAV2_PERIOD_DAYS = 91; // Multiplier for RNAV2 formula (Quarterly/Season based)

// KP 146 Rule of Thumb Savings Constants (Kg Fuel per Flight/Movement)
// Section D.3 Page 11-12
export const ROT_CDO_SAVING = 60; // kg fixed
export const ROT_CCO_MIN = 90; // kg
export const ROT_CCO_MAX = 150; // kg
export const ROT_ACDM_MIN_MINUTES = 1; // minutes
export const ROT_ACDM_MAX_MINUTES = 3; // minutes

// Saving Values based on TMA/APP 2025 Document
export const IAP_SAVING_RNP = 30; // kg
export const IAP_SAVING_ILS = 240; // kg
export const SID_SAVING_DEFAULT = 150; // kg (WIII/WAAA Reference)
export const STAR_SAVING_DEFAULT = 60; // kg (WIII/WAAA Reference)

export const KP146_WAKE_RECAT_DEP_MIN = 4.2;
export const KP146_WAKE_RECAT_DEP_MAX = 6.4;
export const KP146_WAKE_RECAT_ARR_MIN = 7;
export const KP146_WAKE_RECAT_ARR_MAX = 12;
export const KP146_AMAN_MIN = 50;
export const KP146_AMAN_MAX = 100;

// A-SMGCS Constants (Ton Fuel per Flight)
export const KP146_ASMGCS_BUSY_MIN = 0.012;
export const KP146_ASMGCS_BUSY_MAX = 0.024;
export const KP146_ASMGCS_LOW_VIS_MIN = 0.012;
export const KP146_ASMGCS_LOW_VIS_MAX = 0.024;
export const KP146_ASMGCS_NIGHT_MIN = 0.0038;
export const KP146_ASMGCS_NIGHT_MAX = 0.0077;

export const AIRPORT_LOCATIONS = [
  'WIII', 'WAAA', 'WADD', 'WARR', 'WIHH', 'WIMM', 'WIPP', 'WITT', 'WIBB',
  'WIEE', 'WILL', 'WICC', 'WAHS', 'WAHI', 'WIOO', 'WALL', 'WAOO', 'WAQQ',
  'WAFF', 'WIJJ', 'WIGG', 'WAGG', 'WIDD', 'WIDN', 'WAMM', 'WAWW', 'WAMG',
  'WAPP', 'WADL', 'WATT', 'WASS', 'WABB', 'WAJJ', 'WAKK', 'WABI', 'WAEE',
  'WAYY', 'WAUU'
];

export const MODULE_DESCRIPTIONS: Record<string, string> = {
  RNAV2: "Perhitungan efisiensi rute En-route berbasis PBN (RNAV2) dibandingkan jalur konvensional sesuai formula spesifik KP 146.",
  SID_STAR_IAP: "Satu formula terintegrasi untuk menghitung efisiensi prosedur SID, STAR, dan IAP berdasarkan nilai penghematan bahan bakar tetap (Fixed Saving) sesuai dokumen KP 146.",
  RNP2_PAPUA: "Kalkulasi khusus implementasi RNP2 di wilayah Papua untuk mengatasi kendala terrain dan ground aids.",
  ASMGCS: "Pengurangan waktu taxi dan antrian di darat menggunakan Advanced Surface Movement Guidance and Control System.",
  CROSS_LEVEL: "Penghematan bahan bakar akibat penggunaan ketinggian jelajah (Cruising Level) yang optimal.",
  CCO_CDO: "Metode Rule of Thumb KP 146: Estimasi penghematan bahan bakar untuk CCO (90-150 kg) atau CDO (60 kg) per penerbangan.",
  ACDM: "Metode Rule of Thumb KP 146: Estimasi penghematan waktu taxi 1-3 menit per pergerakan pesawat.",
  
  WAKE_RECAT_DEP: "Efisiensi separasi keberangkatan (Wake Turbulence Recategorization).",
  WAKE_RECAT_ARR: "Efisiensi separasi kedatangan (Wake Turbulence Recategorization).",
  AMAN: "Efisiensi antrian kedatangan (Arrival Management/RSEQ).",
  ASMGCS_BUSY: "Efisiensi A-SMGCS pada periode sibuk (Rule of Thumb).",
  ASMGCS_LOW_VIS: "Efisiensi A-SMGCS pada jarak pandang rendah (Rule of Thumb).",
  ASMGCS_NIGHT: "Efisiensi A-SMGCS pada operasional malam hari (Rule of Thumb)."
};