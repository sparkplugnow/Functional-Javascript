 var solution = payload.reduce((obj, item)=>{
    var subArr = [];
    var subObj = {};
    subObj['text'] = item.notes;
    subArr.push(subObj);
    obj[item.time] = subArr;
     return obj;
  }, {});
  
  console.log(solution);