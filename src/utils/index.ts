export function previous(id:number):number[] {
  const previous = [];
  let auxId = 898;
  for (let i = 1; i <= 7; i++, id--) {
    if (id <= 1) {
      previous.push(auxId);
      auxId--;
    } else {
      previous.push(id - 1);
    }
  }
  return previous;
}
export function next(id:number):number[] {
  const next = [];
  let auxId = 1;
  for (let i = 1; i <= 7; i++, id++) {
    if (id >= 898) {
      next.push(auxId);
      auxId++;
    } else {
      next.push(id + 1);
    }
  }
  return next;
}
