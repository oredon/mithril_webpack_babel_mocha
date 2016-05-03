import m from 'mithril';
import MyModel from './MyModel'

var viewModel = {
  initialize: function(){
    viewModel.dataList = MyModel.getData()
  }
}

var MyComponent = {
  controller: function(){
    viewModel.initialize();
    this.viewModel = viewModel;
  },
  view: function(ctrl){
    return (
      <ul>
        {[
          ctrl.viewModel.dataList().map(function(d){
            return m('li', d.text())
          })
        ]}
      </ul>
    )
  }
}

export default MyComponent
