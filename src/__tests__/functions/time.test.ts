import { TimeFunctions } from "../../utils/functions/time.functions";
import { describe, expect, it } from "vitest";

const timeFunctions = new TimeFunctions();

describe("Time Functions", () => {
  it("year", () => {
    const result = timeFunctions.yearTo(1);
    expect(result.year).toBe(1);
    expect(result.month).toBe(12);
    expect(result.week).toBe(52.1785714286);
    expect(result.day).toBe(365.25);
    expect(result.hour).toBe(8766);
    expect(result.minute).toBeCloseTo(525960);
    expect(result.second).toBeCloseTo(31557600);
    expect(result.millisecond).toBeCloseTo(31557600000);
    expect(result.microsecond).toBeCloseTo(31557600000000);
  });

  it("month", () => {
    const result = timeFunctions.monthTo(1);
    expect(result.year).toBe(0.0833333333333);
    expect(result.month).toBe(1);
    expect(result.week).toBe(4.34821428571);
    expect(result.day).toBe(30.4375);
    expect(result.hour).toBe(730.5);
    expect(result.minute).toBeCloseTo(43830);
    expect(result.second).toBeCloseTo(2629800);
    expect(result.millisecond).toBeCloseTo(2629800000);
    expect(result.microsecond).toBeCloseTo(2629800000000);
  });

  it("week", () => {
    const result = timeFunctions.weekTo(1);
    expect(result.year).toBe(0.0191649555099);
    expect(result.month).toBe(0.229979466119);
    expect(result.week).toBe(1);
    expect(result.day).toBe(7);
    expect(result.hour).toBe(168);
    expect(result.minute).toBeCloseTo(10080);
    expect(result.second).toBeCloseTo(604800);
    expect(result.millisecond).toBeCloseTo(604800000);
    expect(result.microsecond).toBeCloseTo(604800000000);
  });

  it("day", () => {
    const result = timeFunctions.dayTo(1);
    expect(result.year).toBe(0.00273785078713);
    expect(result.month).toBe(0.0328542094456);
    expect(result.week).toBe(0.142857142857);
    expect(result.day).toBe(1);
    expect(result.hour).toBe(24);
    expect(result.minute).toBeCloseTo(1440);
    expect(result.second).toBeCloseTo(86400);
    expect(result.millisecond).toBeCloseTo(86400000);
    expect(result.microsecond).toBeCloseTo(86400000000);
  });

  it("hour", () => {
    const result = timeFunctions.hourTo(1);
    expect(result.year).toBe(0.000114077116131);
    expect(result.month).toBe(0.00136892539357);
    expect(result.week).toBe(0.00595238095238);
    expect(result.day).toBe(0.0416666666667);
    expect(result.hour).toBe(1);
    expect(result.minute).toBeCloseTo(60);
    expect(result.second).toBeCloseTo(3600);
    expect(result.millisecond).toBeCloseTo(3600000);
    expect(result.microsecond).toBeCloseTo(3600000000);
  });

  it("minute", () => {
    const result = timeFunctions.minuteTo(1);
    expect(result.year).toBe(0.00000190128526884);
    expect(result.month).toBe(0.0000228154232261);
    expect(result.week).toBe(0.0000992063492063);
    expect(result.day).toBe(0.000694444444444);
    expect(result.hour).toBe(0.0166666666667);
    expect(result.minute).toBeCloseTo(1);
    expect(result.second).toBeCloseTo(60);
    expect(result.millisecond).toBeCloseTo(60000);
    expect(result.microsecond).toBeCloseTo(60000000);
  });

  it("second", () => {
    const result = timeFunctions.secondTo(1);
    expect(result.year).toBe(3.1688087814e-8);
    expect(result.month).toBe(3.80257053768e-7);
    expect(result.week).toBe(0.00000165343915344);
    expect(result.day).toBe(0.0000115740740741);
    expect(result.hour).toBe(0.000277777777778);
    expect(result.minute).toBeCloseTo(0.0166666666667);
    expect(result.second).toBeCloseTo(1);
    expect(result.millisecond).toBeCloseTo(1000);
    expect(result.microsecond).toBeCloseTo(1000000);
  });

  it("millisecond", () => {
    const result = timeFunctions.millisecondTo(1);
    expect(result.year).toBe(3.1688087814e-11);
    expect(result.month).toBe(3.80257053768e-10);
    expect(result.week).toBe(1.65343915344e-9);
    expect(result.day).toBe(1.15740740741e-8);
    expect(result.hour).toBe(2.77777777778e-7);
    expect(result.minute).toBeCloseTo(0.0000166666666667);
    expect(result.second).toBeCloseTo(0.001); // value / 1000
    expect(result.millisecond).toBeCloseTo(1);
    expect(result.microsecond).toBeCloseTo(1000);
  });

  it("microsecond", () => {
    const result = timeFunctions.microsecondTo(1);
    expect(result.year).toBe(3.1688087814e-14);
    expect(result.month).toBe(3.80257053768e-13);
    expect(result.week).toBe(1.65343915344e-12);
    expect(result.day).toBe(1.15740740741e-11);
    expect(result.hour).toBe(2.77777777778e-10);
    expect(result.minute).toBeCloseTo(1.66666666667e-8);
    expect(result.second).toBeCloseTo(0.000001); // value / 1000000
    expect(result.millisecond).toBeCloseTo(0.001); // value / 1000
    expect(result.microsecond).toBeCloseTo(1);
  });
});
