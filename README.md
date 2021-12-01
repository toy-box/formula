# toybox-formula

## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```

# 特殊函数

IF 和 SWITCH 返回类型 UNKNOW  
TODAY 和 NOW 没有入参

暂不支持  
TIMEVALUE
CEILINGMATH  
FLOORMATH  
SPLIT  
INCLUDES

# Formula

## 1.BaseMath

1  
"aa"  
current.id  
$user.name  
1 + 2 _ 3 / 2  
(1 _ 2) + $current.id

## 2.Function

COUNT(1,2)  
COUNT(1,2,current.id)  
COUNT(1,2,1+2)  
COUNT(1,2,SUM(1,2))

## 3.Compare

1. (1+20) +179 > 199
2. 199 < 229
3. 179 = $current.id
4. 179 <> 199
5. (1+20) +179 >= 199
6. 179 <= current.id

- '> < >= <=' 仅支持两个数字之间的比较
- '= <>' 支持两个数字、boolean、引用类型之间的比较
