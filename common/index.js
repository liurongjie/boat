var data={
  index:1,
  orderstatus:1,
  ordertitle:"我的订单",
}
function chooseorderstatus(provider){
  data.orderstatus=provider;
  switch (provider)
  {
    case '1':
      data.ordertitle='待拼团订单';
      break;
    case '2':
       data.ordertitle = '待支付确认'; 
       break;
    case '3': 
      data.ordertitle = '待完成体验'; 
      break;
    case '4': 
      data.ordertitle = '待进行评价';
       break;
    case '5': 
      data.ordertitle = '订单完成';
       break;
  }
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