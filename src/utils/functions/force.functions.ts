type ForceResult = {
  newton: number;
  kilogramForce: number;
  kip: number;
  libreForce: number;
  poundal: number;
};

export class ForceFunctions {
  newtonTo(value: number): ForceResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      newton: value,
      kilogramForce: value * 0.101971621298,
      kip: value * 0.000224808923655,
      libreForce: value * 2.20462247604,
      poundal: value * 7.23301146432,
    };
  }

  kgfTo(value: number): ForceResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      newton: value * 9.80665,
      kilogramForce: value,
      kip: value * 0.00220462243116,
      libreForce: value * 21.6199610046,
      poundal: value * 70.9316118766,
    };
  }

  kipTo(value: number): ForceResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      newton: value * 4448.222,
      kilogramForce: value * 453.592409233,
      kip: value,
      libreForce: value * 9806.65019961,
      poundal: value * 32174.0407219,
    };
  }

  lbfTo(value: number): ForceResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      newton: value * 0.4535924,
      kilogramForce: value * 0.0462535524364,
      kip: value * 0.000101971619222,
      libreForce: value,
      poundal: value * 3.28083902933,
    };
  }

  pdlTo(value: number): ForceResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      newton: value * 0.138255,
      kilogramForce: value * 0.0140980865025,
      kip: value * 0.00003108095774,
      libreForce: value * 0.304800080425,
      poundal: value,
    };
  }
}
