export function showLiveTime() {
  const displayDateTime = document.getElementById("dateTime");
  let dateTime = new Date();
  let monthLong = dateTime.toLocaleString("default", { month: "long" });
  let dayWithSuffix = dateTime.getDate();
  switch (dayWithSuffix) {
    case 1:
      dayWithSuffix += "<sup>st</sup>";
      break;
    case 2:
      dayWithSuffix += "<sup>nd</sup>";
      break;
    case 3:
      dayWithSuffix += "<sup>rd</sup>";
      break;
    default:
      dayWithSuffix += "<sup>th</sup>";
      break;
  }

  let fullYear = dateTime.getFullYear();
  let fullTimeWithSuffix =
    dateTime.getHours() +
    ":" +
    dateTime.getMinutes() +
    ":" +
    dateTime.getSeconds() +
    (dateTime.getHours() > 11 ? " pm" : " am");
  let formatedDateTime =
    monthLong + " " + dayWithSuffix + " " + fullYear + " " + fullTimeWithSuffix;

  displayDateTime.innerHTML = formatedDateTime;
  setTimeout(showLiveTime, 1000);
}
