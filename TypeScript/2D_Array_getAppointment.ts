function getTimeTable(id: number): number[][] {
    // Example schedule (usually from database)
    return [
      [9, 30, 1, 1, 0, 0, 1, 1, 1, 1],
      [10, 1, 0, 0, 1, 1, 0, 0, 1, 1],
      [10, 2, 0, 0, 0, 1, 1, 1, 1, 1]
    ];
  }
  
  function getAppointment(month: number, day: number, id: number, time_slot: number): boolean {
    let treffer: boolean = false;
    const timeTableDoc: number[][] = getTimeTable(id);
  
    for (let i = 0; i < timeTableDoc.length; i++) {
      if (month === timeTableDoc[i][0] && day === timeTableDoc[i][1]) {
        if (time_slot < 0) {
          for (let z = 0; z < 8; z++) {
            if (timeTableDoc[i][2 + z] === 0) {
              treffer = true;
            }
          }
        } else {
          if (timeTableDoc[i][2 + time_slot] === 0) {
            treffer = true;
          }
        }
      }
    }
  
    return treffer;
  }
  