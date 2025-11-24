
export enum CalculationType {
  RNAV2 = 'RNAV2 (En-route)',
  SID_STAR_IAP = 'SID-STAR-IAP', // Renamed to single unified formula
  RNP2_PAPUA = 'RNP2 (papua)',
  ASMGCS = 'A-SMGCS (JATSC)',
  CROSS_LEVEL = 'Cross Level Altitude',
  // KP 146 Rule of Thumb Methods
  CCO_CDO = 'CCO / CDO', // Merged
  ACDM = 'A-CDM',
  
  // New KP 146 Additions
  WAKE_RECAT_DEP = 'WAKE-RECAT (Departure)',
  WAKE_RECAT_ARR = 'WAKE-RECAT (Arrival)',
  AMAN = 'AMAN (RSEQ)',
  ASMGCS_BUSY = 'A-SMGCS (Periode Sibuk)',
  ASMGCS_LOW_VIS = 'A-SMGCS (Low Visibility)',
  ASMGCS_NIGHT = 'A-SMGCS (Malam Hari)'
}

export enum Phase {
  TAXI_OUT = 'Taxi Out',
  HOLDING_GROUND = 'Ground Holding',
  TAKE_OFF = 'Take Off',
  CLIMB = 'Climb',
  ENROUTE = 'En-route',
  DESCEND = 'Descend',
  HOLDING_AIR = 'Air Holding',
  TAXI_IN = 'Taxi In'
}

export interface EmissionResult {
  fuelSavedKg: number;
  co2SavedKg: number;
  baselineFuel: number;
  optimizedFuel: number;
  efficiencyPercent: number;
  usedCO2Factor: number; // To track which factor was used in result
  minSavedKg?: number; // For range-based Rule of Thumb
  maxSavedKg?: number; // For range-based Rule of Thumb
}

export interface InputData {
  flightsPerDay: number; // Changed from flightsPerYear
  fuelFactor: number; // kg/NM or kg/minute depending on context
  customCO2Factor?: number; // Allow overriding the 3.15 default
  
  // Merged Module Config
  procedureSubtype?: 'SID' | 'STAR' | 'IAP';
  ccoCdoSubtype?: 'CCO' | 'CDO'; // Added for CCO/CDO merge
  location?: string; // WIII, WAAA, etc.
  fixedFuelSaving?: number; // For IAP 2025 Document method
  
  // Flight Data Integration
  flightNumber?: string;
  aircraftType?: string;

  // Distance based (RNAV, RNP, IAP)
  distanceConventional?: number; // NM or KM
  distancePBN?: number; // NM or KM
  
  // Time/Phase based (SID, STAR, ASMGCS) - Detailed Calculation
  phaseTimeConventional?: number; // minutes
  phaseTimeOptimized?: number; // minutes
  
  // Level based
  fuelBurnSuboptimal?: number; // kg/flight
  fuelBurnOptimal?: number; // kg/flight
  
  // Rule of Thumb specific
  affectedAircraftPercentage?: number; // For calculations requiring % of movements (e.g. Wake Recat, AMAN)
  
  // Detailed Time Components for SID/STAR (KP 146 Detail)
  taxiOutTime?: number;
  groundHoldTime?: number;
  climbTime?: number;
  descendTime?: number;
  airHoldTime?: number;
  taxiInTime?: number;
}