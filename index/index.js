const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    console.log('@身在某处 用来测试页面调用组件内部方法的代码片段，欢迎和我交流！')
    console.log('https://f1982.com');

    const component = this.selectComponent('#component-id');
    component.myFunction();
  },

  callComponentMethod: function(evt){
    const component = this.selectComponent('#component-id');
    component.myFunction();
  }
})
