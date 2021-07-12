function next(current, total) {
  if (current === undefined) return 0;
  return Math.min(current + 1, total - 1);
}

function previous(current, total) {
  if (current === undefined) return total - 1;
  return Math.max(0, current - 1);
}

export { next, previous };
