import { SpeedFunctions } from "../../utils/functions/speed.functions";
import { describe, expect, it } from "vitest";

const speedFunctions = new SpeedFunctions();

describe("Speed Functions", () => {
  it("m/s", () => {
    const result = speedFunctions.mPerSecond(1);
    expect(result.metersPerSecond).toBe(1);
    expect(result.kilometersPerHour).toBe(3.6);
    expect(result.kilometersPerSecond).toBe(0.001);
    expect(result.milesPerHour).toBe(2.236936);
    expect(result.feetPerSecond).toBe(3.28084);
    expect(result.knot).toBeCloseTo(1.943845);
    expect(result.speedOfLight).toBeCloseTo(3.33564095198e-9);
    expect(result.speedOfSound).toBeCloseTo(0.00291545189504);
  });

  it("km/h", () => {
    const result = speedFunctions.kmPerHour(1);
    expect(result.metersPerSecond).toBe(0.277777777778);
    expect(result.kilometersPerHour).toBe(1);
    expect(result.kilometersPerSecond).toBe(0.000277777777778);
    expect(result.milesPerHour).toBe(0.621371111111);
    expect(result.feetPerSecond).toBe(0.911344444444);
    expect(result.knot).toBeCloseTo(0.539956944444);
    expect(result.speedOfLight).toBeCloseTo(9.26566931106e-10);
    expect(result.speedOfSound).toBeCloseTo(0.000809847748623);
  });

  it("km/s", () => {
    const result = speedFunctions.kmPerSecond(1);
    expect(result.metersPerSecond).toBe(1000);
    expect(result.kilometersPerHour).toBe(3600);
    expect(result.kilometersPerSecond).toBe(1);
    expect(result.milesPerHour).toBe(2236.936);
    expect(result.feetPerSecond).toBe(3280.84);
    expect(result.knot).toBeCloseTo(1943.845);
    expect(result.speedOfLight).toBeCloseTo(0.00000333564095198);
    expect(result.speedOfSound).toBeCloseTo(2.91545189504);
  });

  it("mph", () => {
    const result = speedFunctions.miPerHour(1);
    expect(result.metersPerSecond).toBe(0.447040058366);
    expect(result.kilometersPerHour).toBe(1.60934421012);
    expect(result.kilometersPerSecond).toBe(0.000447040058366);
    expect(result.milesPerHour).toBe(1);
    expect(result.feetPerSecond).toBe(1.46666690509);
    expect(result.knot).toBeCloseTo(0.868976582254);
    expect(result.speedOfLight).toBeCloseTo(1.49116512586e-9);
    expect(result.speedOfSound).toBeCloseTo(0.00130332378532);
  });

  it("ft/s", () => {
    const result = speedFunctions.ftPerSecond(1);
    expect(result.metersPerSecond).toBe(0.304799990246);
    expect(result.kilometersPerHour).toBe(1.09727996489);
    expect(result.kilometersPerSecond).toBe(0.000304799990246);
    expect(result.milesPerHour).toBe(0.681818070982);
    expect(result.feetPerSecond).toBe(1);
    expect(result.knot).toBeCloseTo(0.592483937041);
    expect(result.speedOfLight).toBeCloseTo(1.01670332963e-9);
    expect(result.speedOfSound).toBeCloseTo(0.000888629709173);
  });

  it("kn", () => {
    const result = speedFunctions.knot(1);
    expect(result.metersPerSecond).toBe(0.514444310117);
    expect(result.kilometersPerHour).toBe(1.85199951642);
    expect(result.kilometersPerSecond).toBe(0.000514444310117);
    expect(result.milesPerHour).toBe(1.1507789973);
    expect(result.feetPerSecond).toBe(1.68780947041);
    expect(result.knot).toBeCloseTo(1);
    expect(result.speedOfLight).toBeCloseTo(1.71600150834e-9);
    expect(result.speedOfSound).toBeCloseTo(0.00149983763883);
  });

  it("C", () => {
    const result = speedFunctions.cSpeedLight(1);
    expect(result.metersPerSecond).toBe(299792458);
    expect(result.kilometersPerHour).toBe(1079252848.8);
    expect(result.kilometersPerSecond).toBe(299792.458);
    expect(result.milesPerHour).toBe(670616541.829);
    expect(result.feetPerSecond).toBe(983571087.905);
    expect(result.knot).toBeCloseTo(582750070.521);
    expect(result.speedOfLight).toBeCloseTo(1);
    expect(result.speedOfSound).toBeCloseTo(874030.489796);
  });

  it("match", () => {
    const result = speedFunctions.matchSpeedSound(1);
    expect(result.metersPerSecond).toBe(343);
    expect(result.kilometersPerHour).toBe(1234.8);
    expect(result.kilometersPerSecond).toBe(0.343);
    expect(result.milesPerHour).toBe(767.269048);
    expect(result.feetPerSecond).toBe(1125.32812);
    expect(result.knot).toBeCloseTo(666.738835);
    expect(result.speedOfLight).toBeCloseTo(0.00000114412484653);
    expect(result.speedOfSound).toBeCloseTo(1);
  });
});
