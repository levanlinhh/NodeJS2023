//Function Declaration
function sum(x, y) {
  return x + y;
}

//Anonymous Function
const add = function (x, y) {
  return x - y;
};
//Ở đây, hàm add là một Anonymous Function vì nó không có tên được đặt trực tiếp cho nó.

//Arrow Function
const multiply = (x, y) => {
  return x * y;
};

export { sum, multiply, add };
