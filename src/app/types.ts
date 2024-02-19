export interface location_type {
  name: string;
  country: string;
  lat: number;
  long: number;
  data: locationData_type;
}

export interface locationData_type {
  timezone: string | null;
  timezoneAbbreviation: string | null;
  time: Date[];
  temperature: Float32Array;
  rain: Float32Array;
  code: Float32Array;
  windSpeed: Float32Array;
  windGusts: Float32Array;
  windDirection: Float32Array;
}
