type DensityResult = {
  kilogramPerMeter3: number;
  gramPerCentimeter3: number;
  librePerInch3: number;
};

export class DensityFunctions {
  km3To(value: number): DensityResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      kilogramPerMeter3: value,
      gramPerCentimeter3: value / 1000,
      librePerInch3: value * 0.0000361272850959,
    };
  }

  gcm3To(value: number): DensityResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      kilogramPerMeter3: value * 1000,
      gramPerCentimeter3: value,
      librePerInch3: value * 0.0361272850959,
    };
  }

  lin3To(value: number): DensityResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    return {
      kilogramPerMeter3: value * 27679.91,
      gramPerCentimeter3: value * 27.67991,
      librePerInch3: value,
    };
  }
}
