const toDate = (input) => {
    return input instanceof Date ? new Date(input) : new Date();
  };
  
  // Generate all days in a month view (6 weeks grid)
  export const generateMonth = (month, year) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const startDay = new Date(firstDayOfMonth);
    startDay.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay()); // Sunday
  
    const weeks = [];
  
    for (let w = 0; w < 6; w++) {
      const week = [];
      for (let d = 0; d < 7; d++) {
        week.push(new Date(startDay));
        startDay.setDate(startDay.getDate() + 1);
      }
      weeks.push(week);
    }
  
    return weeks;
  };
  
  // Generate days for the current week (Sunday to Saturday)
  export const generateWeek = (ref = new Date()) => {
    const referenceDate = toDate(ref);
    const start = new Date(referenceDate);
    start.setDate(referenceDate.getDate() - referenceDate.getDay()); // Sunday
  
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(new Date(start));
      start.setDate(start.getDate() + 1);
    }
  
    return days;
  };
  
  // Generate 3 consecutive days starting from today or a given date
  export const generateThreeDay = (ref = new Date()) => {
    const referenceDate = toDate(ref);
    const days = [];
    const start = new Date(referenceDate);
    for (let i = 0; i < 3; i++) {
      days.push(new Date(start));
      start.setDate(start.getDate() + 1);
    }
    return days;
  };
  
  // Generate a single day (today or given date)
  export const generateDay = (ref = new Date()) => {
    return toDate(ref);
  };
  