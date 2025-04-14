class MonthlyConsumption {
    constructor(
      public customerId: number,
      public month: number,
      public consumption: number
    ) {}
  }
  
  class YearlyStatistics {
    constructor(
      public minConsumption: number,
      public maxConsumption: number,
      public overLimitList: MonthlyConsumption[]
    ) {}
  }
  
  function calculateStatistics(consumption: number[][], limit: number): YearlyStatistics {
    let minMonthValue = Number.MAX_VALUE;
    let maxMonthValue = Number.MIN_VALUE;
    let overLimitList: MonthlyConsumption[] = [];
  
    for (let customer = 0; customer < consumption.length; customer++) {
      for (let month = 1; month <= 12; month++) {
        let usage = consumption[customer][month + 1] - consumption[customer][month];
  
        if (usage > limit) {
          overLimitList.push(new MonthlyConsumption(consumption[customer][0], month, usage));
        }
  
        if (usage < minMonthValue) {
          minMonthValue = usage;
        } else if (usage > maxMonthValue) {
          maxMonthValue = usage;
        }
      }
    }
  
    return new YearlyStatistics(minMonthValue, maxMonthValue, overLimitList);
  }
  