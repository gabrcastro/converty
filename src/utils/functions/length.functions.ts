type LengthResult = {
  kilometer: number;
  meter: number;
  centimeter: number;
  decimeter: number;
  millimeter: number;

  mile: number;
  inch: number;
  feet: number;
  yard: number;

  decameter: number;
  micron: number;
  nanometer: number;
  hectometer: number;
  // fentometros: number;
};

export class LengthFuntions {
  kilometerTo(value: number): LengthResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const meter = value * 1000;
    const centimeter = value * 100000;
    const decimeter = value * 10000;
    const millimeter = value * 1000000;

    const decameter = value * 100;
    const nanometer = value * 1000000000000;
    const micron = value * 1000000000;
    const hectometer = value * 10;

    const mile = value * 0.6213712;
    const inch = value * 39370.08;
    const feet = value * 3280.84;
    const yard = value * 1093.613;

    return {
      kilometer: value,
      meter,
      centimeter,
      decimeter,
      millimeter,
      decameter,
      nanometer,
      hectometer,
      micron,
      mile,
      inch,
      feet,
      yard,
    };
  }

  meterTo(value: number): LengthResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kilometer = value / 1000;
    const centimeter = value * 100;
    const decimeter = value * 10;
    const millimeter = value * 1000;

    const decameter = value / 10;
    const nanometer = value * 1000000000;
    const micron = value * 1000000;
    const hectometer = value / 100;

    const mile = value * 0.000621371192237;
    const inch = value * 39.3700787402;
    const feet = value * 3.28083989501;
    const yard = value * 1.09361329834;

    return {
      kilometer,
      meter: value,
      centimeter,
      decimeter,
      millimeter,
      decameter,
      nanometer,
      hectometer,
      micron,
      mile,
      inch,
      feet,
      yard,
    };
  }

  centimerterTo(value: number): LengthResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kilometer = value * 0.00001;
    const meter = value / 100;
    const decimeter = value / 10;
    const millimeter = value * 10;

    const decameter = value / 1000;
    const nanometer = value * 10000000;
    const micron = value * 10000;
    const hectometer = value / 10000;

    const mile = value * 0.00000621371192237;
    const inch = value * 0.393700787402;
    const feet = value * 0.0328083989501;
    const yard = value * 0.0109361329834;

    return {
      kilometer,
      meter,
      centimeter: value,
      decimeter,
      millimeter,
      decameter,
      nanometer,
      hectometer,
      micron,
      mile,
      inch,
      feet,
      yard,
    };
  }

  decimeterTo(value: number): LengthResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kilometer = value / 10000;
    const meter = value / 10;
    const centimeter = value * 10;
    const millimeter = value * 100;

    const decameter = value / 100;
    const nanometer = value * 100000000;
    const micron = value * 100000;
    const hectometer = value / 1000;

    const mile = value * 0.0000621371192237;
    const inch = value * 3.93700787402;
    const feet = value * 0.328083989501;
    const yard = value * 0.109361329834;

    return {
      kilometer,
      meter,
      centimeter,
      decimeter: value,
      millimeter,
      decameter,
      nanometer,
      hectometer,
      micron,
      mile,
      inch,
      feet,
      yard,
    };
  }

  milimeterTo(value: number): LengthResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kilometer = value / 1000000;
    const meter = value / 1000;
    const centimeter = value / 10;
    const decimeter = value / 100;

    const decameter = value / 10000;
    const nanometer = value * 1000000;
    const micron = value * 1000;
    const hectometer = value * 0.00001;

    const mile = value * 6.21371192237e-7;
    const inch = value * 0.0393700787402;
    const feet = value * 0.00328083989501;
    const yard = value * 0.00109361329834;

    return {
      kilometer,
      meter,
      centimeter,
      millimeter: value,
      decimeter,
      decameter,
      nanometer,
      micron,
      hectometer,
      mile,
      inch,
      feet,
      yard,
    };
  }

  decameterTo(value: number): LengthResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kilometer = value / 100;
    const meter = value * 10;
    const centimeter = value * 1000;
    const decimeter = value * 100;
    const millimeter = value * 10000;

    const nanometer = value * 10000000000;
    const micron = value * 10000000;
    const hectometer = value / 10;

    const mile = value * 0.00621371192237;
    const inch = value * 393.700787402;
    const feet = value * 32.8083989501;
    const yard = value * 10.9361329834;

    return {
      kilometer,
      meter,
      centimeter,
      millimeter,
      decimeter,
      decameter: value,
      nanometer,
      micron,
      hectometer,
      mile,
      inch,
      feet,
      yard,
    };
  }

  nanometerTo(value: number): LengthResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kilometer = value / 1000000000000;
    const meter = value * 1e-9;
    const centimeter = value / 10000000;
    const decimeter = value / 100000000;
    const millimeter = value / 1000000;

    const decameter = value / 10000000000;
    const micron = value / 1000;
    const hectometer = value / 100000000000;

    const mile = value * 6.21371192237e-13;
    const inch = value * 3.93700787402e-8;
    const feet = value * 3.28083989501e-9;
    const yard = value * 1.09361329834e-9;

    return {
      kilometer,
      meter,
      centimeter,
      millimeter,
      decimeter,
      decameter,
      nanometer: value,
      micron,
      hectometer,
      mile,
      inch,
      feet,
      yard,
    };
  }

  micronTo(value: number): LengthResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kilometer = value * 1e-9;
    const meter = value / 1000000;
    const centimeter = value / 10000;
    const decimeter = value * 0.00001;
    const millimeter = value / 1000;

    const decameter = value / 10000000;
    const nanometer = value * 1000;
    const hectometer = value / 100000000;

    const mile = value * 6.21371192237e-10;
    const inch = value * 0.0000393700787402;
    const feet = value * 0.00000328083989501;
    const yard = value * 0.00000109361329834;

    return {
      kilometer,
      meter,
      centimeter,
      millimeter,
      decimeter,
      decameter,
      nanometer,
      micron: value,
      hectometer,
      mile,
      inch,
      feet,
      yard,
    };
  }

  hectometerTo(value: number): LengthResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kilometer = value / 10;
    const meter = value * 100;
    const centimeter = value * 10000;
    const decimeter = value * 1000;
    const millimeter = value * 100000;

    const decameter = value * 10;
    const nanometer = value * 100000000000;
    const micron = value * 100000000;

    const mile = value * 0.0621371192237;
    const inch = value * 3937.00787402;
    const feet = value * 328.083989501;
    const yard = value * 109.361329834;

    return {
      kilometer,
      meter,
      centimeter,
      millimeter,
      decimeter,
      decameter,
      nanometer,
      micron,
      hectometer: value,
      mile,
      inch,
      feet,
      yard,
    };
  }

  mileTo(value: number): LengthResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kilometer = value * 1.609344;
    const meter = value * 1609.344;
    const centimeter = value * 160934.4;
    const decimeter = value * 16093.44;
    const millimeter = value * 1609344;

    const decameter = value * 160.9344;
    const nanometer = value * 1609344000000;
    const micron = value * 1609344000;
    const hectometer = value * 16.09344;

    const inch = value * 63360;
    const feet = value * 5280;
    const yard = value * 1760;

    return {
      kilometer,
      meter,
      centimeter,
      millimeter,
      decimeter,
      decameter,
      nanometer,
      micron,
      hectometer,
      mile: value,
      inch,
      feet,
      yard,
    };
  }

  inchTo(value: number): LengthResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kilometer = value * 0.0000254;
    const meter = value * 0.0254;
    const centimeter = value * 2.54;
    const decimeter = value * 0.254;
    const millimeter = value * 25.4;

    const decameter = value * 0.00254;
    const nanometer = value * 25400000;
    const micron = value * 25400;
    const hectometer = value * 0.000254;

    const mile = value * 0.0000157828282828;
    const feet = value * 0.0833333333333;
    const yard = value * 0.0277777777778;

    return {
      kilometer,
      meter,
      centimeter,
      millimeter,
      decimeter,
      decameter,
      nanometer,
      micron,
      hectometer,
      inch: value,
      mile,
      feet,
      yard,
    };
  }

  feetTo(value: number): LengthResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kilometer = value * 0.0003048;
    const meter = value * 0.3048;
    const centimeter = value * 30.48;
    const decimeter = value * 3.048;
    const millimeter = value * 304.8;

    const decameter = value * 0.03048;
    const nanometer = value * 304800000;
    const micron = value * 304800;
    const hectometer = value * 0.003048;

    const mile = value * 0.000189393939394;
    const inch = value * 12;
    const yard = value * 0.333333333333;

    return {
      kilometer,
      meter,
      centimeter,
      millimeter,
      decimeter,
      decameter,
      nanometer,
      micron,
      hectometer,
      inch,
      mile,
      feet: value,
      yard,
    };
  }

  yardTo(value: number): LengthResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kilometer = value * 0.0009144;
    const meter = value * 0.9144;
    const centimeter = value * 91.44;
    const decimeter = value * 9.144;
    const millimeter = value * 914.4;

    const decameter = value * 0.09144;
    const nanometer = value * 914400000;
    const micron = value * 914400;
    const hectometer = value * 0.009144;

    const mile = value * 0.000568181818182;
    const feet = value * 3;
    const inch = value * 36;

    return {
      kilometer,
      meter,
      centimeter,
      millimeter,
      decimeter,
      decameter,
      nanometer,
      micron,
      hectometer,
      inch,
      mile,
      feet,
      yard: value,
    };
  }
}
