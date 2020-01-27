const getSuperSeriesWinner = (scores) => {
  let winsBalance = 0;
  for (let i = 0; i < scores.length && winsBalance < 5; i += 1) {
    winsBalance += Math.sign(scores[i][0] - scores[i][1]);
  }
  switch (true) {
    case (winsBalance > 0):
      return 'canada';
    case (winsBalance < 0):
      return 'ussr';
    case (winsBalance === 0):
      return null;
  }
};
const scores = [
  [3, 7], // Первая игра
  [4, 1], // Вторая игра
  [4, 14],
  [5, 6],
  [4, 5],
  [3, 12],
  [4, 3],
  [6, 5],
];
console.log(getSuperSeriesWinner(scores)); // 'canada'