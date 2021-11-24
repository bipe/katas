
function sub(num1, num2) {
  if (!num1 || !num2)
    return "parameter must not be null";

  return num1 - num2;
};

module.exports = sub;