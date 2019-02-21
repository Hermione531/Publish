# publish demo

### 版本说明
npm v6.4.1
node v8.12.0

### 安装与运行
npm install 安装依赖
npm run dev 运行

### 修改说明

页面中产品中心和新闻中心的信息写在 reducers/basicInfo.js 的 defaultValue 这个变量中
修改的时候，不要修改key 只修改 value，若修改了 key 请修改对应 component 内容

各模块为：
    component/
        nav/index.js  导航栏，可修改内容，修改后请注意同时修改scss文件
        footer/index.js  页脚的版权信息

        homepage/index.js 首页，轮播图为 defaultValue的 images，内容提示后的内容为产品中心的内容，只展示前六个

        productCenter/
            index.js 产品中心，其Item为 public/Item.js，数据来源为defaulValue.products
            View.js  产品详情

        news/
            index.js  新闻中心，数据来源为defaultValue.news
            View.js   新闻详情

        Location/index.js  当前位置

    剩下的模块没做，反正界面已经够了，如果不够再继续加点简单的

### 待优化部分

    Location的位置信息，是根据当前界面的url，对照unit/locationTree下的文件找出来的

    问题是，location这个组件不是在BrowserRouter的Route只指定路径的，需要从Redux中获取，这个我用state.get('router').location.pathname总是获取不到，state.get('router')根本没有location这个属性，实验室的项目可以获取，我做的不知道为啥不能，可能是我的redux是V4版本，实验室的是V3版本

    目前的解决方法是在所有component里都加上了Location，由于初始化的时候可以从props.location.pathname获取到当前路由路径，就先这样做了，只是权宜之计，后续还需修改