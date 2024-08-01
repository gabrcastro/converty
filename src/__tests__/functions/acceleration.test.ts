import { AccelerationFunctions } from "../../utils/functions/acceleration.functions";
import { describe, expect, it } from "vitest";

const functions = new AccelerationFunctions();

describe("Acceleration Functions", () => {
  it("m/s²", () => {
    const result = functions.mPerSecond2To(1);
    expect(result.meterPerSecond2).toBe(1);
    expect(result.footPerSecond2).toBe(3.28083989501);
    expect(result.gravity).toBe(0.101971621298);
    expect(result.galileo).toBe(100);
    expect(result.inchPerSecond2).toBe(39.3700787402);
  });

  it("ft/s²", () => {
    const result = functions.footPerSecond2To(1);
    expect(result.meterPerSecond2).toBe(0.3048);
    expect(result.footPerSecond2).toBe(1);
    expect(result.gravity).toBe(0.0310809501716);
    expect(result.galileo).toBe(30.48);
    expect(result.inchPerSecond2).toBe(12);
  });

  it("G", () => {
    const result = functions.gravityTo(1);
    expect(result.meterPerSecond2).toBe(9.80665);
    expect(result.footPerSecond2).toBe(32.1740485564);
    expect(result.gravity).toBe(1);
    expect(result.galileo).toBe(980.665);
    expect(result.inchPerSecond2).toBe(386.088582677);
  });

  it("gal", () => {
    const result = functions.galTo(1);
    expect(result.meterPerSecond2).toBe(0.01);
    expect(result.footPerSecond2).toBe(0.0328083989501);
    expect(result.gravity).toBe(0.00101971621298);
    expect(result.galileo).toBe(1);
    expect(result.inchPerSecond2).toBe(0.393700787402);
  });

  it("in/s²", () => {
    const result = functions.inchPerSecond2To(1);
    expect(result.meterPerSecond2).toBe(0.0254);
    expect(result.footPerSecond2).toBe(0.0833333333333);
    expect(result.gravity).toBe(0.00259007918096);
    expect(result.galileo).toBe(2.54);
    expect(result.inchPerSecond2).toBe(1);
  });
});
