import { DateTime } from "./luxon.js"; // luxon library

export const displayDateTime = document.getElementById("dateTime");
export function showLiveTime() {
  let dt = DateTime.now();
  let dayWithSuffix = dt.daysInMonth;
  switch (dayWithSuffix) {
    case 1 : 
    dayWithSuffix += '<sup>st</sup>';
    break;
    case 2 :
      dayWithSuffix += '<sup>nd</sup>';
    break;
    case 3 : 
    dayWithSuffix += '<sup>rd</sup>';
    break;
    default : 
    dayWithSuffix += '<sup>th</sup>';
    break;
  }
  let fullFormatedDateTime = dt.toFormat('MMMM dd ccc yyyy - HH:mm:ssa');
  displayDateTime.innerHTML = fullFormatedDateTime;
  setTimeout(showLiveTime, 1000);
}
