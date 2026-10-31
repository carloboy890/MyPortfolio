import AiMessages from "../../AiMessageDesc";

export function page7Mess({
  activePage,
  setResultMess,
  openMess,
  scheduleTimer,
  cancelTimer,
  setOpenMess,
}) {
  const item = AiMessages.find(
    (item) => item.page === activePage && item.id === "projects-intro",
  );

  if (item && activePage === 7) {
    scheduleTimer(() => {
      setResultMess(item.message);

      scheduleTimer(() => {
        setResultMess(null);
      }, 12000);
    }, 500);
  }
}

export function page8Mess({
  activePage,
  setResultMess,
  openMess,
  scheduleTimer,
  cancelTimer,
  setOpenMess,
}) {
  const item = AiMessages.find(
    (item) => item.page === activePage && item.id === "contact-intro",
  );

  if (item && activePage === 8) {
    scheduleTimer(() => {
      setResultMess(item.message);

      scheduleTimer(() => {
        setResultMess(null);
      }, 12000);
    }, 500);
  }
}
