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
<<<<<<< HEAD
  chooseorderstatus:chooseorderstatus,
=======
  currentData: currentData,
>>>>>>> df6d9fa3b4f8acf281348ed5ab2fac30d1da8cb9
}