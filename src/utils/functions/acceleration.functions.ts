export type AccelerationResult = {
  meterPerSecond2: number;
  footPerSecond2: number;
  gravity: number;
  galileo: number;
  inchPerSecond2: number;
};

export class AccelerationFunctions {
  mPerSecond2To(value: number): AccelerationResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      meterPerSecond2: value,
      footPerSecond2: value * 3.28083989501,
      gravity: value * 0.101971621298,
      galileo: value * 100,
      inchPerSecond2: value * 39.3700787402,
    };
  }

  footPerSecond2To(value: number): AccelerationResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      meterPerSecond2: value * 0.3048,
      footPerSecond2: value,
      gravity: value * 0.0310809501716,
      galileo: value * 30.48,
      inchPerSecond2: value * 12,
    };
  }

  gravityTo(value: number): AccelerationResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      meterPerSecond2: value * 9.80665,
      footPerSecond2: value * 32.1740485564,
      gravity: value,
      galileo: value * 980.665,
      inchPerSecond2: value * 386.088582677,
    };
  }

  galTo(value: number): AccelerationResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      meterPerSecond2: value / 100,
      footPerSecond2: value * 0.0328083989501,
      gravity: value * 0.00101971621298,
      galileo: value,
      inchPerSecond2: value * 0.393700787402,
    };
  }
  inchPerSecond2To(value: number): AccelerationResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      meterPerSecond2: value * 0.0254,
      footPerSecond2: value * 0.0833333333333,
      gravity: value * 0.00259007918096,
      galileo: value * 2.54,
      inchPerSecond2: value,
    };
  }
}
