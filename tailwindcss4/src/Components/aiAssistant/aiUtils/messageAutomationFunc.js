import { page1Mess } from "./aiPage1";
import {
  page2Mess,
  page3Mess,
  page4Mess,
  page5Mess,
  page6Mess,
} from "./aiPage2to6";
import { page7Mess, page8Mess } from "./aiPage7to8";

export function messageAutomation({
  activePage,
  setResultMess,
  openMess,
  setOpenMess,
  setToClick,
  setShowArrow,
  introTimer,
  exploreTimer,
  showArrow,
  showArrowRef,
  scheduleTimer,
  cancelTimer,
  aboutTimer,
}) {
  if (activePage === 1) {
    setResultMess(null);
    page1Mess({
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
      aboutTimer,
    });
  }

  if (activePage === 2) {
    setResultMess(null);
    page2Mess({
      activePage,
      setResultMess,
      openMess,
      aboutTimer,
      scheduleTimer,
      cancelTimer,
    });
  }
  if (activePage === 3) {
    setResultMess(null);
    page3Mess({
      activePage,
      setResultMess,
      openMess,
      scheduleTimer,
      cancelTimer,
    });
  }
  if (activePage === 4) {
    setResultMess(null);
    page4Mess({
      activePage,
      setResultMess,
      openMess,
      scheduleTimer,
      cancelTimer,
      setOpenMess,
    });
  }
  if (activePage === 5) {
    setResultMess(null);
    page5Mess({
      activePage,
      setResultMess,
      openMess,
      scheduleTimer,
      cancelTimer,
      setOpenMess,
    });
  }
  if (activePage === 6) {
    setResultMess(null);
    page6Mess({
      activePage,
      setResultMess,
      openMess,
      scheduleTimer,
      cancelTimer,
      setOpenMess,
    });
  }
  if (activePage === 7) {
    setResultMess(null);
    page7Mess({
      activePage,
      setResultMess,
      openMess,
      scheduleTimer,
      cancelTimer,
      setOpenMess,
    });
  }
  if (activePage === 8) {
    setResultMess(null);
    page8Mess({
      activePage,
      setResultMess,
      openMess,
      scheduleTimer,
      cancelTimer,
      setOpenMess,
    });
  }
}
