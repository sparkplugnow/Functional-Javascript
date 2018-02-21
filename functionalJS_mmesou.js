/* so the server is sending me an 
array of objects in the format below
*/

const payload = [{
    time: '2018-02-04',
    user: 'Jumanji',
    type: 'meal',
    notes: 'test notes 1',
    media: 'media.jpg'
  },
  {
    time: '2018-02-05',
    user: 'Jumanji',
    type: 'gallery',
    notes: 'test notes 1',
    media: 'media.jpg'
  },
  {
    time: '2018-02-05',
    user: 'Jumanji',
    type: 'snack',
    notes: 'toast, berries, apple sauce',
    media: 'media.jpg'
  },
  {
    time: '2018-02-04',
    user: 'Jumanji',
    type: 'activity',
    notes: 'test notes 2',
    media: 'media.jpg'
  },
  {
    time: '2018-02-04',
    user: 'izzy',
    type: 'diaper',
    notes: 'test notes 3',
    media: 'media.jpg'
  },
  {
    time: '2018-02-04',
    user: 'Jumanji',
    type: 'diaper',
    notes: 'test notes 4',
    media: 'media.jpg'
  },
  {
    
    time: '2018-02-06',
    user: 'Jumanji',
    type: 'meal',
    notes: 'cinnamon raison toast, banana, milk',
    media: 'media.jpg'
  },
  {
    time: '2018-02-06',
    user: 'Jumanji',
    type: 'meal',
    notes: 'test notes 4',
    media: 'media.jpg'
  },
  {
    time: '2018-02-06',
    user: 'Jumanji',
    type: 'meal',
    notes: 'test notes 4',
    media: 'media.jpg'
  },
  {
    time: '2018-02-07',
    user: 'Jumanji',
    type: 'diaper',
    notes: 'test notes 4',
    media: 'media.jpg'
  }
  ];
  
  
  /*
  however the library needs me give it an 
  object where each key is a date, 
  and the value is an array of items
  under the date
  
  */
  /*{'2012-05-22': [{text: 'item 1 - any js object'}],
       '2012-05-23': [{text: 'item 2 - any js object'}],
       '2012-05-24': [],
       '2012-05-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
      }
  */
  //console.log(payload.length);
  //log(payload[1].time);

  /* var datedPayload = {};
  datedPayload = payload.map(function(item, ind, arr){
      //return arr[ind] = item.time + item;
      return item.time.concat(item);
  }); */
  
  
  const datedPayload = 
  payload.reduce(function(object, item) {
       object[item.time] = [item]
       return object
     }, {});
     
  console.log(datedPayload);