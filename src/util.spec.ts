import { sortTime } from "./util";

describe("sortTime", () => {
  it("should sort time", () => {
    const time1 = "01:34.000";
    const time2 = "07:00.208";
    const time3 = "07:22.111";
    const time4 = "10:10.888";
    const time5 = "27:53.882";

    expect([time5, time3, time4, time2, time1].sort(sortTime)).toEqual([
      time1,
      time2,
      time3,
      time4,
      time5
    ]);
    expect([time4, time1, time3, time5, time2].sort(sortTime)).toEqual([
      time1,
      time2,
      time3,
      time4,
      time5
    ]);
    expect([time2, time3, time5, time4, time1].sort(sortTime)).toEqual([
      time1,
      time2,
      time3,
      time4,
      time5
    ]);
  });
});
