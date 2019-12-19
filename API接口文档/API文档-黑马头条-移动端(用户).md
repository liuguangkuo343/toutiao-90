
 <h1 class="curproject-name"> 黑马头条-移动端 </h1> 



# 门户

## 查询所有已实现接口
<a id=查询所有已实现接口> </a>
### 基本信息

**Path：** /app/

**Method：** GET

**接口描述：**
<p>线上接口地址&nbsp;<a href="http://ttapi.research.itcast.cn/app/">http://ttapi.research.itcast.cn/app/</a><br data-tomark-pass=""><br>
<br data-tomark-pass=""><br>
返回已上线接口地址，形如：</p>
<pre><code data-language="json" class="lang-json">{
    "route_map":"/",
    "static":"/static/&lt;path:filename&gt;",
    "user.smsverificationcode":"/v1_0/sms/codes/&lt;mobile:mobile&gt;"
 }

</code></pre>
<p>键为接口名称<br>
值为接口路径</p>


### 请求参数

# 通知

## 获取系统公告内容
<a id=获取系统公告内容> </a>
### 基本信息

**Path：** /app/v1_0/announcements/:target

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/announcements/:target

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>507 数据库错误</li>
<li>400 请求参数错误</li>
<li><strong>200 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  公告id |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>公告id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>标题</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> content</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>内容</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> pubdate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>发布时间</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取系统公告列表
<a id=获取系统公告列表> </a>
### 基本信息

**Path：** /app/v1_0/announcements

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/announcements

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>507 数据库错误</li>
<li>400 请求参数错误</li>
<li><strong>200 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |   |  页数，不传默认为1 |
| per_page | 否  |   |  每页数量，不传每页数量由后端决定 |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>当前页数</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> per_page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>每页数量</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> results</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-2-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>标题</span></td><td key=5></td></tr><tr key=0-1-2-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>公告id</span></td><td key=5></td></tr><tr key=0-1-2-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> pubdate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>发布时间</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>公告总数</span></td><td key=5></td></tr>
               </tbody>
              </table>

# 搜索

## 删除用户搜索历史
<a id=删除用户搜索历史> </a>
### 基本信息

**Path：** /app/v1_0/search/histories

**Method：** DELETE

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/search/histories

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>507 数据库错误</li>
<li>401 用户认证失败</li>
<li><strong>204 取消成功，注意这是本接口成功调用的返回状态码，body没有数据（没有默认的message）</strong></li>
</ul>
<h3></h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/x-www-form-urlencoded | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户Token |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取搜索结果
<a id=获取搜索结果> </a>
### 基本信息

**Path：** /app/v1_0/search

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/search

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>507 数据库错误</li>
<li>400 请求参数错误</li>
<li>401 若传递token，但token过期，则返回401</li>
<li><strong>200 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |   |  身份token，非必须 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |   |  页数，不传默认为1 |
| per_page | 否  |   |  每页数量，不传每页数量由后端决定 |
| q | 是  |   |  搜索关键词 |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>当前页数</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> per_page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>每页数量</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> results</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-2-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> art_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章id</span></td><td key=5></td></tr><tr key=0-1-2-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章标题</span></td><td key=5></td></tr><tr key=0-1-2-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者id</span></td><td key=5></td></tr><tr key=0-1-2-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者名称</span></td><td key=5></td></tr><tr key=0-1-2-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> comm_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论数量</span></td><td key=5></td></tr><tr key=0-1-2-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> pubdate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>发布时间</span></td><td key=5></td></tr><tr key=0-1-2-6><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> cover</span></td><td key=1><span>object</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面</span></td><td key=5></td></tr><tr key=0-1-2-6-0><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面类型，0-无封面，1-1张封面图片，3-3张封面</span></td><td key=5></td></tr><tr key=0-1-2-6-1><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> images</span></td><td key=1><span>string []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面图片</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr><tr key=0-1-2-7><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> like_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>点赞数</span></td><td key=5></td></tr><tr key=0-1-2-8><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> collect_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>收藏数</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章总数</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取用户搜索历史
<a id=获取用户搜索历史> </a>
### 基本信息

**Path：** /app/v1_0/search/histories

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/search/histories

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>507 数据库错误</li>
<li>401 用户认证失败</li>
<li><strong>200 OK</strong></li>
</ul>
<h3></h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户Token |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> keywords</span></td><td key=1><span>string []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>搜索关键词</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr>
               </tbody>
              </table>

## 获取联想建议（自动补全）
<a id=获取联想建议（自动补全）> </a>
### 基本信息

**Path：** /app/v1_0/suggestion

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/suggestion

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>507 数据库错误</li>
<li>400 请求参数有误</li>
<li><strong>200 OK</strong></li>
</ul>
<h3></h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| q | 是  |   |  请求的前缀词句 |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> options</span></td><td key=1><span>string []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>选项词条</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr>
               </tbody>
              </table>

# IM通讯

## 在线消息通知
<a id=在线消息通知> </a>
### 基本信息

**Path：** /app/socket.io/

**Method：** GET

**接口描述：**
<h3>1. 此接口为 socket.io 通讯 ， 非HTTP协议， 须使用socket.io客户端，请忽略请求方式</h3>
<h3>2. 接口路径（重要）</h3>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn

