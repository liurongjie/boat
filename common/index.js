var data={
  index:1,
}
var homelist={

}
var orderlist={

}
var orderdetail={

}
function changelist(provider){
  data.index=provider;
}
module.exports={
  data:data,
  changelist:changelist,
  orderlist:orderlist,
  orderdetail:orderdetail,
  homelist:homelist,
}