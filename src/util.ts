export const time2Number = (time: string) =>
  +time.replace(":", "").replace(".", "");

export const sortTime = (a: string, b: string) => {
  const parsedA = time2Number(a);
  const parsedB = time2Number(b);

  if (parsedA > parsedB) {
    return 1;
  }

  if (parsedA < parsedB) {
    return -1;
  }

  return 0;
};
