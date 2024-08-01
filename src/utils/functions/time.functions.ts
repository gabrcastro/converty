type TimeResult = {
  year: number;
  month: number;
  week: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
  microsecond: number;
};

export class TimeFunctions {
  yearTo(value: number): TimeResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const year = value;
    const month = value * 12;
    const week = value * 52.1785714286;
    const day = value * 365.25;
    const hour = value * 8766;
    const minute = value * 525960;
    const second = value * 31557600;
    const millisecond = value * 31557600000;
    const microsecond = value * 31557600000000;

    return {
      year,
      month,
      week,
      day,
      hour,
      minute,
      second,
      millisecond,
      microsecond,
    };
  }

  monthTo(value: number): TimeResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const year = value * 0.0833333333333;
    const month = value;
    const week = value * 4.34821428571;
    const day = value * 30.4375;
    const hour = value * 730.5;
    const minute = value * 43830;
    const second = value * 2629800;
    const millisecond = value * 2629800000;
    const microsecond = value * 2629800000000;

    return {
      year,
      month,
      week,
      day,
      hour,
      minute,
      second,
      millisecond,
      microsecond,
    };
  }

  weekTo(value: number): TimeResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const year = value * 0.0191649555099;
    const month = value * 0.229979466119;
    const week = value;
    const day = value * 7;
    const hour = value * 168;
    const minute = value * 10080;
    const second = value * 604800;
    const millisecond = value * 604800000;
    const microsecond = value * 604800000000;

    return {
      year,
      month,
      week,
      day,
      hour,
      minute,
      second,
      millisecond,
      microsecond,
    };
  }

  dayTo(value: number): TimeResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const year = value * 0.00273785078713;
    const month = value * 0.0328542094456;
    const week = value * 0.142857142857;
    const day = value;
    const hour = value * 24;
    const minute = value * 1440;
    const second = value * 86400;
    const millisecond = value * 86400000;
    const microsecond = value * 86400000000;

    return {
      year,
      month,
      week,
      day,
      hour,
      minute,
      second,
      millisecond,
      microsecond,
    };
  }

  hourTo(value: number): TimeResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const year = value * 0.000114077116131;
    const month = value * 0.00136892539357;
    const week = value * 0.00595238095238;
    const day = value * 0.0416666666667;
    const hour = value;
    const minute = value * 60;
    const second = value * 3600;
    const millisecond = value * 3600000;
    const microsecond = value * 3600000000;

    return {
      year,
      month,
      week,
      day,
      hour,
      minute,
      second,
      millisecond,
      microsecond,
    };
  }

  minuteTo(value: number): TimeResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const year = value * 0.00000190128526884;
    const month = value * 0.0000228154232261;
    const week = value * 0.0000992063492063;
    const day = value * 0.000694444444444;
    const hour = value * 0.0166666666667;
    const minute = value;
    const second = value * 60;
    const millisecond = value * 60000;
    const microsecond = value * 60000000;

    return {
      year,
      month,
      week,
      day,
      hour,
      minute,
      second,
      millisecond,
      microsecond,
    };
  }

  secondTo(value: number): TimeResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const year = value * 3.1688087814e-8;
    const month = value * 3.80257053768e-7;
    const week = value * 0.00000165343915344;
    const day = value * 0.0000115740740741;
    const hour = value * 0.000277777777778;
    const minute = value * 0.0166666666667;
    const second = value;
    const millisecond = value * 1000;
    const microsecond = value * 1000000;

    return {
      year,
      month,
      week,
      day,
      hour,
      minute,
      second,
      millisecond,
      microsecond,
    };
  }

  millisecondTo(value: number): TimeResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const year = value * 3.1688087814e-11;
    const month = value * 3.80257053768e-10;
    const week = value * 1.65343915344e-9;
    const day = value * 1.15740740741e-8;
    const hour = value * 2.77777777778e-7;
    const minute = value * 0.0000166666666667;
    const second = value / 1000;
    const millisecond = value;
    const microsecond = value * 1000;

    return {
      year,
      month,
      week,
      day,
      hour,
      minute,
      second,
      millisecond,
      microsecond,
    };
  }

  microsecondTo(value: number): TimeResult {
    if (value < 0) throw new Error("Input value cannot be negative");
    if (typeof value === String()) throw new Error("Type is wrong");

    const year = value * 3.1688087814e-14;
    const month = value * 3.80257053768e-13;
    const week = value * 1.65343915344e-12;
    const day = value * 1.15740740741e-11;
    const hour = value * 2.77777777778e-10;
    const minute = value * 1.66666666667e-8;
    const second = value / 1000000;
    const millisecond = value / 1000;
    const microsecond = value;

    return {
      year,
      month,
      week,
      day,
      hour,
      minute,
      second,
      millisecond,
      microsecond,
    };
  }
}