</code></pre>
<h5></h5>
<h3>3. 用户token与匿名id必传其一，身份错误会拒绝连接</h3>
<h3>4. 接收事件(event)</h3>
<h5><code data-backticks="1">"following notify"</code> 关注通知</h5>
<p><em>返回字段 <code data-backticks="1">user_id</code>， <code data-backticks="1">user_name</code>， <code data-backticks="1">user_photo</code>， <code data-backticks="1">timestamp</code></em></p>
<h5><code data-backticks="1">"liking notify"</code> 点赞通知</h5>
<p><em>返回字段 <code data-backticks="1">user_id</code>， <code data-backticks="1">user_name</code>， <code data-backticks="1">user_photo</code>， <code data-backticks="1">art_id</code>, <code data-backticks="1">art_title</code>, <code data-backticks="1">timestamp</code></em></p>
<h5><code data-backticks="1">"comment notify"</code> 评论通知</h5>
<p><em>返回字段 <code data-backticks="1">user_id</code>， <code data-backticks="1">user_name</code>， <code data-backticks="1">user_photo</code>， <code data-backticks="1">art_id</code>, <code data-backticks="1">art_title</code>, <code data-backticks="1">timestamp</code></em></p>


### 请求参数
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| token | 否  |  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户token  token与匿名id必传其一  （不用包含Bearer 前缀） |
| a | 否  |   |  匿名id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> msg</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>聊天输入内容</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> timestamp</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>聊天发送时间戳</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> user_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>执行操作的用户id</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> user_name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户名</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> user_photo</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户头像</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> art_id</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>文章id</span></td><td key=5></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> art_title</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>文章标题</span></td><td key=5></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> timestamp</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>回复时间戳</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 在线通知测试接口
<a id=在线通知测试接口> </a>
### 基本信息

**Path：** /app/imtest/:event

**Method：** GET

**接口描述：**
<h3>liking notify 点赞通知</h3>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/app/imtest/l
</code></pre>
<h3>comment notify  评论通知</h3>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/app/imtest/c
</code></pre>
<h3>following notify  关注通知</h3>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/app/imtest/f
</code></pre>


### 请求参数
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| event |  f 或 l 或 c 或 |  通知事件 |

## 聊天机器人
<a id=聊天机器人> </a>
### 基本信息

**Path：** /app/socket.io/

**Method：** POST

**接口描述：**
<h3>1. 此接口为 socket.io 通讯 ， 非HTTP协议， 须使用socket.io客户端，请忽略请求方式</h3>
<h3>2. 接口路径（重要）</h3>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn

</code></pre>
<h3>3. token与匿名id必传其一，身份错误会拒绝连接</h3>
<h3>4. 发送与接收消息的事件(event) 均为<code data-backticks="1">message</code></h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| token | 否  |  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户token  （token与匿名id必传其中之一）不用包含Bearer前缀 |
| a | 否  |   |  匿名用户id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> msg</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>聊天输入内容</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> timestamp</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>聊天发送时间戳</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> msg</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>机器人回复内容</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> timestamp</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>回复时间戳</span></td><td key=5></td></tr>
               </tbody>
              </table>

# 用户

## 编辑用户个人资料（包含实名认证）
<a id=编辑用户个人资料（包含实名认证）> </a>
### 基本信息

**Path：** /app/v1_0/user/profile

**Method：** PATCH

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/profile

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误, 图片保存失败</li>
<li><strong>200 OK</strong></li>
</ul>
<h3>3 请求的字段参数 发送几个保存几个，不发送的不修改</h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>昵称</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> photo</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头像 base64编码处理</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> gender</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>性别，0-男，1-女</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> birthday</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>生日，格式'2018-12-20'</span></td><td key=5></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> real_name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>真实姓名</span></td><td key=5></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> id_number</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>身份证号</span></td><td key=5></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> id_card_front</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>身份证正面照片 base64编码处理</span></td><td key=5></td></tr><tr key=0-7><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> id_card_back</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>身份证背面照片 base64编码处理</span></td><td key=5></td></tr><tr key=0-8><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> id_card_handheld</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>手持身份证照片 base64编码处理</span></td><td key=5></td></tr><tr key=0-9><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> intro</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>个人介绍</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>用户名</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头像url地址</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> gender</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>性别，0-男，1-女</span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> birthday</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>生日，格式 '2018-12-20'</span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> real_name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>真实用户名</span></td><td key=5></td></tr><tr key=0-1-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id_number</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>身份证号</span></td><td key=5></td></tr><tr key=0-1-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id_card_front</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>身份证正面照片url</span></td><td key=5></td></tr><tr key=0-1-8><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id_card_back</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>身份证背面照片url</span></td><td key=5></td></tr><tr key=0-1-9><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id_card_handheld</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>手持身份证照片url</span></td><td key=5></td></tr><tr key=0-1-10><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> intro</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>个人介绍</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 修改指定用户频道
<a id=修改指定用户频道> </a>
### 基本信息

**Path：** /app/v1_0/user/channels/:target

**Method：** PUT

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/channels/:target

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误</li>
<li><strong>201 OK</strong></li>
</ul>
<h3>3 本接口仅修改对应用户频道的顺序。</h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  频道id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> seq</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>顺序序号</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>频道id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> seq</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>顺序序号</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 删除指定用户频道
<a id=删除指定用户频道> </a>
### 基本信息

**Path：** /app/v1_0/user/channels/:target

**Method：** DELETE

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/channels/:target

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误</li>
<li><strong>204 删除成功&nbsp;，注意这是本接口成功调用的返回状态码，body没有数据（没有默认的message）</strong></li>
</ul>
<h3>3 本接口仅删除对应用户频道的顺序。</h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/x-www-form-urlencoded | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  用户频道id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 刷新用户token
<a id=刷新用户token> </a>
### 基本信息

