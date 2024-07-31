type MassResult = {
  ton: number;
  kilogram: number;
  gram: number;
  milligram: number;
  microgram: number;
};

export class MassFunctions {
  tonTo(value: number): MassResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const ton = value;
    const kilogram = value * 1000;
    const gram = value * 1000000;
    const milligram = value * 1000000000;
    const microgram = value * 1000000000000;

    return {
      ton,
      kilogram,
      gram,
      milligram,
      microgram,
    };
  }

  kilogramTo(value: number): MassResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const ton = value / 1000;
    const kilogram = value;
    const gram = value * 1000;
    const milligram = value * 1000000;
    const microgram = value * 1000000000;

    return {
      ton,
      kilogram,
      gram,
      milligram,
      microgram,
    };
  }

  gramTo(value: number): MassResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const ton = value / 1000000;
    const kilogram = value / 1000;
    const gram = value;
    const milligram = value * 1000;
    const microgram = value * 1000000;

    return {
      ton,
      kilogram,
      gram,
      milligram,
      microgram,
    };
  }

  milligramTo(value: number): MassResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const ton = value * 1e-9;
    const kilogram = value / 1000000;
    const gram = value / 1000;
    const milligram = value;
    const microgram = value * 1000;

    return {
      ton,
      kilogram,
      gram,
      milligram,
      microgram,
    };
  }

  microgramTo(value: number): MassResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const ton = value / 1000000000000;
    const kilogram = value * 1e-9;
    const gram = value / 1000000;
    const milligram = value / 1000;
    const microgram = value;

    return {
      ton,
      kilogram,
      gram,
      milligram,
      microgram,
    };
  }
}
