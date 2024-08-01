type PowerResult = {
  gigawatt: number;
  megawatt: number;
  kilowatt: number;
  watt: number;
  milliwatt: number;
  microwatt: number;
  nanowatt: number;
  picowatt: number;
};

export class PowerFunctions {
  GWTo(value: number): PowerResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      gigawatt: value,
      megawatt: value * 1000,
      kilowatt: value * 1000000,
      watt: value * 1000000000,
      milliwatt: value * 1000000000000,
      microwatt: value * 1000000000000000,
      nanowatt: value * 1000000000000000000,
      picowatt: value * 1e21,
    };
  }

  MWTo(value: number): PowerResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      gigawatt: value / 1000,
      megawatt: value,
      kilowatt: value * 1000,
      watt: value * 1000000,
      milliwatt: value * 1000000000,
      microwatt: value * 1000000000000,
      nanowatt: value * 1000000000000000,
      picowatt: value * 1000000000000000000,
    };
  }

  kWTo(value: number): PowerResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      gigawatt: value / 1000000,
      megawatt: value / 1000,
      kilowatt: value,
      watt: value * 1000,
      milliwatt: value * 1000000,
      microwatt: value * 1000000000,
      nanowatt: value * 1000000000000,
      picowatt: value * 1000000000000000,
    };
  }

  WTo(value: number): PowerResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      gigawatt: value * 1e-9,
      megawatt: value / 1000000,
      kilowatt: value / 1000,
      watt: value,
      milliwatt: value * 1000,
      microwatt: value * 1000000,
      nanowatt: value * 1000000000,
      picowatt: value * 1000000000000,
    };
  }

  mWTo(value: number): PowerResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      gigawatt: value / 1000000000000,
      megawatt: value * 1e-9,
      kilowatt: value / 1000000,
      watt: value / 1000,
      milliwatt: value,
      microwatt: value * 1000,
      nanowatt: value * 1000000,
      picowatt: value * 1000000000,
    };
  }

  microWTo(value: number): PowerResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      gigawatt: value * 1e-15,
      megawatt: value / 1000000000000,
      kilowatt: value * 1e-9,
      watt: value / 1000000,
      milliwatt: value / 1000,
      microwatt: value,
      nanowatt: value * 1000,
      picowatt: value * 1000000,
    };
  }

  nWTo(value: number): PowerResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      gigawatt: value / 999999999999999900,
      megawatt: value * 1e-15,
      kilowatt: value / 1000000000000,
      watt: value * 1e-9,
      milliwatt: value / 1000000,
      microwatt: value / 1000,
      nanowatt: value,
      picowatt: value * 1000,
    };
  }

  pWTo(value: number): PowerResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      gigawatt: value / 1.0000000000000001e21,
      megawatt: value / 999999999999999900,
      kilowatt: value * 1e-15,
      watt: value / 1000000000000,
      milliwatt: value * 1e-9,
      microwatt: value / 1000000,
      nanowatt: value / 1000,
      picowatt: value,
    };
  }
}
