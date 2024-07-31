type SpeedResult = {
  metersPerSecond: number; // m/s
  kilometersPerHour: number; // km/h
  kilometersPerSecond: number; // km/s
  milesPerHour: number; // mph
  feetPerSecond: number; // ft/s
  knot: number; // kn (knots)
  speedOfLight: number; // c
  speedOfSound: number; // Mach
};

export class SpeedFunctions {
  mPerSecond(value: number): SpeedResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const metersPerSecond = value;
    const kilometersPerHour = value * 3.6;
    const kilometersPerSecond = value / 1000;
    const milesPerHour = value * 2.236936;
    const feetPerSecond = value * 3.28084;
    const knot = value * 1.943845;
    const speedOfLight = value * 3.33564095198e-9;
    const speedOfSound = value * 0.00291545189504;

    return {
      metersPerSecond,
      kilometersPerHour,
      kilometersPerSecond,
      milesPerHour,
      feetPerSecond,
      knot,
      speedOfLight,
      speedOfSound,
    };
  }

  kmPerHour(value: number): SpeedResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const metersPerSecond = value * 0.277777777778;
    const kilometersPerHour = value;
    const kilometersPerSecond = value * 0.000277777777778;
    const milesPerHour = value * 0.621371111111;
    const feetPerSecond = value * 0.911344444444;
    const knot = value * 0.539956944444;
    const speedOfLight = value * 9.26566931106e-10;
    const speedOfSound = value * 0.000809847748623;

    return {
      metersPerSecond,
      kilometersPerHour,
      kilometersPerSecond,
      milesPerHour,
      feetPerSecond,
      knot,
      speedOfLight,
      speedOfSound,
    };
  }

  kmPerSecond(value: number): SpeedResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const metersPerSecond = value * 1000;
    const kilometersPerHour = value * 3600;
    const kilometersPerSecond = value;
    const milesPerHour = value * 2236.936;
    const feetPerSecond = value * 3280.84;
    const knot = value * 1943.845;
    const speedOfLight = value * 0.00000333564095198;
    const speedOfSound = value * 2.91545189504;

    return {
      metersPerSecond,
      kilometersPerHour,
      kilometersPerSecond,
      milesPerHour,
      feetPerSecond,
      knot,
      speedOfLight,
      speedOfSound,
    };
  }

  miPerHour(value: number): SpeedResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const metersPerSecond = value * 0.447040058366;
    const kilometersPerHour = value * 1.60934421012;
    const kilometersPerSecond = value * 0.000447040058366;
    const milesPerHour = value;
    const feetPerSecond = value * 1.46666690509;
    const knot = value * 0.868976582254;
    const speedOfLight = value * 1.49116512586e-9;
    const speedOfSound = value * 0.00130332378532;

    return {
      metersPerSecond,
      kilometersPerHour,
      kilometersPerSecond,
      milesPerHour,
      feetPerSecond,
      knot,
      speedOfLight,
      speedOfSound,
    };
  }

  ftPerSecond(value: number): SpeedResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const metersPerSecond = value * 0.304799990246;
    const kilometersPerHour = value * 1.09727996489;
    const kilometersPerSecond = value * 0.000304799990246;
    const milesPerHour = value * 0.681818070982;
    const feetPerSecond = value;
    const knot = value * 0.592483937041;
    const speedOfLight = value * 1.01670332963e-9;
    const speedOfSound = value * 0.000888629709173;

    return {
      metersPerSecond,
      kilometersPerHour,
      kilometersPerSecond,
      milesPerHour,
      feetPerSecond,
      knot,
      speedOfLight,
      speedOfSound,
    };
  }

  knot(value: number): SpeedResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const metersPerSecond = value * 0.514444310117;
    const kilometersPerHour = value * 1.85199951642;
    const kilometersPerSecond = value * 0.000514444310117;
    const milesPerHour = value * 1.1507789973;
    const feetPerSecond = value * 1.68780947041;
    const knot = value;
    const speedOfLight = value * 1.71600150834e-9;
    const speedOfSound = value * 0.00149983763883;

    return {
      metersPerSecond,
      kilometersPerHour,
      kilometersPerSecond,
      milesPerHour,
      feetPerSecond,
      knot,
      speedOfLight,
      speedOfSound,
    };
  }

  cSpeedLight(value: number): SpeedResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const metersPerSecond = value * 299792458;
    const kilometersPerHour = value * 1079252848.8;
    const kilometersPerSecond = value * 299792.458;
    const milesPerHour = value * 670616541.829;
    const feetPerSecond = value * 983571087.905;
    const knot = value * 582750070.521;
    const speedOfLight = value;
    const speedOfSound = value * 874030.489796;

    return {
      metersPerSecond,
      kilometersPerHour,
      kilometersPerSecond,
      milesPerHour,
      feetPerSecond,
      knot,
      speedOfLight,
      speedOfSound,
    };
  }

  matchSpeedSound(value: number): SpeedResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const metersPerSecond = value * 343;
    const kilometersPerHour = value * 1234.8;
    const kilometersPerSecond = value * 0.343;
    const milesPerHour = value * 767.269048;
    const feetPerSecond = value * 1125.32812;
    const knot = value * 666.738835;
    const speedOfLight = value * 0.00000114412484653;
    const speedOfSound = value;

    return {
      metersPerSecond,
      kilometersPerHour,
      kilometersPerSecond,
      milesPerHour,
      feetPerSecond,
      knot,
      speedOfLight,
      speedOfSound,
    };
  }
}
