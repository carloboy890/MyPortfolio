export function scheduleTimer({ callback, delay, timersRef }) {
  let timerId;

  timerId = setTimeout(() => {
    timersRef.current.delete(timerId);
    callback();
  }, delay);

  timersRef.current.add(timerId);

  return timerId;
}

export function cancelTimer({ timerId, timersRef }) {
  clearTimeout(timerId);
  timersRef.current.delete(timerId);
}

export function clearAllTimers(timersRef) {
  timersRef.current.forEach((timerId) => {
    clearTimeout(timerId);
  });

  timersRef.current.clear();
}
