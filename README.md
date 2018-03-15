## Blog build with React and NodeJs

### Pre

NodeJs, Mongdb

### Start

Project clone:

```bash
git clone git@github.com:ivanberry/Amy.git
```

### start mongod

```bash
mongod --dbpath /your/db/path
```

Dependecy install:

```bash
cd server
npm install

cd client
npm install
```

### Run tests

Run tests seperately:

```bash
cd server
npm test
```

### Roadmap

- [ ] 前端
  - [ ] 编辑器
    - [x] markdown书写与预览支持。
    - [x] 从剪切板直接复制上传图片，并返回图片markdown格式，并插入输入域。
    - [x] 文章标签选择与删除
    - [ ] 编辑器样式美化

- [ ] 后端
  - [x] 用户管理：注册，登录，退出
  - [x] cookies session HTTP状态维护
  - [x] 新增标签
  - [x] 文章管理：新增，删除，修改
  - [x] 图片上传