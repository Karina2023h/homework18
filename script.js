function startTimer(tims) {
  let timer = tims;
  const display = document.getElementById("timer");

  const interval = setInterval(() => {
    const minuta = Math.floor(timer / 60);
    const seconda = timer % 60;

    display.textContent = `${String(minuta).padStart(2, "0")}:${String(
      seconda
    ).padStart(2, "0")}`;

    if (--timer < 0) {
      clearInterval(interval);
      // console.log("Таймер закінчився");
    }
  }, 1000);
}

const time = 85;
startTimer(time);
