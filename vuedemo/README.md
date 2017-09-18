# vuexdemo

> vue2.0 vuex vue-router

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## meta标签的含义

```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
```
* 让viewport的宽度等于物理设备上的真实分辨率，不允许用户缩放。一都主流的web app都是这么设置的，它的作用其实是故意舍弃viewport，不缩放页面，这样dpi肯定和设备上的真实分辨率是一样的，不做任何缩放，网页会因此显得更高细腻。

```
<meta name="screen-orientation" content="portrait">
```
* uc强制竖屏

```
<meta name="apple-mobile-web-app-capable" content="yes" />
```
* 是否删除默认的苹果工具栏和菜单栏 
```
<meta name="format-detection" content="telephone=no,email=no,adress=no">
```
* telephone:iPhone会自动把你这个文字加链接样式、并且点击这个数字还会自动拨号！
* email:告诉设备不识别邮箱，点击之后不自动发送
* adress:禁止跳转至地图
```
<meta name="full-screen" content="yes">
```
* uc强制全屏
```
<meta name="x5-fullscreen" content="true">
```
* qq强制全屏

## 目录结构
|——page 页面
    |——Home  首页内容
        |——index.vue
    |——Item  每页答题页面
        |——inedx.vue
    |——score 计分数页面
        |——index.vue
|——components 组件
    |——Container.vue 内容（根据父组件【page中】传递的数据不同，展示不同页面）
|——router 路由
    |——index.js 路由配置文件
|——store vue状态集中管理（管理数据）
    |——index.js 整合store中的选项，导出store对象
    |——getters.js 公共获取属性
    |——actions.js 公共方法的commit
    |——mutations.js 公共的mutations
    |——type.js 公共的mutations类型常量
    |——modules 按功能分的模块数据
    
## 纠易错
1. router中导入组件不能用import Home frome '../page/Home/index.vue'，要用r => require.ensure([], () => r(require('../page/Home')), 'Home')
2. store中index.js导入其他js，必须指明当前目录“./”,Vuex.Store中S大写
3. 局部组件components是对象  components拼写（易错写conpontent）
4. 路由：index.html中内容由路由app提供，所以要有<router-view></router-view>,app.vue中有子路由，也要有<router-view></router-view>
5. 父组件中给子组件传值时，传值的必须是data中定义的数据，不能是字符串 :component-father="componentFather"
6. main.js引入common.less报错：
 * 使用less语法，报get error（404） 说明没有安装less、less-loader 解决：cnpm install less less-loader -D
	```
	import './assets/less/common.less'
	```
7. computed:mapState(['level','itemNum','itemDetail'])不能使用es6的扩展字符”...“

## rem单位的使用
* 通过rem.js计算设备的分辨率，从而设置根元素html的字体大小,达到rem自适应字体大小。

## es6的使用
* 扩展运算符...：  将一个数组转为用逗号分隔的参数序列。eg：...mapActions(['getData','getState']) 转为：getData(){},getState(){}
      