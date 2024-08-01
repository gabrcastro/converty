import { EnergyFunctions } from "../../utils/functions/energy.functions";
import { describe, expect, it } from "vitest";

const functions = new EnergyFunctions();

describe("Power Functions", () => {
  it("joule", () => {
    const result = functions.jouleTo(1);
    expect(result.joule).toBe(1);
    expect(result.kilowattHour).toBe(2.77777777778e-7);
    expect(result.wattHour).toBe(0.000277777777778);
    expect(result.electronVolt).toBe(1000000000000000000);
  });

  it("kwh", () => {
    const result = functions.kwhTo(1);
    expect(result.joule).toBe(3600000);
    expect(result.kilowattHour).toBe(1);
    expect(result.wattHour).toBe(1000);
    expect(result.electronVolt).toBe(3.6e24);
  });

  it("kwh", () => {
    const result = functions.whTo(1);
    expect(result.joule).toBe(3600);
    expect(result.kilowattHour).toBe(0.001);
    expect(result.wattHour).toBe(1);
    expect(result.electronVolt).toBe(3.6e21);
  });

  it("ev", () => {
    const result = functions.evTo(1);
    expect(result.joule).toBe(1e-18);
    expect(result.kilowattHour).toBe(2.77777777778e-25);
    expect(result.wattHour).toBe(2.77777777778e-22);
    expect(result.electronVolt).toBe(1);
  });
});
