# 历史版本
### 1.2.0 (2019-05-15)
- URL.get: 如果是json, 返回object, 否则非string
- Storage, Cookie: 支持非json对象


### 1.1.0 (2019-04-23)
- Load
	- css
	- cssCode 
	- js

### 1.0.0 (2019-03-10)
* `wya-utils` -> `@wya/utils`

> 原全部暴露方法，现分类处理

- Utils
	- def,
	- isObj,
	- hasOwn,
	- preZero,
	- cloneDeep,
	- cloneDeepEasier,
	- createMixins,
	- formatMoney <- getFormatInputMoney
	- canvas2file <- getCroppedImg
	- getWordsLength

- Storage, Cookie
	- get <- getItem, getCookie
	- set <- setItem, setCookie
	- remove <- delItem, delCookie
	- setVersion

- Device
	- androidChrome: false,
    - ipad: false,
    - iphone: false,
    - android: false,
    - ios: false,
    - webView: null,
    - wechat: false, <- weixin
    - touch: false,
    - ~~todo: xx版本号~~

- RegEx
	- set <- changeObjRegex
	- validator <- dataValidity
	- num <- objRegex.validNum.regex 以下相同规则
	- integer
	- email
	- date
	- time
	- IDCard
	- price
	- mobile
	- phone
	- postalcode <- postalCode
	- zipcode <- zipCode
	- wechat <- weChat
	- name

- URL
	- merge <- 原getConstructUrl, getParseUrl在此基础上修改
	- parse <- getParseUrl
	- get <- getUrlParam

- Calc <- acc
	- add
	- sub 
	- mul
	- div
	- val
	- extend

### 0.1.0 (2018-01-02)

* 添加仓库
