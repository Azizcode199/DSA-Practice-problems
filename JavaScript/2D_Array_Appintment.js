function getAppointment(month, day, id, slot) {
    const timetable = getTimeTable(id); // Gets the plan (2D array) for the doctor
  
    for (let i = 0; i < timetable.length; i++) {
      if (timetable[i][0] === month && timetable[i][1] === day) {
        if (slot === -1) {
          // Any free slot wanted
          for (let s = 2; s < 10; s++) {
            if (timetable[i][s] === 0) return true;
          }
        } else {
          // Looking for a specific slot
          if (timetable[i][slot + 2] === 0) return true;
        }
      }
    }
  
    return false;
  }
  
// // Beispiel-Termine für Arzt mit ID = 1
// function getTimeTable(id) {
//     // Beispiel: 3 Tage mit je 8 Slots (0 = frei, 1 = belegt)
//     return [
//       [9, 30, 1, 1, 0, 0, 1, 1, 1, 1],   // Monat 9, Tag 30
//       [10, 1, 0, 0, 1, 1, 0, 0, 1, 1],   // Monat 10, Tag 1
//       [10, 2, 0, 0, 0, 1, 1, 1, 1, 1]    // Monat 10, Tag 2
//     ];
//   }
  
//   function getAppointment(month, day, id, slot) {
//     const timetable = getTimeTable(id);
  
//     for (let i = 0; i < timetable.length; i++) {
//       if (timetable[i][0] === month && timetable[i][1] === day) {
//         if (slot === -1) {
//           for (let s = 2; s < 10; s++) {
//             if (timetable[i][s] === 0) return true;
//           }
//         } else {
//           if (timetable[i][slot + 2] === 0) return true;
//         }
//       }
//     }
  
//     return false;
//   }
  
//   // Testfälle:
//   console.log(getAppointment(10, 1, 1, 2));    // true (Slot 2 ist frei)
//   console.log(getAppointment(10, 1, 1, 5));    // true (Slot 5 ist frei)
//   console.log(getAppointment(10, 2, 1, 3));    // false (Slot 3 ist belegt)
//   console.log(getAppointment(10, 1, 1, -1));   // true (irgendein freier Slot)
//   console.log(getAppointment(9, 30, 1, -1));   // true (Slot 2 oder 3 ist frei)
//   console.log(getAppointment(9, 30, 1, 0));    // false (Slot 0 ist belegt)
  