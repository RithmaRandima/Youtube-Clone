export const API_KEY = "AIzaSyD6G1NjtDgQ5zgYmP5SaYim4AdhhYR1Bng";

export const valueConvater = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
