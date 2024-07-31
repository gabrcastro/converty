type CapacityResult = {
  kiloliter: number;
  hectoliter: number;
  decaliter: number;
  liter: number;
  deciliter: number;
  centiliter: number;
  milliliter: number;
};

export class CapacityFunctions {
  kiloliterTo(value: number): CapacityResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const hectoliter = value * 10;
    const decaliter = value * 100;
    const liter = value * 1000;
    const deciliter = value * 10000;
    const centiliter = value * 100000;
    const milliliter = value * 1000000;

    return {
      kiloliter: value,
      hectoliter,
      decaliter,
      liter,
      deciliter,
      centiliter,
      milliliter,
    };
  }

  hectoliterTo(value: number): CapacityResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kiloliter = value / 10;
    const decaliter = value * 10;
    const liter = value * 100;
    const deciliter = value * 1000;
    const centiliter = value * 10000;
    const milliliter = value * 100000;

    return {
      kiloliter,
      hectoliter: value,
      decaliter,
      liter,
      deciliter,
      centiliter,
      milliliter,
    };
  }

  decaliterTo(value: number): CapacityResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kiloliter = value / 100;
    const hectoliter = value / 10;
    const liter = value * 10;
    const deciliter = value * 100;
    const centiliter = value * 1000;
    const milliliter = value * 10000;

    return {
      kiloliter,
      hectoliter,
      decaliter: value,
      liter,
      deciliter,
      centiliter,
      milliliter,
    };
  }

  literTo(value: number): CapacityResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kiloliter = value / 1000;
    const hectoliter = value / 100;
    const decaliter = value / 10;
    const deciliter = value * 10;
    const centiliter = value * 100;
    const milliliter = value * 1000;

    return {
      kiloliter,
      hectoliter,
      decaliter,
      liter: value,
      deciliter,
      centiliter,
      milliliter,
    };
  }

  deciliterTo(value: number): CapacityResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kiloliter = value / 10000;
    const hectoliter = value / 1000;
    const decaliter = value / 100;
    const liter = value / 10;
    const centiliter = value * 10;
    const milliliter = value * 100;

    return {
      kiloliter,
      hectoliter,
      decaliter,
      liter,
      deciliter: value,
      centiliter,
      milliliter,
    };
  }

  centiliterTo(value: number): CapacityResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kiloliter = value / 100000;
    const hectoliter = value / 10000;
    const decaliter = value / 1000;
    const liter = value / 100;
    const deciliter = value / 10;
    const milliliter = value * 10;

    return {
      kiloliter,
      hectoliter,
      decaliter,
      liter,
      deciliter,
      centiliter: value,
      milliliter,
    };
  }

  mililitroTo(value: number): CapacityResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const kiloliter = value / 1000000;
    const hectoliter = value / 100000;
    const decaliter = value / 10000;
    const liter = value / 1000;
    const deciliter = value / 100;
    const centiliter = value / 10;

    return {
      kiloliter,
      hectoliter,
      decaliter,
      liter,
      deciliter,
      centiliter,
      milliliter: value,
    };
  }
}