**Path：** /app/v1_0/authorizations

**Method：** PUT

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/authorizations

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>403&nbsp; refresh_token 未携带或已过期</li>
<li>507 数据库错误</li>
<li><strong>201 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/x-www-form-urlencoded | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  refresh_token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>关注目标（被关注的用户id）</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> token</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户token</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 取消关注用户
<a id=取消关注用户> </a>
### 基本信息

**Path：** /app/v1_0/user/followings/:target

**Method：** DELETE

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/followings/:target

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li><strong>204 取消成功，注意这是本接口成功调用的返回状态码，body没有数据（没有默认的message）</strong></li>
<li>401 用户未认证</li>
<li>404 访问路径错误</li>
<li>507 数据库异常</li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/x-www-form-urlencoded | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  目标用户（被取消关注的用户id） |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 取消拉黑用户
<a id=取消拉黑用户> </a>
### 基本信息

**Path：** /app/v1_0/user/blacklists/:target

**Method：** DELETE

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/blacklists/:target

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li><strong>204 取消成功，注意这是本接口成功调用的返回状态码，body没有数据（没有默认的message）</strong></li>
<li>401 用户未认证</li>
<li>404 访问路径错误</li>
<li>507 数据库异常</li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/x-www-form-urlencoded | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  被拉黑的用户id |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 批量修改用户频道列表（部分覆盖）
<a id=批量修改用户频道列表（部分覆盖）> </a>
### 基本信息

**Path：** /app/v1_0/user/channels

**Method：** PATCH

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/channels

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误</li>
<li><strong>201 OK</strong></li>
</ul>
<h3>3 本接口对收到的用户频道 新增的保存，原有的覆盖顺序序号，但不会删除未涉及到的用户频道。</h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> channels</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户关注的频道列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-0-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>频道id</span></td><td key=5></td></tr><tr key=0-0-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> seq</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>顺序序号</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> channels</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>频道id</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> seq</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>顺序序号</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 批量修改用户频道列表（重置式）
<a id=批量修改用户频道列表（重置式）> </a>
### 基本信息

**Path：** /app/v1_0/user/channels

**Method：** PUT

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/channels

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误</li>
<li><strong>201 OK</strong></li>
</ul>
<h3>3 本接口会先删除用户原有的关注频道，再重新保存用户频道，最终保存的用户频道仅为此接口收到的数据。可作为用户编辑频道时一次做了多个频道的顺序修改、新增、删除等行为的接口。也可作为用户初始频道设置</h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> channels</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户关注的频道列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-0-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>频道id</span></td><td key=5></td></tr><tr key=0-0-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> seq</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>顺序序号</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> channels</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>频道id</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> seq</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>顺序序号</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 批量删除用户频道列表
<a id=批量删除用户频道列表> </a>
### 基本信息

**Path：** /app/v1_0/user/channels

**Method：** DELETE

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/channels

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误</li>
<li><strong>204 删除成功&nbsp;，注意这是本接口成功调用的返回状态码，body没有数据（没有默认的message）</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> channels</span></td><td key=1><span>integer []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户关注的频道列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>integer</span></p></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 拉黑用户
<a id=拉黑用户> </a>
### 基本信息

**Path：** /app/v1_0/user/blacklists

**Method：** POST

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/blacklists

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误</li>
<li><strong>201 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>关注目标（被关注的用户id）</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>被拉黑的用户id</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 用户认证（登录注册）
<a id=用户认证（登录注册）> </a>
### 基本信息

**Path：** /app/v1_0/authorizations

**Method：** POST

**接口描述：**
<h3>1. 线上地址</h3>
<p><a href="http://ttapi.research.itcast.cn/app/v1_0/authorizations">http://ttapi.research.itcast.cn/app/v1_0/authorizations</a></p>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 201 OK</strong><br>
2. 400 请求参数错误<br>
&nbsp; &nbsp; &nbsp; &nbsp; 包括：参数缺失、手机号格式不正确、验证码失效等<br>
3. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<ol>
<li><code data-backticks="1">token</code>用于访问需要身份认证的普通接口，有效期2小时</li>
<li><code data-backticks="1">refresh_token</code> 用于在token过期后，获取新的用户token，有效期14天</li>
</ol>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> mobile</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>手机号</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> code</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>短信验证码</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> token</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户token令牌</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> refresh_token</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用于刷新token的令牌</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 关注用户
<a id=关注用户> </a>
### 基本信息

**Path：** /app/v1_0/user/followings

**Method：** POST

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/followings

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误</li>
<li><strong>201 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>关注目标（被关注的用户id）</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>被关注的用户id</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 编辑用户照片资料（头像、身份证照片）
<a id=编辑用户照片资料（头像、身份证照片）> </a>
### 基本信息

**Path：** /app/v1_0/user/photo

**Method：** PATCH

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/photo

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误, 图片保存失败</li>
<li><strong>200 OK</strong></li>
</ul>
<h3>3 请求的字段参数 发送几个保存几个，不发送的不修改</h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  multipart/form-data | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**Body**

| 参数名称  | 参数类型  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| photo | file  |  否 |    |  头像 |
| id_card_front | file  |  否 |    |  身份证正面照片 |
| id_card_back | file  |  否 |    |  身份证背面照片 |
| id_card_handheld | file  |  否 |    |  手持身份证照片 |



### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头像url地址</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id_card_front</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>身份证正面照片url</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id_card_back</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>身份证背面照片url</span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id_card_handheld</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>手持身份证照片url</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取指定用户信息
<a id=获取指定用户信息> </a>
### 基本信息

