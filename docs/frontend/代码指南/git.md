# Git

`VS Code` 推荐安装以下插件:

- `GitLens`
- `Local History`

`WebStorm` 推荐安装以下插件:

- `GitToolBox`
- `Code Glance Pro`

`Git` 桌面端可视化工具:

- `Source Tree`
- `GitHub Desktop`

## Git 协作流程

- 仓库分 `test`、`dev` 和各功能分支, 功能分支命名格式为 `feat-xxx`, 如 `feat-新功能`、`feat-BUG 修复`
- `test` 分支只接受功能分支代码合并, 并用于发布到测试环境
- `dev` 分支只接受功能分支代码合并, 并用于发布到生产环境, 不允许在 `dev` 分支上修改代码
- 代码合并建议使用 `merge` 或 `merge --no-ff`, 不推荐使用 `rebase`
- 如出现合并冲突时, 须与冲突代码涉及人员沟通后处理合并冲突, 并自行测试无误后方可合并到 `test` 分支或 `dev` 分支
- 每次新功能或者 `BUG` 修复均从最新的 `dev` 分支起, 注意先拉取远程 `dev` 分支到本地
- 功能分支初步开发完毕后即可合并到 `test` 分支
- 功能分支测试通过并完成 `Code Review` 后即可合并到 `dev` 分支, 一定时间后可自行删除远程功能分支, 本地功能分支自行决定是否删除 (可删可不删)
- `test` 分支不可直接合并到 `dev` 分支
- `test` 分支如出现问题, TODO

**严禁**:

- 使用 `push --force` 强制推送代码
- 将 `test` 分支代码合并到 `dev` 分支
- 在 `test` 或 `dev` 分支上直接修改代码, 即任何新代码必须在功能分支上进行

## Code Review

功能分支在合并到 `dev` 分支之前, 须进行 `Code Review` 工作, 主要涉及以下几点:

- 关键代码是否有注释, 注释是否相对规范而不是空洞无物、不知所云或完全无用的注释
- 是否含未删除的 `console`、`debugger`、`TODO` 等无用代码
- 代码适当空行, 以提高代码可读性
- 变量命名、文件(夹)命名是否规范
- 代码简洁度, 尽可能使用简写语法, 尽可能使用函数式编程
- 通过 `eslint`、`sonarqube` 代码检测
- 单文件代码行数限制, 一般而言, 尽量不要超过一千行, 如超过, 在可行的范围内适当调整代码

## 示例

- [洁癖者用 Git：pull --rebase 和 merge --no-ff](http://hungyuhei.github.io/2012/08/07/better-git-commit-graph-using-pull---rebase-and-merge---no-ff.html)

切换到 dev 分支并拉取 dev 分支最新代码：

```bash
git checkout dev
git pull
# 或者使用 --rebase
# git pull --rebase
```

从本地 `dev` 分支起一个功能分支:

```bash
# 切换到 dev 分支
git checkout dev
# 拉取远程 dev 分支最新代码
git pull

# 基于本地 dev 分支起新功能分支并切至该分支
git checkout -b 'feat-新功能'
# 基于本地 dev 分支起新功能分支但不切至该分支
git checkeout 'feat-新起但不切至该功能分支'
```

删除分支:

```bash
# 删除本地分支
git branch -D 'feat-待删除功能分支'

# 删除远程分支
# 格式 git push <remote> --delete <branch>
git push origin --delete 'feat-待删除功能分支'
```

提交代码:

```bash
# type 提交类型
# scope 影响范围
# 简短描述, 最好不超过 60 个字, 可附带相关 BUG 号, 如禅道或 Jira ID
git commit -m '<type>(scope)：<subject>'
```

查看远程分支:

```bash
git remote -v
```

查看提交信息:

```bash
git log
```
