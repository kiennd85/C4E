import { users } from './data.js';

//========================================
//1. Nhập vào số n, tìm 1 user có id bằng n
// let n = Number(prompt('Nhập vào một số n để tìm id user: '));
// users.forEach(function (item) {
//   if (item['id'] == n) {
//     console.log('Tìm thấy user có id = n: ', item);
//   }
// });

//========================================
//2. Nhập vào 1 chuỗi keyword, tìm email có tên (first + lastname) chứa keyword
// let keyword = prompt('Nhập vào một keyword để tìm email user: ');
// keyword = keyword.toLowerCase();

// let arr = [];
// users.forEach(function (item) {
//   if (
//     item['first_name'].toLowerCase().includes(keyword) ||
//     item['last_name'].toLowerCase().includes(keyword)
//   ) {
//     arr.push(item['email']);
//   }
// });
// arr.forEach((item) => console.log(item));

//========================================
//3. Đếm số lượng user có age > 50
// let count = 0;
// users.forEach(function (item) {
//   if (item['age'] > 50) {
//     count += 1;
//   }
// });
// console.log(count);

//========================================
//4. Đếm số lượng user chưa kết hôn và đã kết hôn
// let countMarried = 0;
// let countNotMarried = 0;

// users.forEach(function (item) {
//   if (item['is_married'] == true) {
//     countMarried += 1;
//   } else if (item['is_married'] == false) {
//     countNotMarried += 1;
//   }
// });
// console.log('Đã kết hôn: ', countMarried);
// console.log('Chưa kết hôn: ', countNotMarried);

//========================================
//5. Đếm số lượng user theo từng ngành nghề tương ứng

//Xác định các loại job
let jobs = [];
users.forEach(function (item) {
  if (!jobs.includes(item['job'])) {
    jobs.push(item['job']);
  }
});

console.log(jobs);

//Xác định user của từng job
jobs.forEach(function (item) {
  let count = 0;
  users.forEach(function (element) {
    if (element['job'] == item) {
      count += 1;
    }
  });
  console.log(`Job ${item}: ${count}`);
});