**Path：** /app/v1_0/users/:target

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/users/:target

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>507 数据库错误</li>
<li><strong>200 OK</strong></li>
</ul>
<h3>3 不强制用户登录，匿名用户 关注状态默认否</h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token，可选，登录用户会额外查询是否关了注目标用户 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  目标用户id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>关注目标（被关注的用户id）</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户名</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户头像</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> is_media</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否是自媒体，0-否，1-是</span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> intro</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>简介</span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> certi</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>自媒体认证说明</span></td><td key=5></td></tr><tr key=0-1-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> art_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>发布文章数</span></td><td key=5></td></tr><tr key=0-1-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> follow_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>关注的数目</span></td><td key=5></td></tr><tr key=0-1-8><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> fans_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>被关注的数目（粉丝数目）</span></td><td key=5></td></tr><tr key=0-1-9><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> like_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>被点赞数</span></td><td key=5></td></tr><tr key=0-1-10><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> is_following</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否关注了用户</span></td><td key=5></td></tr><tr key=0-1-11><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> is_blacklist</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否拉黑了用户</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取用户个人资料
<a id=获取用户个人资料> </a>
### 基本信息

**Path：** /app/v1_0/user/profile

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/profile

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误</li>
<li><strong>200 OK</strong></li>
</ul>
<h3></h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>关注目标（被关注的用户id）</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户名</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>头像</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> mobile</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>手机号</span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> gender</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>性别，0-男，1-女</span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> birthday</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>生日，格式 '2018-12-20'</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取用户的关注列表
<a id=获取用户的关注列表> </a>
### 基本信息

**Path：** /app/v1_0/user/followings

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/followings

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误</li>
<li><strong>200 OK</strong></li>
</ul>
<h3></h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |   |  页数 |
| per_page | 否  |   |  每页数量 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>关注目标（被关注的用户id）</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>所有关注的用户总数</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>当前页数</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> per_page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>每页数量</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> results</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>关注的用户</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-3-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>关注的用户id</span></td><td key=5></td></tr><tr key=0-1-3-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>关注的用户名</span></td><td key=5></td></tr><tr key=0-1-3-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>头像</span></td><td key=5></td></tr><tr key=0-1-3-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> fans_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>粉丝数</span></td><td key=5></td></tr><tr key=0-1-3-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> mutual_follow</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否互相关注</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取用户的粉丝列表
<a id=获取用户的粉丝列表> </a>
### 基本信息

**Path：** /app/v1_0/user/followers

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/followings

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误</li>
<li><strong>200 OK</strong></li>
</ul>
<h3></h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |   |  页数 |
| per_page | 否  |   |  每页数量 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>关注目标（被关注的用户id）</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>所有粉丝的用户总数</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>当前页数</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> per_page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>每页数量</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> results</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>粉丝用户</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-3-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>粉丝用户id</span></td><td key=5></td></tr><tr key=0-1-3-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>粉丝用户名</span></td><td key=5></td></tr><tr key=0-1-3-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>头像</span></td><td key=5></td></tr><tr key=0-1-3-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> fans_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>粉丝数</span></td><td key=5></td></tr><tr key=0-1-3-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> mutual_follow</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否互相关注</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取用户的统计数据
<a id=获取用户的统计数据> </a>
### 基本信息

**Path：** /app/v1_0/user/figure

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/figure

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误</li>
<li><strong>200 OK</strong></li>
</ul>
<h3></h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>关注目标（被关注的用户id）</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> fans_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>粉丝数量</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> read_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作品被阅读的数量</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取用户自己信息
<a id=获取用户自己信息> </a>
### 基本信息

**Path：** /app/v1_0/user

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户认证失败</li>
<li>507 数据库错误</li>
<li><strong>200 OK</strong></li>
</ul>
<h3>3 强制用户登录</h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token，必传 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>关注目标（被关注的用户id）</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户名</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户头像</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> is_media</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否是自媒体，0-否，1-是</span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> intro</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>简介</span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> certi</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>自媒体认证说明</span></td><td key=5></td></tr><tr key=0-1-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> art_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>发布文章数</span></td><td key=5></td></tr><tr key=0-1-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> follow_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>关注的数目</span></td><td key=5></td></tr><tr key=0-1-8><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> fans_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>被关注的数目（粉丝数目）</span></td><td key=5></td></tr><tr key=0-1-9><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> like_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>被点赞数</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取用户频道列表
<a id=获取用户频道列表> </a>
### 基本信息

**Path：** /app/v1_0/user/channels

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/channels

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>507 数据库错误</li>
<li><strong>200 OK</strong></li>
</ul>
<h3>3 不强制用户登录，匿名用户返回后台设置的默认频道列表</h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户Token，未登录用户为空 |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> channels</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>频道列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>频道ID</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>频道名称</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取短信验证码
<a id=获取短信验证码> </a>
### 基本信息

**Path：** /app/v1_0/sms/codes/:mobile

**Method：** GET

**接口描述：**
<h4>1 线上接口路径</h4>
<p><a href="http://ttapi.research.itcast.cn/app/v1_0/sms/codes/:mobile">http://ttapi.research.itcast.cn/app/v1_0/sms/codes/:mobile</a></p>
<h4>2 接口访问次数受限</h4>
<pre><code>每手机号每分钟1次

</code></pre>
<h4>3 返回HTTP状态码</h4>
<ol>
<li>200 OK</li>
<li>404 手机号不正确</li>
<li>429 接口访问次数受限 ， body数据返回</li>
</ol>
<pre><code data-language="json" class="lang-json">{
   "message": "Too many requests."
}

