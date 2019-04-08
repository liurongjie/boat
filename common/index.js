var data={
  index:1,
  orderstatus:1,
  ordertitle:"我的订单",
}
function chooseorderstatus(provider){
  data.orderstatus=provider;
}
var homelist={

}
var orderlist={

}
var orderdetail={

}



var currentData={

}

//当前用户查看的评论
var currentEvaluation={

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
  chooseorderstatus:chooseorderstatus,
  currentData: currentData,

}