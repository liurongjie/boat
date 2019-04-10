var data={
    index:1,
    orderstatus:1,
    ordertitle:"我的订单",
  }
  //选择订单类型函数
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
      case '0':
        data.ordertitle = '全部订单';
        break;
    }
  }
  //首页商品信息
  var homelist={
    
  }
  function gethomelist(){
  
  }
  //首页订单信息
  var orderlist={
  }
  //订单细节
  var orderdetail={
  
  }
  //正在浏览商品
  var currentData={
  
  }
  
  //当前用户查看的评论
  var currentEvaluation={
  
  }
  //首页tab组件选择
  function changelist(provider){
    data.index=provider;
  }
  var currentorder={
  
  }
  
  module.exports = {
    data: data,
    changelist: changelist,//函数：改变首页list
    homelist: homelist,//首页商品信息
    currentData: currentData,//目前选择的商品
    orderlist: orderlist,//订单信息
    currentorder:currentorder,//当前查看订单
    orderdetail: orderdetail,//订单细节
    chooseorderstatus: chooseorderstatus,//函数：选择订单状态
  }