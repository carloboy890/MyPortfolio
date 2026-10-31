import AiMessages from "../../AiMessageDesc";

export function page2Mess({
  activePage,
  setResultMess,
  openMess,
  aboutTimer,
  scheduleTimer,
  cancelTimer,
}) {
  const item = AiMessages.find(
    (item) => item.page === activePage && item.id === "about-intro",
  );
  if (item && activePage === 2) {
    aboutTimer.current = scheduleTimer(() => {
      setResultMess(item.message);

      scheduleTimer(() => {
        setResultMess(null);
      }, 12000);
    }, 500);
  }
}

export function page3Mess({
  activePage,
  setResultMess,
  openMess,
  scheduleTimer,
  cancelTimer,
}) {
  const item = AiMessages.find(
    (item) => item.page === activePage && item.id === "hire-intro",
  );

  if (item && activePage === 3) {
    scheduleTimer(() => {
      setResultMess(item.message);

      scheduleTimer(() => {
        setResultMess(null);
      }, 12000);
    }, 500);
  }
}

export function page4Mess({
  activePage,
  setResultMess,
  openMess,
  scheduleTimer,
  cancelTimer,
  setOpenMess,
}) {
  const item = AiMessages.find(
    (item) => item.page === activePage && item.id === "services-intro",
  );

  if (item && activePage === 4) {
    scheduleTimer(() => {
      setResultMess(item.message);

      scheduleTimer(() => {
        setResultMess(null);
      }, 12000);
    }, 500);
  }
}

export function page5Mess({
  activePage,
  setResultMess,
  openMess,
  scheduleTimer,
  cancelTimer,
  setOpenMess,
}) {
  const item = AiMessages.find(
    (item) => item.page === activePage && item.id === "experience-intro",
  );

  if (item && activePage === 5) {
    scheduleTimer(() => {
      setResultMess(item.message);

      scheduleTimer(() => {
        // setResultMess(null);
        setOpenMess("explore-experience");
      }, 12000);
    }, 500);
  }
  if (openMess === "explore-experience") {
    const item = AiMessages.find(
      (item) =>
        item.page === activePage && item.id === "experience-certificates",
    );
    scheduleTimer(() => {
      setResultMess(item.message);
    }, 500);
  }
}

export function page6Mess({
  activePage,
  setResultMess,
  openMess,
  scheduleTimer,
  cancelTimer,
  setOpenMess,
}) {
  const item = AiMessages.find(
    (item) => item.page === activePage && item.id === "skills-intro",
  );

  if (item && activePage === 6) {
    scheduleTimer(() => {
      setResultMess(item.message);

      scheduleTimer(() => {
        setResultMess(null);
      }, 12000);
    }, 500);
  }
}