</code></pre>
<ol>
<li>507 服务器数据库异常</li>
</ol>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| mobile |  18612345678 |  手机号 |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-0-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> mobile</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>手机号</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3>OK</td><td key=4><span>提示信息 ok</span></td><td key=5><p key=2><span style="font-weight: '700'">枚举: </span><span>OK</span></p></td></tr>
               </tbody>
              </table>

## 设置用户频道列表（增量式）
<a id=设置用户频道列表（增量式）> </a>
### 基本信息

**Path：** /app/v1_0/user/channels

**Method：** POST

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/channels

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>409 已存在用户关注的频道，冲突</li>
<li>507 数据库错误</li>
<li><strong>201 OK</strong></li>
</ul>
<h3>3 本接口仅保存数据，不会覆盖用户原有已关注的频道，遇到已经保存过的数据会返回409，可作为用户初次设置频道或新增频道使用</h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户令牌token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> channels</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户关注的频道列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-0-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>频道id</span></td><td key=5></td></tr><tr key=0-0-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> seq</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>顺序序号</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> channels</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>频道id</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> seq</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>顺序序号</span></td><td key=5></td></tr>
               </tbody>
              </table>

# 新闻

## 添加评论或评论回复
<a id=添加评论或评论回复> </a>
### 基本信息

**Path：** /app/v1_0/comments

**Method：** POST

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/comments

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>403 文章已关闭评论</li>
<li>507 数据库错误</li>
<li><strong>201 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论的目标id（评论文章即为文章id，对评论进行回复则为评论id）</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> content</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论内容</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> art_id</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>文章id，对评论内容发表回复时，需要传递此参数，表明所属文章id。对文章进行评论，不要传此参数。</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> com_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>新建的评论id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论所属的目标id</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> art_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论所属的文章id</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 举报文章
<a id=举报文章> </a>
### 基本信息

**Path：** /app/v1_0/article/reports

**Method：** POST

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/article/reports

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>409 此用户已举报过该文章（冲突）</li>
<li>507 数据库错误</li>
<li><strong>201 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>举报的文章id</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> type</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>举报类型：
0-其他问题，1-标题夸张，2-低俗色情，3-错别字多，4-旧闻重复，5-广告软文，6-内容不实，7-涉嫌违法犯罪，8-侵权'
</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> remark</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>其他问题 的附加说明</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>举报的文章id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>举报类型</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 取消对文章不喜欢
<a id=取消对文章不喜欢> </a>
### 基本信息

**Path：** /app/v1_0/article/dislikes/:target

**Method：** DELETE

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/article/dislikes/:target

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li><strong>204 取消成功，注意这是本接口成功调用的返回状态码，body没有数据（没有默认的message）</strong></li>
<li>401 用户未认证</li>
<li>404 访问路径错误</li>
<li>507 数据库异常</li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/x-www-form-urlencoded | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户身份token |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  文章id |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 取消对文章点赞
<a id=取消对文章点赞> </a>
### 基本信息

**Path：** /app/v1_0/article/likings/:target

**Method：** DELETE

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/article/likings/:target

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li><strong>204 取消成功，注意这是本接口成功调用的返回状态码，body没有数据（没有默认的message）</strong></li>
<li>401 用户未认证</li>
<li>404 访问路径错误</li>
<li>507 数据库异常</li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/x-www-form-urlencoded | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户身份token |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  文章id |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 取消对评论或评论回复点赞
<a id=取消对评论或评论回复点赞> </a>
### 基本信息

**Path：** /app/v1_0/comment/likings/:target

**Method：** DELETE

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/comment/likings/:target

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li><strong>204 取消成功，注意这是本接口成功调用的返回状态码，body没有数据（没有默认的message）</strong></li>
<li>401 用户未认证</li>
<li>404 访问路径错误</li>
<li>507 数据库异常</li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/x-www-form-urlencoded | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户身份token |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  要取消点赞的评论id或评论回复id |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 取消收藏文章
<a id=取消收藏文章> </a>
### 基本信息

**Path：** /app/v1_0/article/collections/:target

**Method：** DELETE

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/article/collections/:target

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li><strong>204 取消成功，注意这是本接口成功调用的返回状态码，body没有数据（没有默认的message）</strong></li>
<li>401 用户未认证</li>
<li>404 访问路径错误</li>
<li>507 数据库异常</li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/x-www-form-urlencoded | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户身份token |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |   |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 对文章不喜欢
<a id=对文章不喜欢> </a>
### 基本信息

**Path：** /app/v1_0/article/dislikes

**Method：** POST

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/article/dislikes

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误</li>
<li><strong>201 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>不喜欢的文章id</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> target</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>不喜欢的文章id</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 对文章点赞
<a id=对文章点赞> </a>
### 基本信息

**Path：** /app/v1_0/article/likings

**Method：** POST

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/article/likings

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误</li>
<li><strong>201 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>点赞的文章id</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> target</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>点赞的文章id</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 对评论或评论回复点赞
<a id=对评论或评论回复点赞> </a>
### 基本信息

**Path：** /app/v1_0/comment/likings

**Method：** POST

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/comment/likings

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误</li>
<li><strong>201 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>点赞的评论id</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> target</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>点赞的评论id</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 收藏文章
<a id=收藏文章> </a>
### 基本信息

**Path：** /app/v1_0/article/collections

