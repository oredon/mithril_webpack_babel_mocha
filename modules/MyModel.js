import m from 'mithril';

var MyModel = function(data){
  this.text = m.prop(data && data.text || "");
}
MyModel.getData = function(){
  return m.request({
    method: "GET",
    url: "/ajax",
    type: MyModel
  })
}
MyModel.setData = function(dataList){
  m.request({
    method: "POST",
    url: "/ajax",
    data: dataList
  })
}
export default MyModel
