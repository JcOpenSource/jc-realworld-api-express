
## 项目启动

## 项目结构
```
|-- config 配置文件
|-- controller 解析用户的输入，处理后返回响应的结果
|-- model 数据持久层
|-- middleware 用于编写中间件
|-- router 用于配置URL路由
|-- util 工具模块
|-- app.js 主文件
```

## 配置中间件
* 解析请求体
  * express.json()
  * express.urlencoded()
* 日志输出
  * morgan()
* 为客户端提供跨域资源请求
  * cors()


## 工程配置
``` shell
mkdir realworld-api-express
cd .\realworld-api-express\
npm init -y
npm i express
npm install morgan
npm install cors
```

表示跨域请求设置成功： Access-Control-Allow-Origin *

## realworld 官方文档
```
https://github.com/gothinkster/realworld/tree/main/api
```



