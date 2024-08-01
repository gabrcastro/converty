type EnergyResult = {
  joule: number;
  kilowattHour: number;
  wattHour: number;
  electronVolt: number;
};

export class EnergyFunctions {
  jouleTo(value: number): EnergyResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const joule = value;
    const kilowattHour = value * 2.77777777778e-7;
    const wattHour = value * 0.000277777777778;
    const electronVolt = value * 1000000000000000000;

    return {
      joule,
      kilowattHour,
      wattHour,
      electronVolt,
    };
  }

  kwhTo(value: number): EnergyResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const joule = value * 3600000;
    const kilowattHour = value;
    const wattHour = value * 1000;
    const electronVolt = value * 3.6e24;

    return {
      joule,
      kilowattHour,
      wattHour,
      electronVolt,
    };
  }

  whTo(value: number): EnergyResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const joule = value * 3600;
    const kilowattHour = value / 1000;
    const wattHour = value;
    const electronVolt = value * 3.6e21;

    return {
      joule,
      kilowattHour,
      wattHour,
      electronVolt,
    };
  }

  evTo(value: number): EnergyResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const joule = value / 999999999999999900;
    const kilowattHour = value / 3.59999999999712e24;
    const wattHour = value / 3.59999999999712e21;
    const electronVolt = value;

    return {
      joule,
      kilowattHour,
      wattHour,
      electronVolt,
    };
  }
}
