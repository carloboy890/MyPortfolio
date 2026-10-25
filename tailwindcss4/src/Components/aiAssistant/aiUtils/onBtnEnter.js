import AiMessages from "../../AiMessageDesc";

export function onBtnEnter({
  buttonId,
  activePage,
  setOnBtnSwitch,
  setResultMess,
  aboutTimer,
  exploreTimer,
}) {
  setResultMess(null);
  // clearTimeout(exploreTimer.current);
  const item = AiMessages.find(
    (item) => item.page === activePage && item.id === buttonId,
  );

  setOnBtnSwitch(buttonId);
  setTimeout(() => {
    setResultMess(item ? item.message : null);
  }, 100);
}
