import { DensityFunctions } from "../../utils/functions/density.functions";
import { describe, expect, it } from "vitest";

const functions = new DensityFunctions();

describe("Density Functions", () => {
  it("kg/m³", () => {
    const result = functions.km3To(1);
    expect(result.kilogramPerMeter3).toBe(1);
    expect(result.gramPerCentimeter3).toBe(0.001);
    expect(result.librePerInch3).toBe(0.0000361272850959);
  });

  it("g/cm³", () => {
    const result = functions.gcm3To(1);
    expect(result.kilogramPerMeter3).toBe(1000);
    expect(result.gramPerCentimeter3).toBe(1);
    expect(result.librePerInch3).toBe(0.0361272850959);
  });

  it("libre/inch³", () => {
    const result = functions.lin3To(1);
    expect(result.kilogramPerMeter3).toBe(27679.91);
    expect(result.gramPerCentimeter3).toBe(27.67991);
    expect(result.librePerInch3).toBe(1);
  });
});
