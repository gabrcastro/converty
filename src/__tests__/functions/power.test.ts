import { PowerFunctions } from "../../utils/functions/power.functions";
import { describe, expect, it } from "vitest";

const functions = new PowerFunctions();

describe("Power Functions", () => {
  it("giawatt (GW)", () => {
    const result = functions.GWTo(1);
    expect(result.gigawatt).toBe(1);
    expect(result.megawatt).toBe(1000);
    expect(result.kilowatt).toBe(1000000);
    expect(result.watt).toBe(1000000000);
    expect(result.milliwatt).toBe(1000000000000);
    expect(result.microwatt).toBe(1000000000000000);
    expect(result.nanowatt).toBe(1000000000000000000);
    expect(result.picowatt).toBe(1e21);
  });

  it("megawatt (MW)", () => {
    const result = functions.MWTo(1);
    expect(result.gigawatt).toBe(0.001);
    expect(result.megawatt).toBe(1);
    expect(result.kilowatt).toBe(1000);
    expect(result.watt).toBe(1000000);
    expect(result.milliwatt).toBe(1000000000);
    expect(result.microwatt).toBe(1000000000000);
    expect(result.nanowatt).toBe(1000000000000000);
    expect(result.picowatt).toBe(1000000000000000000);
  });

  it("kilowatt (kW)", () => {
    const result = functions.kWTo(1);
    expect(result.gigawatt).toBe(0.000001);
    expect(result.megawatt).toBe(0.001);
    expect(result.kilowatt).toBe(1);
    expect(result.watt).toBe(1000);
    expect(result.milliwatt).toBe(1000000);
    expect(result.microwatt).toBe(1000000000);
    expect(result.nanowatt).toBe(1000000000000);
    expect(result.picowatt).toBe(1000000000000000);
  });

  it("watt (W)", () => {
    const result = functions.WTo(1);
    expect(result.gigawatt).toBe(1e-9);
    expect(result.megawatt).toBe(0.000001);
    expect(result.kilowatt).toBe(0.001);
    expect(result.watt).toBe(1);
    expect(result.milliwatt).toBe(1000);
    expect(result.microwatt).toBe(1000000);
    expect(result.nanowatt).toBe(1000000000);
    expect(result.picowatt).toBe(1000000000000);
  });

  it("milliwatt (mW)", () => {
    const result = functions.mWTo(1);
    expect(result.gigawatt).toBe(1e-12);
    expect(result.megawatt).toBe(1e-9);
    expect(result.kilowatt).toBe(0.000001);
    expect(result.watt).toBe(0.001);
    expect(result.milliwatt).toBe(1);
    expect(result.microwatt).toBe(1000);
    expect(result.nanowatt).toBe(1000000);
    expect(result.picowatt).toBe(1000000000);
  });

  it("microwatt (µW)", () => {
    const result = functions.microWTo(1);
    expect(result.gigawatt).toBe(1e-15);
    expect(result.megawatt).toBe(1e-12);
    expect(result.kilowatt).toBe(1e-9);
    expect(result.watt).toBe(0.000001);
    expect(result.milliwatt).toBe(0.001);
    expect(result.microwatt).toBe(1);
    expect(result.nanowatt).toBe(1000);
    expect(result.picowatt).toBe(1000000);
  });

  it("nanowatt (nW)", () => {
    const result = functions.nWTo(1);
    expect(result.gigawatt).toBe(1e-18);
    expect(result.megawatt).toBe(1e-15);
    expect(result.kilowatt).toBe(1e-12);
    expect(result.watt).toBe(1e-9);
    expect(result.milliwatt).toBe(0.000001);
    expect(result.microwatt).toBe(0.001);
    expect(result.nanowatt).toBe(1);
    expect(result.picowatt).toBe(1000);
  });

  it("picowatt (pW)", () => {
    const result = functions.pWTo(1);
    expect(result.gigawatt).toBe(1e-21);
    expect(result.megawatt).toBe(1e-18);
    expect(result.kilowatt).toBe(1e-15);
    expect(result.watt).toBe(1e-12);
    expect(result.milliwatt).toBe(1e-9);
    expect(result.microwatt).toBe(0.000001);
    expect(result.nanowatt).toBe(0.001);
    expect(result.picowatt).toBe(1);
  });
});