**Method：** POST

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/article/collections

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>401 用户未认证</li>
<li>507 数据库错误</li>
<li><strong>201 OK</strong></li>
</ul>
<h3>3 在请求头Trace 中传递collect埋点参数</h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户身份token |
| Trace  |   | 是  |   |  collect埋点参数 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>收藏的目标文章id</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>收藏的文章id</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 全部频道列表
<a id=全部频道列表> </a>
### 基本信息

**Path：** /app/v1_0/channels

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/channels

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>507 数据库错误</li>
<li><strong>200 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> channels</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>频道id</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>频道名称</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取当前用户文章列表
<a id=获取当前用户文章列表> </a>
### 基本信息

**Path：** /app/v1_0/user/articles

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/articles

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>507 数据库错误</li>
<li>401 用户未认证</li>
<li>400 请求参数错误</li>
<li><strong>200 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户token |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |   |  页数，不传默认为1 |
| per_page | 否  |   |  每页数量，不传每页数量由后端决定 |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>当前页数</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> per_page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>每页数量</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> results</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-2-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> art_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章id</span></td><td key=5></td></tr><tr key=0-1-2-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章标题</span></td><td key=5></td></tr><tr key=0-1-2-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者id</span></td><td key=5></td></tr><tr key=0-1-2-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者名称</span></td><td key=5></td></tr><tr key=0-1-2-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> comm_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论数量</span></td><td key=5></td></tr><tr key=0-1-2-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> pubdate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>发布时间</span></td><td key=5></td></tr><tr key=0-1-2-6><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> cover</span></td><td key=1><span>object</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面</span></td><td key=5></td></tr><tr key=0-1-2-6-0><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面类型，0-无封面，1-1张封面图片，3-3张封面</span></td><td key=5></td></tr><tr key=0-1-2-6-1><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> images</span></td><td key=1><span>string []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面图片</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr><tr key=0-1-2-7><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> like_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>点赞数</span></td><td key=5></td></tr><tr key=0-1-2-8><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> collect_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>收藏数</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章总数</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取新闻文章详情
<a id=获取新闻文章详情> </a>
### 基本信息

**Path：** /app/v1_0/articles/:article_id

**Method：** GET

**接口描述：**

<h4>1. 说明</h4>
<p>本接口不包含文章评论，文章评论在另外的接口。</p>
<h4>2. 线上地址</h4>
<p><a href="http://ttapi.research.itcast.cn/app/v1_0/articles/:article_id">http://ttapi.research.itcast.cn/app/v1_0/articles/:article_id</a><br>
如http://ttapi.research.itcast.cn/app/v1_0/articles/1</p>
<h4>3. 返回HTTP状态码说明</h4>
<ol>
<li>200 OK</li>
<li>404 文章不存在</li>
<li>507 服务器数据库异常</li>
</ol>
<h4>4. 在Trace 请求头中传递click埋点参数</h4>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  jwt token | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户身份token，匿名用户无需携带 |
| Trace  |   | 是  |   |  click的埋点参数 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| article_id |   |  文章id |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息 OK</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> art_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章ID</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章标题</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> pubdate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>发布日期</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> aut_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者id</span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> aut_name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者名</span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> aut_photo</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者头像url 无图片，默认为null</span></td><td key=5></td></tr><tr key=0-1-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> is_followed</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否关注了作者</span></td><td key=5></td></tr><tr key=0-1-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> attitude</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户对文章的态度, -1: 无态度，0-不喜欢，1-点赞</span></td><td key=5></td></tr><tr key=0-1-8><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> content</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章内容</span></td><td key=5></td></tr><tr key=0-1-9><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> recomments</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>相关文章推荐，无推荐为空数组</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-9-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> art_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章id</span></td><td key=5></td></tr><tr key=0-1-9-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章标题</span></td><td key=5></td></tr><tr key=0-1-9-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> tracking</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>埋点参数</span></td><td key=5></td></tr><tr key=0-1-10><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> is_collected</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否收藏了文章</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取用户收藏列表
<a id=获取用户收藏列表> </a>
### 基本信息

**Path：** /app/v1_0/article/collections

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/article/collections

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>507 数据库错误</li>
<li>401 用户未认证</li>
<li>400 请求参数错误</li>
<li><strong>200 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户token |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |   |  页数，不传默认为1 |
| per_page | 否  |   |  每页数量，不传每页数量由后端决定 |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>当前页数</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> per_page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>每页数量</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> results</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-2-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> art_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章id</span></td><td key=5></td></tr><tr key=0-1-2-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章标题</span></td><td key=5></td></tr><tr key=0-1-2-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者id</span></td><td key=5></td></tr><tr key=0-1-2-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者名称</span></td><td key=5></td></tr><tr key=0-1-2-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> comm_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论数量</span></td><td key=5></td></tr><tr key=0-1-2-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> pubdate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>发布时间</span></td><td key=5></td></tr><tr key=0-1-2-6><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> cover</span></td><td key=1><span>object</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面</span></td><td key=5></td></tr><tr key=0-1-2-6-0><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面类型，0-无封面，1-1张封面图片，3-3张封面</span></td><td key=5></td></tr><tr key=0-1-2-6-1><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> images</span></td><td key=1><span>string []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面图片</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr><tr key=0-1-2-7><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> like_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>点赞数</span></td><td key=5></td></tr><tr key=0-1-2-8><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> collect_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>收藏数</span></td><td key=5></td></tr><tr key=0-1-2-9><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> is_liking</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否对文章点赞</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章总数</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取用户文章列表
<a id=获取用户文章列表> </a>
### 基本信息

