# fecli-cpt-tpl-vue
>Vue.js 组件脚手架 fecli 的模板

## 使用

```
$ npm start
$ npm run build
```

## 命令的功能
> 本项目的开发及打包工作流都集成到了 [@fe6/vcmd](https://www.npmjs.com/package/@fe6/vcmd) 中。

### npm start
  - style
    - 语法检测
    - sass 转译 css
  - ts
    - 语法检测
    - ts 转译
  - html
    - 渲染 vue
    - 实时编译

![npm start 例子](https://github.com/fe6/vcmd/raw/master/public/server.gif)

### npm run build
  - style
    - 语法检测
    - sass 转译 css
    - 压缩
    - postcss 低版本兼容
  - js
    - 语法检测
    - ts 转译
    - 打包
    - 语法低版本兼容

![npm run build 例子](https://github.com/fe6/vcmd/raw/master/public/build.gif)


## 开发须知

- 本项目已经配置 Travis (持续集成)， 自动化到其他项目注意修改 `.travis.yml`
- 本项目已经配置 Codecov (单元测试报告上传)， 自动化到其他项目注意修改 `.codecov.yml`
- 本项目已经打开 snyk (漏洞检测)
