import { MassFunctions } from "../../utils/functions/mass.functions";
import { describe, expect, it } from "vitest";

const massFunctions = new MassFunctions();

describe("Mass Functions", () => {
  it("ton working", () => {
    const result = massFunctions.tonTo(1);
    expect(result.ton).toBe(1);
    expect(result.kilogram).toBe(1000);
    expect(result.gram).toBe(1000000);
    expect(result.milligram).toBe(1000000000);
    expect(result.microgram).toBeCloseTo(1000000000000);
  });

  it("kilogram working", () => {
    const result = massFunctions.kilogramTo(1);
    expect(result.ton).toBe(0.001);
    expect(result.kilogram).toBe(1);
    expect(result.gram).toBe(1000);
    expect(result.milligram).toBe(1000000);
    expect(result.microgram).toBeCloseTo(1000000000);
  });

  it("gram working", () => {
    const result = massFunctions.gramTo(1);
    expect(result.ton).toBe(0.000001);
    expect(result.kilogram).toBe(0.001);
    expect(result.gram).toBe(1);
    expect(result.milligram).toBe(1000);
    expect(result.microgram).toBeCloseTo(1000000);
  });

  it("milligram working", () => {
    const result = massFunctions.milligramTo(1);
    expect(result.ton).toBe(1e-9);
    expect(result.kilogram).toBe(0.000001);
    expect(result.gram).toBe(0.001);
    expect(result.milligram).toBe(1);
    expect(result.microgram).toBeCloseTo(1000);
  });

  it("microgram working", () => {
    const result = massFunctions.microgramTo(1);
    expect(result.ton).toBe(1e-12);
    expect(result.kilogram).toBe(1e-9);
    expect(result.gram).toBe(0.000001);
    expect(result.milligram).toBe(0.001);
    expect(result.microgram).toBeCloseTo(1);
  });
});
