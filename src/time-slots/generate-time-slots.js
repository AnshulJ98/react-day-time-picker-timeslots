import dateFns from 'date-fns';

function generateTimeSlots(selectedDate, slotSizeMinutes) {
  const isToday = dateFns.isToday(selectedDate);

  let start = selectedDate;
  start = dateFns.addHours(start, 8);
  if (isToday) {
    const now = new Date();
    const offsetHours = dateFns.getHours(now);
    // "Pad" the start time with the amount of hours of the current time, to
    // prevent rendering time slots of the past
    //start = dateFns.addHours(start, 8);

    // The start positions might still be in the past in terms of minutes
    // So "pad" the start time with the slot size, to prevent rendering time
    // slots of the past

  }

  const end = dateFns.addDays(selectedDate, 1);

  let slot = start;
  let timeSlots = [];
  while (slot < end) {
    timeSlots.push(slot);
    slot = dateFns.addMinutes(slot, slotSizeMinutes);
  }

  return timeSlots;
}

export default generateTimeSlots;
