import AiMessages from "../../AiMessageDesc";

export function page1Mess({
  openMess,
  activePage,
  setResultMess,
  setOpenMess,
  setToClick,
  setShowArrow,
  introTimer,
  exploreTimer,
  showArrow,
  showArrowRef,
  scheduleTimer,
  cancelTimer,
}) {
  if (openMess === "") {
    const item = AiMessages.find(
      (item) => item.page === activePage && item.id === "home-intro",
    );

    if (item) {
      introTimer.current = scheduleTimer(() => {
        setResultMess(item.message);
        console.log(`render: count`);
      }, 500);
      exploreTimer.current = scheduleTimer(() => {
        setOpenMess("Explore");
      }, 8000);
    }
  }

  if (openMess === "Explore") {
    const item = AiMessages.find(
      (item) => item.page === activePage && item.id === "home-explore",
    );

    if (item) {
      exploreTimer.current = scheduleTimer(() => {
        setResultMess(item.message);
      }, 500);
    }
  }

  if (openMess === "instruction") {
    clearTimeout(introTimer.current);
    clearTimeout(exploreTimer.current);
    setResultMess(null);

    const item = AiMessages.find(
      (item) => item.page === activePage && item.id === "home-instructions",
    );
    const item1 = AiMessages.find(
      (item) => item.page === activePage && item.id === "hover-instructions",
    );
    const item2 = AiMessages.find(
      (item) => item.page === activePage && item.id === "click-instructions",
    );

    if (item) {
      setTimeout(() => {
        setResultMess(item.message);
        setToClick(true);

        setTimeout(() => {
          setResultMess(null);

          showArrowRef.current === "close"
            ? setShowArrow("")
            : setShowArrow("firstArrow");
        }, 5000);
      }, 100);
    }
    if (item1) {
      setTimeout(() => {
        setResultMess(item1.message);
      }, 6000);
      setTimeout(() => {
        setResultMess(null);
      }, 12000);
      setTimeout(() => {
        setShowArrow("close2");
      }, 1000);
    }
    if (item2) {
      setTimeout(() => {
        console.log(showArrow);
        showArrowRef.current === "close2"
          ? setShowArrow("")
          : setShowArrow("secondArrow");
        console.log("Arrow value at 13 seconds:", showArrowRef.current);
        setResultMess(item2.message);
      }, 14000);
      setOpenMess("about-intro");
      setTimeout(() => {
        setResultMess(null);
        setToClick(false);
        setShowArrow(null);
      }, 20000);
    }
  }
}
