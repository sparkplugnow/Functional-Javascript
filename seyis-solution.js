var assignment=payload.reduce(function(all,item,index) {
all[ item.time]=(item);
return all;
},{time:[]});