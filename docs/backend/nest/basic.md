# Nest Basic

## Reference

- [nestjs docs](https://docs.nestjs.com)
- [Day43】ChatGPT請教教我：NestJS！（二）- Controller & 裝飾器](https://ithelp.ithome.com.tw/m/articles/10340431)
- [nest-docker-postgres-prisma 源码](https://github.com/tomwray13/nest-docker-postgres-prisma) [NestJS, Redis and Postgres local development with Docker Compose 文字教程](https://www.tomray.dev/nestjs-docker-compose-postgres)

## 说明

- 推荐使用 `class` 作为 `DTO`, 如 `class UserDto`
- 如果使用 `TypeORM` 或 `Prisma`, 则使用 `*.entity.ts` 文件定义
- 使用 `class-validator` 和 `class-transformer` 对 `DTO` 进行校验
- 使用 `@nestjs/schedule` 实现定时任务
- 使用 `axios` 和 `@nestjs/axios` 发起 `HTTP` 请求
- 使用 `@nestjs/throttler` 进行限流 (`Rate Limiting`), `JAVA` 可使用高性能限流器[Guava RateLimiter](https://github.com/google/guava/blob/master/guava/src/com/google/common/util/concurrent/RateLimiter.java)
- 使用 `helmet` 或 `@fastify/helmet` 配置更安全的 `Headers`
- `nestjs` 提供了 [devtools](https://devtools.nestjs.com/), 可以可视化展示和调试
- 使用 `@nestjs/swagger` 展示 `API` 文档和在线调试 ([OpenAPI](https://www.openapis.org/))

文件后缀说明:

- `*.module.ts` 模块
- `*.controller.ts` 控制器
- `*.service.ts` 服务
- `*.provider.ts` 提供者
- `*.middleware.ts` 中间件
- `*.decorator.ts` 装饰器
- `*.guard.ts` 守卫
- `*.pipe.ts` 管道
- `*.interceptor.ts` 拦截器
- `*.filter.ts` 异常过滤 (处理) 器
- `*.dto.ts` `DTO`, `Data Transfer Object` 数据传输对象
- `*.entity.ts` `Entity` 实体
- `*.interface.ts` 接口
- `*.spec.ts` 测试文件

## 接收参数

- [Custom route decorators](https://docs.nestjs.com/custom-decorators)

### @Param

### @Query

### @Body

### @Headers

```ts

```

## 作用域

- `method scoped` controller/resolver/gateway
- `controller scoped`
- `global scoped`

### 控制器

`controller`

### 方法

### 全局

## Use Decorators

`Use` 系列装饰器:

- `UseGuards` 及 `UseGlobalGuards`
- `UsePipes` 及 `UseGlobalPipes`
- `UseInterceptors` 及 `useGlobalInterceptors`
- `UseFilters` 及`UseGlobalFilters`

### UseGuards

全局:

```ts
// main.ts
app.useGlobalGuards(new RoleGuard(new Reflector()));
// app.useGlobalGuards(new RoleGuard(app.get(Reflector)));
```

```ts
// app.module.ts
@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
```

### UsePipes

全局:

```ts
// main.ts
app.useGlobalPipes(new CustomValidationPipe());
```

```ts
// app.module.ts
@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: CustomValidationPipe,
    },
  ],
})
```

### UseInterceptors

全局:

```ts
// main.ts
app.useGlobalInterceptors(new LoggerInterceptor());
```

```ts
// app.module.ts
@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    },
  ],
})
```

### UseFilters

全局:

```ts
// main.ts
app.UseGlobalFilters(new HttpExceptionFilter());
```

```ts
// app.module.ts
@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
```

## Header

`controller` 中设置响应头:

```ts
@Get()
@Header('Content-Type', 'text/plain')
@Header('Content-Disposition', 'attachment; filename="README.md"')
```

或者在路由内:

```ts
// express 写法
// TODO fastify 写法
@Get()
download(@Res({ passthrough: true }) res: Response) {
	res.set({
		'Content-Type': 'text/plain',
		'Content-Disposition': 'attachment; filename="README.md"',
	})
}
```

在服务内:

```ts
// download.service.ts
import { StreamableFile } from '@nestjs/common';
return new StreamableFile(Buffer.from('# README'), {
	type: 'text/plain',
	disposition: 'attachment; filename=${README.md}',
}
```

## Redis

- [Redis.io](https://redis.io/)
- [redis - docker](https://hub.docker.com/_/redis)
- [Redis Insight](https://redis.io/insight/)

`mac` 安装 `Redis`:

```bash
brew install redis
```

```bash
# 1
brew service start redis
# 2
# http://download.redis.io/redis-stable/redis.conf
redis-server /usr/local/etc/redis.conf
```

```bash
mkdir /docker-data/redis

# docker run --name redis -p 6379:6379 -d redis --restart=always --requirepass "password"
docker run --name redis \
-p 6379:6379 \
-v /docker-data/redis/redis.conf:/etc/redis/redis.conf \
-v /docker-data/redis:/data \
-d redis redis-server /etc/redis/redis.conf --appendonly yes
```

- `-p 6379 6379` 端口映射
- `-v` 前者为宿主机, 后者为 `docker` 容器
- `-d redis redis-server /etc/redis/redis.conf` 以容器内 `/etc/redis/redis.conf` 配置文件在后台启动 `docker`
- `--appendonly yes` 开启 `redis` 持久化
- `--restart` 设置重启策略
- `--requirepass` 设置密码

## class-validator

- [Validation decorators](https://github.com/typestack/class-validator?tab=readme-ov-file#validation-decorators)
