# Coding Guide 代码指南

**绿环**代码指南, 具体规则如下:

- [Coding Style 代码风格](coding-style.md)
- [CSS](css.md)
- [Directory Structure 项目目录结构](directory-structure.md)
- [Git](git.md)
- [HTML](html.md)
- [JavaScript](js.md)
- [React](react.md)
- [Tools 代码检查/格式化等工具](tools)
- [TypeScript](ts.md)
- [Vitepress](vitepress.md)
- [Vue](vue.md)

## 参考规范

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Google Style Guide](https://github.com/google/styleguide)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

## 推荐阅读

- [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) 《代码整洁之道》
- [Refactoring: Improving the Design of Existing Code](https://www.amazon.com/Refactoring-Improving-Design-Existing-Code/dp/0201485672) 《重构: 改善既有代码》
- [Algorithms](https://www.amazon.com/Algorithms-Algorithms_4-Robert-Sedgewick-ebook/dp/B004P8J1NA) 《算法》
- [Code Complete: A Practical Handbook of Software Construction](https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670)《代码大全》
- [Clean Architecture](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164) 《架构整洁之道》

### 算法

- [Hello 算法](https://www.hello-algo.com/)

### 设计模式

- [Design Patterns - refactoring.guru](https://refactoring.guru/design-patterns)
- [patterns.dev](https://www.patterns.dev/)

### 三大编程范式

- `SP (Structrued Programming)` **结构化编程**
- `OOP (Object Oriented Programming)` **面向对象编程**
- `FP (Functional Programming)` **函数式编程**

### 软件设计五大原则

- `SRP` (Single Responsibility Principle) **单一职责**原则

  一个模块应只有一个功能。

- `OCP` (Open Closed Principle) **开闭**原则

  系统应预留接口, 以便在不修改原有代码的情况下进行功能扩展。

- `LSP` (Liskov Substitution Principle) **里氏替换**原则

  子类不能改变父类的语义, 能用父类的地方, 一定也能用子类。

- `ISP` (Interface Segregation Principle) **接口隔离**原则

  客户端不应被迫使用对其而言无用的方法或功能, 应尽量将接口拆分成更小的、更具体的接口。

- `DIP` (Dependence Inversion Principle) **依赖反转**原则, `DI` (`Dependency Injection` 依赖注入) 和 `IOC` (`Inversion of Control` 控制反转)

  设计代码结构时, 高层模块不应该依赖底层模块, 二者都应该依赖其抽象。 抽象不应该依赖细节, 细节应该依赖抽象。

### 架构设计

- `DDD (Domain Driven Design)` 领域驱动设计
- `TDD (Test Driven Design)` 测试驱动设计
- `BDD (Behavior Driven Design)` 行为驱动设计