**Path：** /app/v1_0/users/:user_id/articles

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/users/:user_id/articles

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>507 数据库错误</li>
<li>400 请求参数错误</li>
<li><strong>200 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| user_id |   |  用户id |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |   |  页数，不传默认为1 |
| per_page | 否  |   |  每页数量，不传每页数量由后端决定 |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>当前页数</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> per_page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>每页数量</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> results</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-2-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> art_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章id</span></td><td key=5></td></tr><tr key=0-1-2-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章标题</span></td><td key=5></td></tr><tr key=0-1-2-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者id</span></td><td key=5></td></tr><tr key=0-1-2-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者名称</span></td><td key=5></td></tr><tr key=0-1-2-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> comm_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论数量</span></td><td key=5></td></tr><tr key=0-1-2-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> pubdate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>发布时间</span></td><td key=5></td></tr><tr key=0-1-2-6><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> cover</span></td><td key=1><span>object</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面</span></td><td key=5></td></tr><tr key=0-1-2-6-0><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面类型，0-无封面，1-1张封面图片，3-3张封面</span></td><td key=5></td></tr><tr key=0-1-2-6-1><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> images</span></td><td key=1><span>string []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面图片</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr><tr key=0-1-2-7><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> like_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>点赞数</span></td><td key=5></td></tr><tr key=0-1-2-8><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> collect_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>收藏数</span></td><td key=5></td></tr><tr key=0-1-2-9><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> is_liking</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否点赞</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章总数</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取用户阅读历史
<a id=获取用户阅读历史> </a>
### 基本信息

**Path：** /app/v1_0/user/histories

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/user/histories

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>507 数据库错误</li>
<li>401 用户未认证</li>
<li>400 请求参数错误</li>
<li><strong>200 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  用户token |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |   |  页数，不传默认为1 |
| per_page | 否  |   |  每页数量，不传每页数量由后端决定 |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>当前页数</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> per_page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>每页数量</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> results</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-2-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> art_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章id</span></td><td key=5></td></tr><tr key=0-1-2-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章标题</span></td><td key=5></td></tr><tr key=0-1-2-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者id</span></td><td key=5></td></tr><tr key=0-1-2-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者名称</span></td><td key=5></td></tr><tr key=0-1-2-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> comm_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论数量</span></td><td key=5></td></tr><tr key=0-1-2-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> pubdate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>发布时间</span></td><td key=5></td></tr><tr key=0-1-2-6><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> cover</span></td><td key=1><span>object</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面</span></td><td key=5></td></tr><tr key=0-1-2-6-0><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面类型，0-无封面，1-1张封面图片，3-3张封面</span></td><td key=5></td></tr><tr key=0-1-2-6-1><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> images</span></td><td key=1><span>string []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面图片</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr><tr key=0-1-2-7><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> like_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>点赞数</span></td><td key=5></td></tr><tr key=0-1-2-8><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> collect_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>收藏数</span></td><td key=5></td></tr><tr key=0-1-2-9><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> is_liking</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否对文章点赞</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章总数</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 获取评论或评论回复
<a id=获取评论或评论回复> </a>
### 基本信息

**Path：** /app/v1_0/comments

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/comments

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li>507 数据库错误</li>
<li><strong>200 OK</strong></li>
</ul>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| type | 是  |  a或c |  评论类型，a-对文章(article)的评论，c-对评论(comment)的回复 |
| source | 是  |   |  源id，文章id或评论id |
| offset | 否  |   |  获取评论数据的偏移量，值为评论id，表示从此id的数据向后取，不传表示从第一页开始读取数据 |
| limit | 否  |   |  获取的评论数据个数，不传表示采用后端服务设定的默认每页数据量 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> target</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论的目标id（评论文章即为文章id，对评论进行回复则为评论id）</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> content</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论内容</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> aid</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>文章id，对评论内容发表回复时，需要传递此参数，表明所属文章id。对文章进行评论，不要传此参数。</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>该文章的评论总数 或 该评论的回复总数</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> end_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>所有评论或回复的最后一个id（截止offset值，小于此值的offset可以不用发送请求获取评论数据，已经没有数据），若无评论或回复数据，则值为NULL</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> last_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>本次返回结果的最后一个评论id，作为请求下一页数据的offset参数，若本次无具体数据，则值为NULL</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> results</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论或回复的内容</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-3-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> com_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论或回复id</span></td><td key=5></td></tr><tr key=0-1-3-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论或回复的用户id</span></td><td key=5></td></tr><tr key=0-1-3-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户名称</span></td><td key=5></td></tr><tr key=0-1-3-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_photo</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户头像url</span></td><td key=5></td></tr><tr key=0-1-3-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> like_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>点赞数量</span></td><td key=5></td></tr><tr key=0-1-3-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> reply_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>回复数量</span></td><td key=5></td></tr><tr key=0-1-3-6><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> pubdate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>创建时间</span></td><td key=5></td></tr><tr key=0-1-3-7><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> content</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论或回复内容</span></td><td key=5></td></tr><tr key=0-1-3-8><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> is_top</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否置顶，0-不置顶，1-置顶</span></td><td key=5></td></tr><tr key=0-1-3-9><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> is_liking</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span>当前用户是否点赞</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 阅读时长埋点反馈
<a id=阅读时长埋点反馈> </a>
### 基本信息

**Path：** /app/v1_0/reading/durations

