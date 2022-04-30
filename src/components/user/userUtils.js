module.exports.getDate = function() {
  const d = new Date();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const year = d.getFullYear();
  if (month < 10) {
    return `${year}-0${month}-${day}`;
  }
  return `${year}-${month}-${day}`;
}