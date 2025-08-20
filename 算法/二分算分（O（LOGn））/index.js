// 我们正在玩猜数字游戏。猜数字游戏的规则如下：

// 我会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。

// 如果你猜错了，我会告诉你，我选出的数字比你猜测的数字大了还是小了。

// 你可以通过调用一个预先定义好的接口 int guess(int num) 来获取猜测结果，返回值一共有三种可能的情况：

// -1：你猜的数字比我选出的数字大 （即 num > pick）。
// 1：你猜的数字比我选出的数字小 （即 num < pick）。
// 0：你猜的数字与我选出的数字相等。（即 num == pick）。
// 返回我选出的数字。
const pick = 6;
const guess = (number) => {
  if (number === pick) {
    return 0;
  }
  if (number > pick) {
    return -1;
  }
  return 1;
};
// 注意 什么时候 r === number || l === number
var guessNumber = function (n) {
  let l = 1;
  let r = n;
  while (l <= r) {
    const number = Math.floor(l + (r - l) / 2);
    const guesNumber = guess(number);
    if (guesNumber === 0) {
      return number;
    }
    if (guesNumber === -1) {
      r = number - 1;
    } else {
      l = number + 1;
    }

  }
  return l;
};
console.log(guessNumber(10));
