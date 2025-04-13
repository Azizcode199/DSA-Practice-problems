function getAppointment(month: number, day: number, id: number, time_slot: number): boolean {
  let treffer: boolean = false;
  let planTime: number[][] = getTimeTable(id);

  for (let i = 0; i < planTime.length; i++) {
    if (month === planTime[i][0] && day === planTime[i][1]) {
      if (time_slot < 0) {
        for (let z = 0; z < 8; z++) {
          if (planTime[i][2 + z] === 0) {
            treffer = true;
          }
        }
      } else {
        if (planTime[i][2 + time_slot] === 0) {
          treffer = true;
        }
      }
    }
  }

  return treffer;
}
function getTimeTable(id: number): number[][] {
  throw new Error("Function not implemented.");
}

