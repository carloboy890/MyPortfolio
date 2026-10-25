import AiMessages from "../../AiMessageDesc";

export function page2Mess({ activePage, setResultMess, openMess, aboutTimer }) {
  const item = AiMessages.find(
    (item) => item.page === activePage && item.id === "about-intro",
  );
  if (item && activePage === 2) {
    aboutTimer.current = setTimeout(() => {
      setResultMess(item.message);

      setTimeout(() => {
        setResultMess(null);
      }, 6000);
    }, 500);
  }
}
