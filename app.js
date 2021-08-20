class digitalClock {
  constructor(element) {
    this.element = element;
 }

 start() {
   this.update();

   setInterval(() => {
     this.update();
   }, 100);
 }

 timeSections() {
   const now = new Date();

   return {
     hour: now.getHours() % 12 || 12,
     minutes: now.getMinutes(),
     morning: now.getHours() < 12
   };
 }

 update() {
  const parts = this.timeSections();
  const minutesFormatted = parts.minutes.toString().padStart(2, "0");
  const timeFormatted = `${parts.hour}: ${minutesFormatted}`;
  const ampm = parts.morning ? "AM" : "PM";

  this.element.querySelector(".time").textContent = timeFormatted;
  this.element.querySelector(".ampm").textContent = ampm;
  }
}

const clockElement = document.querySelector(".clock");
const clockObject = new digitalClock(clockElement);

clockObject.start()
