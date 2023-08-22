import { DateTime } from "../dist/libraries/luxon.js"; // luxon library

export const displayDateTime = document.getElementById("dateTime");
export function showLiveTime() {
  let dt = DateTime.now();
  let fullFormatedDateTime = dt.toFormat('MMMM dd ccc yyyy - HH:mm:ssa');
  displayDateTime.innerHTML = fullFormatedDateTime;
  setTimeout(showLiveTime, 1000);
}
