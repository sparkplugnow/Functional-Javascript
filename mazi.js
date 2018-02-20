/*With this first attempt, I was trying to make the time value a key, while every other content becomes it's array value, but the couldn't achieve that*/

var transform= payload.reduce((obj, item) => {
     obj[item.time] = item
     return obj
   }, {})


/*var newTransform = transform.map((x)=>{
    delete x.time;
    return x;
})
console.log(newTransform)*/

/*Here, I only made one value (notes) from the initial array of objects the value of the time key*/
 var trans = payload.reduce(function(obj, item){
    var newObj = {};
    var arr = [];
    newObj['text'] = item.notes;
    arr.push(newObj);
    obj[item.time] = arr;
     return obj;
  }, {});