**Method：** POST

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/reading/durations

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>400 请求参数错误</li>
<li><strong>201 OK</strong></li>
</ul>
<h3>3 在请求头Trace 中传递read埋点参数</h3>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Trace  |   | 是  |   |  read埋点参数 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> duration</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>阅读时长 秒数</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> art_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章id</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 频道新闻推荐_V1.0
<a id=频道新闻推荐_V1.0> </a>
### 基本信息

**Path：** /app/v1_0/articles

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_0/articles

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>507 数据库错误</li>
<li>400 请求参数错误</li>
<li><strong>200 OK</strong></li>
</ul>
<h3>3 增加了埋点参数</h3>
<h3>4 Authorization 请求头说明</h3>
<h5>1） Bearer 开头为已认证用户的token</h5>
<h5>2） Anony 开头为匿名用户的手机识别码</h5>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU
或者
Anony xxxxxxxxxxxxxxxxxxxx |  用户身份token 或 匿名用户手机识别码 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| channel_id | 是  |   |  频道ID |
| page | 否  |   |  页数，不传默认为1 |
| per_page | 否  |   |  每页数量，不传每页数量由后端决定 |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>当前页数</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> per_page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>每页数量</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> results</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-2-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> art_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章id</span></td><td key=5></td></tr><tr key=0-1-2-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章标题</span></td><td key=5></td></tr><tr key=0-1-2-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者id</span></td><td key=5></td></tr><tr key=0-1-2-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者名称</span></td><td key=5></td></tr><tr key=0-1-2-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> comm_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论数量</span></td><td key=5></td></tr><tr key=0-1-2-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> pubdate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>发布时间</span></td><td key=5></td></tr><tr key=0-1-2-6><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> is_top</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否置顶，0-不置顶，1-置顶</span></td><td key=5></td></tr><tr key=0-1-2-7><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> cover</span></td><td key=1><span>object</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面</span></td><td key=5></td></tr><tr key=0-1-2-7-0><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面类型，0-无封面，1-1张封面图片，3-3张封面</span></td><td key=5></td></tr><tr key=0-1-2-7-1><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> images</span></td><td key=1><span>string []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面图片</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr><tr key=0-1-2-8><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> trace</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>埋点参数</span></td><td key=5></td></tr><tr key=0-1-2-8-0><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> click</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>点击文章，进入文章详情页时反馈</span></td><td key=5></td></tr><tr key=0-1-2-8-1><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> collect</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户点击收藏文章时反馈</span></td><td key=5></td></tr><tr key=0-1-2-8-2><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> share</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户分享时反馈</span></td><td key=5></td></tr><tr key=0-1-2-8-3><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> read</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户的阅读时长，退出详情页时反馈</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 频道新闻推荐_V1.1
<a id=频道新闻推荐_V1.1> </a>
### 基本信息

**Path：** /app/v1_1/articles

**Method：** GET

**接口描述：**
<h3>1 线上地址</h3>
<pre><code data-language="url" class="lang-url">http://ttapi.research.itcast.cn/app/v1_1/articles

</code></pre>
<h3>2 返回状态码</h3>
<ul>
<li>507 数据库错误</li>
<li>400 请求参数错误</li>
<li><strong>200 OK</strong></li>
</ul>
<h3>3 增加了埋点参数</h3>
<h3>4 Authorization 请求头说明</h3>
<h5>1） Bearer 开头为已认证用户的token</h5>
<h5>2） Anony 开头为匿名用户的手机识别码</h5>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU
或者
Anony xxxxxxxxxxxxxxxxxxxx |  用户身份token 或 匿名用户手机识别码 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| channel_id | 是  |   |  频道ID |
| timestamp | 是  |  时间戳整数 单位毫秒 |  时间戳，请求新的推荐数据传当前的时间戳，请求历史推荐传指定的时间戳 |
| with_top | 是  |  0或1 |  是否包含置顶，进入页面第一次请求时要包含置顶文章，1-包含置顶，0-不包含 |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>提示信息</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> pre_timestamp</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>请求前一页历史数据的时间戳</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> results</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-1-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> art_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章id</span></td><td key=5></td></tr><tr key=0-1-1-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>文章标题</span></td><td key=5></td></tr><tr key=0-1-1-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者id</span></td><td key=5></td></tr><tr key=0-1-1-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> aut_name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>作者名称</span></td><td key=5></td></tr><tr key=0-1-1-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> comm_count</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>评论数量</span></td><td key=5></td></tr><tr key=0-1-1-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> pubdate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>发布时间</span></td><td key=5></td></tr><tr key=0-1-1-6><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> is_top</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否置顶，0-不置顶，1-置顶</span></td><td key=5></td></tr><tr key=0-1-1-7><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> cover</span></td><td key=1><span>object</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面</span></td><td key=5></td></tr><tr key=0-1-1-7-0><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面类型，0-无封面，1-1张封面图片，3-3张封面</span></td><td key=5></td></tr><tr key=0-1-1-7-1><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> images</span></td><td key=1><span>string []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>封面图片</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr><tr key=0-1-1-8><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> trace</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>埋点参数</span></td><td key=5></td></tr><tr key=0-1-1-8-0><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> click</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>点击文章，进入文章详情页时反馈</span></td><td key=5></td></tr><tr key=0-1-1-8-1><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> collect</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户点击收藏文章时反馈</span></td><td key=5></td></tr><tr key=0-1-1-8-2><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> share</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户分享时反馈</span></td><td key=5></td></tr><tr key=0-1-1-8-3><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> read</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户的阅读时长，退出详情页时反馈</span></td><td key=5></td></tr>
               </tbody>
              </table>
​            