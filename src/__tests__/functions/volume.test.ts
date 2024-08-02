import { VolumeFunctions } from "../../utils/functions/volume.functions";
import { describe, expect, it } from "vitest";

const functions = new VolumeFunctions();

describe("Capacity Functions", () => {
  it("kiloliter working", () => {
    const result = functions.kiloliterTo(0.001);
    expect(result.kiloliter).toBe(0.001);

    expect(result.hectoliter).toBe(0.01);
    expect(result.decaliter).toBe(0.1);
    expect(result.liter).toBe(1);
    expect(result.deciliter).toBe(10);
    expect(result.centiliter).toBeCloseTo(100);
    expect(result.milliliter).toBeCloseTo(1000);
  });

  it("hectoliter working", () => {
    const result = functions.hectoliterTo(0.01);
    expect(result.hectoliter).toBe(0.01);

    expect(result.kiloliter).toBe(0.001);
    expect(result.decaliter).toBe(0.1);
    expect(result.liter).toBe(1);
    expect(result.deciliter).toBe(10);
    expect(result.centiliter).toBeCloseTo(100);
    expect(result.milliliter).toBeCloseTo(1000);
  });

  it("decaliter working", () => {
    const result = functions.decaliterTo(0.1);
    expect(result.decaliter).toBe(0.1);

    expect(result.kiloliter).toBe(0.001);
    expect(result.hectoliter).toBe(0.01);
    expect(result.liter).toBe(1);
    expect(result.deciliter).toBe(10);
    expect(result.centiliter).toBeCloseTo(100);
    expect(result.milliliter).toBeCloseTo(1000);
  });

  it("liter working", () => {
    const result = functions.literTo(1);
    expect(result.liter).toBe(1);

    expect(result.kiloliter).toBe(0.001);
    expect(result.hectoliter).toBe(0.01);
    expect(result.decaliter).toBe(0.1);
    expect(result.deciliter).toBe(10);
    expect(result.centiliter).toBeCloseTo(100);
    expect(result.milliliter).toBeCloseTo(1000);
  });

  it("deciliter working", () => {
    const result = functions.deciliterTo(10);
    expect(result.deciliter).toBe(10);

    expect(result.kiloliter).toBe(0.001);
    expect(result.hectoliter).toBe(0.01);
    expect(result.decaliter).toBe(0.1);
    expect(result.liter).toBe(1);
    expect(result.centiliter).toBeCloseTo(100);
    expect(result.milliliter).toBeCloseTo(1000);
  });

  it("centiliter working", () => {
    const result = functions.centiliterTo(100);
    expect(result.centiliter).toBe(100);

    expect(result.kiloliter).toBe(0.001);
    expect(result.hectoliter).toBe(0.01);
    expect(result.decaliter).toBe(0.1);
    expect(result.liter).toBe(1);
    expect(result.deciliter).toBeCloseTo(10);
    expect(result.milliliter).toBeCloseTo(1000);
  });

  it("mililiter working", () => {
    const result = functions.mililitroTo(1000);
    expect(result.milliliter).toBe(1000);

    expect(result.kiloliter).toBe(0.001);
    expect(result.hectoliter).toBe(0.01);
    expect(result.decaliter).toBe(0.1);
    expect(result.liter).toBe(1);
    expect(result.deciliter).toBeCloseTo(10);
    expect(result.centiliter).toBeCloseTo(100);
  });
});
