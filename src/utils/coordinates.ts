export const getX = (index: number): number => {
  const col = index % 3;
  const row = Math.floor(index / 3);

  const pattern = [
    [300, 600, 900],
    [600, 300, 600],
    [900, 600, 300],
  ];

  const rowPattern = pattern[row % pattern.length];
  return rowPattern[col];
};
