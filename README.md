# 种客 API v2

## 目录结构

```
zkapi
├── jest.config.js      // 单元测试配置文件
├── package.json        // npm包文件
├── README.md           // 主说明文件
├── tsconfig.json       // typescript配置文件
├── tslint.json         // tslint编码风格配置文件
├── .vscode             // vscode项目配置文件夹
|   ├── extensions.json // 推荐vscode插件
|   ├── launch.json     // 本地调试配置
|   ├── settings.json   // vscode项目环境配置
|   └── tasks.json      // vscode Task配置
├── coverage            // 单元测试覆盖率生成文件夹
├── dist                // 编译结果文件夹
├── docker              // docker相关文件
|   ├── compose-dev.yaml   // 本地开发环境docker compose配置文件
|   ├── compose-test.yaml   // 测试环境docker compose配置文件
|   ├── compose-prod.yaml  // 生产环境docker compose配置文件
|   ├── dev.Dockerfile  // 本地开发Dockerfile
|   ├── dist.Dockerfile // 文件分发部署Dockerfile
|   └── nodeModule.Dockerfile // node环境Dockerfile
├── docs                // 文档目录
├── src                 // 项目源文件
|   ├── app.ts          // 项目入口文件
|   ├── env.ts          // 环境变量检测、配置
|   ├── controllers     // 控制器文件夹
|   └── util            // 工具文件夹
│       └── logger.ts   // 日志工具
└── test                // 单元测试目录

```

## 开发指引

### 本地开发

- [x] 启动开发容器组

	`docker-compose -f docker/compose-dev.yaml up -d`

- [x] 编译/重启

	`./src`目录下所有文件变动将会使项目**自动**编译并重启  
	其他文件变动需要手动运行`docker-compose -f docker/compose-dev.yaml restart`

- [x] 调试
	1. 在vscode中调试  
		顶部菜单`调试`->`启动调试`（快捷键F5）
	2. 在Chrome DevTools中调试  
	   打开`chrome://inspect/#devices`并点击`Open dedicated DevTools for Node`

- [x] 文档编辑/预览

      打开`http://localhost:3000/swagger/`  
      打开`docs/api.json`并复制粘贴到`swagger-editor`  
      建议选择转换成`YAML`格式编辑  
      编辑后保存并替换`docs/api.json`  
      **TODO**自动加载转换保存

### 部署到测试环境

- [x] 文档查看
- [x] 主程序
- [ ] 基于文档的mock接口

### 部署到生产环境

- [x] 主程序