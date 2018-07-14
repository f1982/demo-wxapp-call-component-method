这是一个微信小程序通过外部 js 方法调用小程序组件内部方法的范例。

详细说明文章：http://blog.f1982.com/cn/2018/04/24/wei-xin-xiao-cheng-xu-ru-he-diao-yong-zhu-jian-de-fang-fa/

微信小程序主要基于数据绑定来处理 js 和 wxml 之间的数据传输，虽然这样有很多便利性，但是有时候也是蛮不方便的。今天遇到调用组件方法的问题，其实非常简单，最关键是一个 ```selectComponent('#component-id');``` 的方法问题，不想读太多文字可以读源码。

## 创建组件

新建一个叫做 ```my-component``` 的组件，并在组件 ```my-component.js``` 的 methods 块里增加 ```myFunction``` 方法，也就是一会儿我们想尝试用页面直接调用的方法。￼组件的其他内容，按照需要的逻辑自己添加就好了。

    Component({
        properties: {

        },
        data: {

        },
        methods: {
            myFunction: function(){
                console.log('I am myFunction');
            }
        }
    })

## 页面调用组件

在```index.json```里添加组件：

    {
        "usingComponents": {
            "my-component": "./my-component"
        }
    }

在```index.wxml```页面头部引用组件：

    <import src="./my-component.wxml" />

在```wxml```文件里调用组件，并设置组件的 id：

    <my-component id="component-id"></my-component>

**id** 是页面调用的关键！


在```index.js```里根据组件的 id 获取组件实例，这样就可以调用任何组件里的任何写在 methods 块里的方法了：

    const component = this.selectComponent('#component-id');
    component.myFunction();

我这里是在 index.wxml 里添加了个按钮：

    <button bindtap='callComponentMethod'>点我调用组件内部方法</button>

又在 index.js 页面里增加了回调方法，里面去调用 component 的方法

    callComponentMethod: function(evt){
        const component = this.selectComponent('#component-id');
        component.myFunction();
    }

个人博客地址：
