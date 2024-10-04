// It's just bojar jonno----->

// const isVerified = true;
// const isVerified = false;

// if (isVerified === true) {
//   console.log("User is verified.");
// } else {
//   console.log("User is not verified.");
// }

// console.log(
//   `${isVerified === true ? "User is verified." : "user is not verified"}`
// );

function time(time) {
  const hour = parseInt(time / 3600);
  let sec = parseInt(time % 3600);
  const min = parseInt(sec / 60);
  sec = sec % 60;
  return `${hour} hour ${min} min ${sec} second ago.`;
}
console.log(time(800));
