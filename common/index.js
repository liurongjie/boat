var data={
  index:1,
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
  currentData: currentData,
}