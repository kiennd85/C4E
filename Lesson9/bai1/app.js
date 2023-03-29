let arr = [3, 4, 9, 8, 20, 1, 6, 5, 12, 17, 19];
//let arr = [30, 56, 78, 31];

//============================
//1. Tính tích các phần tử trong mảng
// let n = 1;
// arr.forEach(function (item) {
//   n *= item;
// });
// console.log(n);

//============================
//2. Tìm số nhỏ nhất chia hết cho 2
//Cách 1
// let n = null;
// arr.forEach(function (item) {
//   if (!(item % 2)) {
//     if (n == null) {
//       n = item;
//     } else if (item < n) {
//       n = item;
//     }
//   }
// });
// console.log(n);

//Cách 2
// arrNew = arr.sort((a, b) => a - b);
// console.log(arrNew);
// for (item of arrNew) {
//   if (!(item % 2)) {
//     console.log(item);
//     break;
//   }
// }

//============================
//3. Tìm số lớn nhất chia hết cho 3
// arrNew = arr.sort((a, b) => b - a);
// console.log(arrNew);
// for (item of arrNew) {
//   if (!(item % 3)) {
//     console.log(item);
//     break;
//   }
// }

//============================
//4. Tìm giá trị trung bình
// let total = 0;
// arr.forEach((element) => (total += element));
// let ave = total / arr.length;
// console.log(ave);

//============================
//5. Lọc số nguyên tố trong mảng
// arrNew = [];
// for (let n of arr) {
//   ck = 1;
//   if (n < 2) {
//     ck = 0;
//   } else {
//     for (let i = 2; i < n; i++) {
//       if (n % i == 0) {
//         ck = 0;
//         break;
//       }
//     }
//   }
//   if (ck == 1) {
//     arrNew.push(n);
//   }
// }
// console.log(arrNew);

//============================
//6. Kiểm tra có số < 10 không?
// for (let n of arr) {
//   if (n < 10) {
//     console.log('Arr có số < 10:', n);
//     break;
//   }
// }

//============================
//6. Kiểm tra tất cả phần tử > 20 không?
// flag = 1;
// arr.forEach(function (element) {
//   if (element <= 20) {
//     flag = 0;
//   }
// });

// if (flag == 1) {
//   console.log('Tất cả phần tử trong mảng > 20');
// } else {
//   console.log('Có phần tử trong mảng < 20');
// }

//============================
//7. Nhập vào số n cho đến khi n thuộc Arr

// console.log(arr);
// let n;
// do {
//   n = Number(prompt('Nhập số n bất kỳ: '));
//   console.log(n);
// } while (!arr.includes(n));

//============================
//8. Sử dụng thuật toán Bubble Sort để sắp xếp phần tử tăng dần
