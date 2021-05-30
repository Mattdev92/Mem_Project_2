import Mem1 from 'assets/1.jpg';
import Mem2 from 'assets/2.jpg';
import Mem3 from 'assets/3.jpg';
import Mem4 from 'assets/4.jpg';
import Mem5 from 'assets/5.jpg';
import Mem6 from 'assets/6.jpg';
import Mem7 from 'assets/7.jpg';
import Mem8 from 'assets/8.jpg';
import Mem9 from 'assets/9.jpg';

export const whichCategory = (category, memData) => {
  const dataArray = Object.entries(memData);
  switch (category) {
    case 'HOT':
      return dataArray.filter(
        (item) => item[1].upvotes - item[1].downvotes > 5
      );
    case 'REGULAR':
      return dataArray.filter(
        (item) => item[1].upvotes - item[1].downvotes <= 5
      );
    case 'FAVOURITE':
      return dataArray.filter((item) => item[1].fav === true);
    case 'DEFAULT':
      return dataArray;
    default:
      return dataArray;
  }
};
export const memTab = [Mem1, Mem2, Mem3, Mem4, Mem5, Mem6, Mem7, Mem8, Mem9];
