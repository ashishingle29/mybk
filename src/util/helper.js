

let printDate = function(){
    const tdate = 0
  tday = new Date()
  return tday
}

let printMonth = function(){
const day = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const nowmonth = months[day.getMonth()];
    return nowmonth;
}

  let getBatchInfo = function(){
    let batch  = "Lithium"
    week = "W3"
    days = "D3"
    topic = "the topic for today is Nodejs module system"
    final = batch + ", " + week + days + ", " + topic
    return final
  }



module.exports.printdate = printDate
module.exports.printmonth = printMonth
module.exports.batchinfo = getBatchInfo