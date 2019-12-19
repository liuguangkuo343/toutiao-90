
 <h1 class="curproject-name"> 黑马头条-后台 </h1> 
 


# 0-系统管理

## 添加权限组
<a id=添加权限组> </a>
### 基本信息

**Path：** /mis/v1_0/groups

**Method：** POST

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 200</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点代码 group-list-post</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> remark</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>备注</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限组名称</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permission_ids</span></td><td key=1><span>string []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限id列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>1启用 0禁用</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 修改密码
<a id=修改密码> </a>
### 基本信息

**Path：** /mis/v1_0/password

**Method：** PUT

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回 状态码201</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer token | 是  |   |  登录接口拿到的refresh_token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> old_password</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> password</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 修改权限详情信息
<a id=修改权限详情信息> </a>
### 基本信息

**Path：** /mis/mis/v1_0/permissions/:target

**Method：** PUT

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 201</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点代码&nbsp;permission-put</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  菜单/权限id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限/菜单名称</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> type</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>类型(0菜单 1权限点)</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> parent_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>父权限id</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> code</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>链接/权限点代码</span></td><td key=5></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> sequence</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>排序</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> permission_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> parent_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> code</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> sequence</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 修改管理员信息
<a id=修改管理员信息> </a>
### 基本信息

**Path：** /mis/v1_0/administrators/:target 

**Method：** PUT

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 201</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点代码&nbsp;administrator-put</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |  1 |  管理员id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> account</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>账号</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> password</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>密码(英文加数字，不能少于8位)</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员名称</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> group_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>组id</span></td><td key=5></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>状态(1启用，0禁用)</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> administrator_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> account</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员账号</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员名称</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> group_name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>组名称</span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> group_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>组id</span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> access_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>访问次数</span></td><td key=5></td></tr><tr key=0-1-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>状态1启用 0禁用</span></td><td key=5></td></tr><tr key=0-1-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> last_login</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>最后的登录时间</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 删除权限角色/组
<a id=删除权限角色/组> </a>
### 基本信息

**Path：** /mis/v1_0/groups/:target

**Method：** DELETE

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 204</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点代码&nbsp;group-delete</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |   |
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
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
## 删除权限详情信息
<a id=删除权限详情信息> </a>
### 基本信息

**Path：** /mis/mis/v1_0/permissions/:target

**Method：** DELETE

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 204</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点代码&nbsp;permission-delete</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  菜单/权限id |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| del_children | 否  |   |  是否把target的子权限也删除，如果传此参数，代表无论如何都会把此权限和它的子权限一起删掉 |
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
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
## 删除管理员
<a id=删除管理员> </a>
### 基本信息

**Path：** /mis/v1_0/administrators/:target

**Method：** DELETE

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 204</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点代码&nbsp;administrator-delete</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |  1 |  管理员id   |
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
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
## 刷新token
<a id=刷新token> </a>
### 基本信息

**Path：** /mis/v1_0/authorizations

**Method：** PUT

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回 状态码201</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
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
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> token</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>登录认证的token</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 极验认证--初始化参数
<a id=极验认证--初始化参数> </a>
### 基本信息

**Path：** /mis/v1_0/captchas/:account

**Method：** GET

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回 状态码200</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| account |   |  账号名 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> username</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>账号</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> password</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> success</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> gt</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> challenge</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> new_captcha</span></td><td key=1><span>boolean</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 添加权限/菜单
<a id=添加权限/菜单> </a>
### 基本信息

**Path：** /mis/v1_0/permissions

**Method：** POST

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 200</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点代码&nbsp;permission-list-post</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| keyword | 否  |   |  查询关键字(匹配权限名称) |
| parent_id | 是  |   |  父权限id(0顶层) |
| type | 是  |   |  权限类型(0菜单 1权限点 不传默认所有) |
| page | 是  |   |  页数(默认1) |
| per_page | 是  |   |  每页返回数量(min:10 max:50 default:20) |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限/菜单名称</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> type</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>类型(0菜单 1权限点)</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> parent_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>父权限id</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> code</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>链接/权限点代码</span></td><td key=5></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> sequence</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>排序</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> permission_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限名称</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>类型(0菜单 1权限点)</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> parent_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>父权限id</span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> code</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>链接/权限点代码</span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> sequence</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>排序</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 修改权限角色/组详情
<a id=修改权限角色/组详情> </a>
### 基本信息

**Path：** /mis/v1_0/groups/:target

**Method：** PUT

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 201</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点代码&nbsp;group-put</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |   |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> remark</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>备注</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限组名称</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>状态(1启用 0禁用)</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permission_ids</span></td><td key=1><span>string []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限id列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> group_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> remark</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 添加管理员
<a id=添加管理员> </a>
### 基本信息

**Path：** /mis/v1_0/administrators

**Method：** POST

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回状态码 201</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点代码 administrator-list-post</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> account</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>账号</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> password</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>密码(英文加数字，不能少于8位)</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员名称</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> group_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>组id</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> account</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>账号</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员名称</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 管理员列表
<a id=管理员列表> </a>
### 基本信息

**Path：** /mis/v1_0/administrators

**Method：** GET

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回状态码 200</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点代码 administrator-list-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| keyword | 否  |   |  查询关键字 |
| status | 否  |   |  状态(1可用，0禁用，不传查所有状态) |
| page | 是  |   |  页数(默认1) |
| per_page | 是  |   |  每页返回数量(min: 10, max: 50, 默认20) |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> administrators</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> administrator_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员id</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> account</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>账号</span></td><td key=5></td></tr><tr key=0-1-0-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员名称</span></td><td key=5></td></tr><tr key=0-1-0-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> group_name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>组名称</span></td><td key=5></td></tr><tr key=0-1-0-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> access_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>访问次数</span></td><td key=5></td></tr><tr key=0-1-0-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>状态</span></td><td key=5></td></tr><tr key=0-1-0-6><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> last_login</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>最后登录的时间，0代表没登录过</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>当前条件下的总数量，用于计算分页数量</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 管理员登录
<a id=管理员登录> </a>
### 基本信息

**Path：** /mis/v1_0/authorizations

**Method：** POST

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回 状态码201</span></p>


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
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> account</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员账号</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> password</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>密码</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> challenge</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>极验认证需要的参数</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> validate</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>极验认证需要的参数</span></td><td key=5></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> seccode</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>极验认证需要的参数</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> token</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>用于访问需要身份认证的普通接口，有效期2小时</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> refresh_token</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>用于在token过期后，获取新的用户token，有效期14天</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员id</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员姓名</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permission_tree</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限树状图</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-2-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> permission_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限id</span></td><td key=5></td></tr><tr key=0-2-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限名称</span></td><td key=5></td></tr><tr key=0-2-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限类型</span></td><td key=5></td></tr><tr key=0-2-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> parent_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>父权限id, 0代表顶层</span></td><td key=5></td></tr><tr key=0-2-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> code</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限点代码/链接</span></td><td key=5></td></tr><tr key=0-2-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> sequence</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>排序</span></td><td key=5></td></tr><tr key=0-2-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> checked</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>1代表当前管理员拥有此权限，0没有</span></td><td key=5></td></tr><tr key=0-2-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> children</span></td><td key=1><span>string []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>子权限</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr>
               </tbody>
              </table>
            
## 获取权限列表
<a id=获取权限列表> </a>
### 基本信息

**Path：** /mis/v1_0/permissions

**Method：** GET

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 200</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点代码&nbsp;permission-list-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| keyword | 否  |   |  查询关键字(匹配权限名称) |
| parent_id | 是  |   |  父权限id(0顶层) |
| type | 是  |   |  权限类型(0菜单 1权限点 不传默认所有) |
| page | 是  |   |  页数(默认1) |
| per_page | 是  |   |  每页返回数量(min:10 max:50 default:20) |
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
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> permissions</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> permission_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限id</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限名称</span></td><td key=5></td></tr><tr key=0-1-0-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限类型(0菜单 1权限点)</span></td><td key=5></td></tr><tr key=0-1-0-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> parent_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>父权限id(0代表顶层)</span></td><td key=5></td></tr><tr key=0-1-0-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> code</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>链接/权限点代码(后端权限控制使用)</span></td><td key=5></td></tr><tr key=0-1-0-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> sequence</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>排序</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 获取权限角色/组列表
<a id=获取权限角色/组列表> </a>
### 基本信息

**Path：** /mis/v1_0/groups

**Method：** GET

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 200</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点代码 group-list-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> remark</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>备注</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限组名称</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permission_ids</span></td><td key=1><span>string []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限id列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> groups</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>菜单/权限组列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> group_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>菜单/权限组id</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>菜单/权限组名称</span></td><td key=5></td></tr><tr key=0-1-0-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> remark</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>备注</span></td><td key=5></td></tr><tr key=0-1-0-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>状态</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 获取权限角色/组详情
<a id=获取权限角色/组详情> </a>
### 基本信息

**Path：** /mis/v1_0/groups/:target

**Method：** GET

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 200</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点代码&nbsp;group-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  权限角色/组id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> remark</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>备注</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限组名称</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permission_ids</span></td><td key=1><span>string []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限id列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> group_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限角色/组id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>角色/组名称</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> remark</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>备注</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>状态</span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> permission_tree</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>当前组权限树状图</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-4-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> permission_id</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span>权限id</span></td><td key=5></td></tr><tr key=0-1-4-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>权限名称</span></td><td key=5></td></tr><tr key=0-1-4-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span>权限类型(0菜单 1权限)</span></td><td key=5></td></tr><tr key=0-1-4-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> parent_id</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span>父权限id 0代表顶层</span></td><td key=5></td></tr><tr key=0-1-4-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> code</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>链接/权限点代码</span></td><td key=5></td></tr><tr key=0-1-4-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> sequence</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span>排序</span></td><td key=5></td></tr><tr key=0-1-4-6><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> checked</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span>当前组是否拥有此权限 1拥有 0不拥有</span></td><td key=5></td></tr><tr key=0-1-4-7><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> children</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>子权限列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-4-7-0><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> permission_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-4-7-1><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-4-7-2><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-4-7-3><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> parent_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-4-7-4><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> code</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-4-7-5><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> sequence</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-4-7-6><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> checked</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-4-7-7><td key=0><span style="padding-left: 60px"><span style="color: #8c8a8a">├─</span> children</span></td><td key=1><span>string []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr>
               </tbody>
              </table>
            
## 获取权限详情信息
<a id=获取权限详情信息> </a>
### 基本信息

**Path：** /mis/mis/v1_0/permissions/:target

**Method：** GET

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 200</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点代码&nbsp;permission-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  菜单/权限id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限/菜单名称</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> type</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>类型(0菜单 1权限点)</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> parent_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>父权限id</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> code</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>链接/权限点代码</span></td><td key=5></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> sequence</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>排序</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> permission_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>菜单/权限id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>菜单/权限名称</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权限类型(0菜单 1权限点)</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> parent_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>父菜单/权限</span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> code</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>链接/权限点代码</span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> sequence</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>排序</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 获取管理员详情信息
<a id=获取管理员详情信息> </a>
### 基本信息

**Path：** /mis/v1_0/administrators/:target

**Method：** GET

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 200</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点代码&nbsp;administrator-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |  1 |  管理员id   |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> administrator_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> account</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员账号</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员名称</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> group_name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>组名称</span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> group_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>组id</span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> access_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>访问次数</span></td><td key=5></td></tr><tr key=0-1-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>状态1启用 0禁用</span></td><td key=5></td></tr><tr key=0-1-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> last_login</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>最后的登录时间</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 运营日志
<a id=运营日志> </a>
### 基本信息

**Path：** /mis/v1_0/operationlogs

**Method：** GET

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 200</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点代码&nbsp;operationlog-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 是  |   |  页数(默认1) |
| per_page | 是  |   |  每页返回数量(min:10 max:50 default:20) |
| keyword | 否  |   |  查询关键字(匹配操作和描述) |
| begin | 否  |   |  开始时间(2019-01-01 09:00:00) |
| end | 否  |   |  结束时间(2019-01-01 09:00:00) |
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
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> operationlogs</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>运营日志列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> operation_log_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>日志id</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> administrator_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员id</span></td><td key=5></td></tr><tr key=0-1-0-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> administrator_name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>管理员姓名</span></td><td key=5></td></tr><tr key=0-1-0-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> ip</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>ip地址</span></td><td key=5></td></tr><tr key=0-1-0-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> operation</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>操作</span></td><td key=5></td></tr><tr key=0-1-0-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> description</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>描述</span></td><td key=5></td></tr><tr key=0-1-0-6><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> ctime</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>创建时间</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
# 1-用户管理

## None
<a id=None> </a>
### 基本信息

**Path：** /mis/users/:id/disabled

**Method：** PUT

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  用户id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> disabled</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否屏蔽</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 添加用户
<a id=添加用户> </a>
### 基本信息

**Path：** /mis/v1_0/users

**Method：** POST

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回状态码 201</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 userlist-post</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| keyword | 是  |   |  关键字 |
| disabled | 是  |   |  是否屏蔽 1 屏蔽 0 开启 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> user_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> account</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>账号</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> password</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>密码</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>姓名</span></td><td key=5></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> profile_photo</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头像base64</span></td><td key=5></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> introduction</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>简介</span></td><td key=5></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> email</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>邮箱</span></td><td key=5></td></tr><tr key=0-7><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> mobile</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>手机号码</span></td><td key=5></td></tr><tr key=0-8><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> gender</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>性别 0男 1女</span></td><td key=5></td></tr><tr key=0-9><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> area</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>地区</span></td><td key=5></td></tr><tr key=0-10><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> company</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>公司</span></td><td key=5></td></tr><tr key=0-11><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> career</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>职业</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> user_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> account</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> email</span></td><td key=1><span>null</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> mobile</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> last_login</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> is_verified</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> is_media</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-8><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 用户列表
<a id=用户列表> </a>
### 基本信息

**Path：** /mis/v1_0/users

**Method：** GET

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回状态码 200</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 userlist-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 是  |  1 |  页数(默认1) |
| per_page | 是  |  10 |  每页返回数量(min:10 max:50 default:20) |
| keyword | 否  |   |  查询关键字(匹配mobile) |
| begin | 否  |   |  开始时间(2019-01-01 09:00:00) |
| end | 否  |   |  结束时间(2019-01-01 09:00:00) |
| status | 否  |   |  1正常 0冻结 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> users</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> user_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> account</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>账号</span></td><td key=5></td></tr><tr key=0-1-0-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>姓名</span></td><td key=5></td></tr><tr key=0-1-0-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> email</span></td><td key=1><span>null</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>邮箱</span></td><td key=5></td></tr><tr key=0-1-0-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> mobile</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>手机号码</span></td><td key=5></td></tr><tr key=0-1-0-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> last_login</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>最后活动时间</span></td><td key=5></td></tr><tr key=0-1-0-6><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> is_verified</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>是否实名认证 1是 0否</span></td><td key=5></td></tr><tr key=0-1-0-7><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> is_media</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>是否资质认证 1是 0否</span></td><td key=5></td></tr><tr key=0-1-0-8><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>是否可用 1是 0否(冻结)</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 用户批量冻结/解冻
<a id=用户批量冻结/解冻> </a>
### 基本信息

**Path：** /mis/v1_0/users

**Method：** PUT

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回状态码 201</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 userlist-put</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> user_ids</span></td><td key=1><span>number []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>用户id列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>number</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>1解冻 0冻结</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>受到影响的行数</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 用户认证申请记录(用户审核)
<a id=用户认证申请记录(用户审核)> </a>
### 基本信息

**Path：** /mis/v1_0/legalizes

**Method：** GET

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回 200</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 legalize-list-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 是  |   |  页数(默认1) |
| per_page | 是  |   |  每页返回数量(min:10 max:50 default:20) |
| status | 否  |   |  1处理中 2通过审核 3驳回 |
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
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> legalizes</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> legalize_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>申请记录id</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> account</span></td><td key=1><span>null</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>账号</span></td><td key=5></td></tr><tr key=0-1-0-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>姓名</span></td><td key=5></td></tr><tr key=0-1-0-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> create_time</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>认证类型 1实名认证 2资质认证</span></td><td key=5></td></tr><tr key=0-1-0-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>状态 1处理中 2通过审核 3驳回</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 用户认证申请记录(用户审核-批量通过/驳回)
<a id=用户认证申请记录(用户审核-批量通过/驳回)> </a>
### 基本信息

**Path：** /mis/v1_0/legalizes

**Method：** PUT

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回 201</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 legalize-list-put</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> legalize_ids</span></td><td key=1><span>number []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>申请记录id列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>number</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>2通过 3驳回</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> reject_reason</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>驳回理由status=3时会用到，默认 “资料不通过，驳回”</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>受影响行数</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 用户认证申请记录(用户审核-详细信息)
<a id=用户认证申请记录(用户审核-详细信息)> </a>
### 基本信息

**Path：** /mis/v1_0/legalizes/:target

**Method：** GET

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回 200</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 legalize-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  申请记录id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> password</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>密码</span></td><td key=5><p key=3><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> legalize_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>申请记录id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> account</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>账号</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>姓名</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> create_time</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>申请认证时间</span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> type</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>认证类型 1实名认证 2资质认证</span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> user_profile</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>注意: type=1才有此字段</span></td><td key=5></td></tr><tr key=0-1-6-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> user_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-6-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> gender</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>性别</span></td><td key=5></td></tr><tr key=0-1-6-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> birthday</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>生日</span></td><td key=5></td></tr><tr key=0-1-6-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> real_name</span></td><td key=1><span>null</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>真实姓名</span></td><td key=5></td></tr><tr key=0-1-6-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id_number</span></td><td key=1><span>null</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>身份证号码</span></td><td key=5></td></tr><tr key=0-1-6-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id_card_front</span></td><td key=1><span>null</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>身份证正面</span></td><td key=5></td></tr><tr key=0-1-6-6><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id_card_back</span></td><td key=1><span>null</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>身份证背面</span></td><td key=5></td></tr><tr key=0-1-6-7><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id_card_handheld</span></td><td key=1><span>null</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>手持身份证照片</span></td><td key=5></td></tr><tr key=0-1-6-8><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> area</span></td><td key=1><span>null</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>区域</span></td><td key=5></td></tr><tr key=0-1-6-9><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> company</span></td><td key=1><span>null</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>公司</span></td><td key=5></td></tr><tr key=0-1-6-10><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> career</span></td><td key=1><span>null</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>职业</span></td><td key=5></td></tr><tr key=0-1-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> qualification</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>注意: type=2才有此字段</span></td><td key=5></td></tr><tr key=0-1-7-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> qualification_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>资质id</span></td><td key=5></td></tr><tr key=0-1-7-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> user_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-7-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>姓名</span></td><td key=5></td></tr><tr key=0-1-7-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id_number</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>身份证号码</span></td><td key=5></td></tr><tr key=0-1-7-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> industry</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>行业</span></td><td key=5></td></tr><tr key=0-1-7-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> company</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>公司</span></td><td key=5></td></tr><tr key=0-1-7-6><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> position</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>职位</span></td><td key=5></td></tr><tr key=0-1-7-7><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> add_info</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>附加信息</span></td><td key=5></td></tr><tr key=0-1-7-8><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id_card_front</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>身份证正面</span></td><td key=5></td></tr><tr key=0-1-7-9><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id_card_back</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>身份证背面</span></td><td key=5></td></tr><tr key=0-1-7-10><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id_card_handheld</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>手持身份证</span></td><td key=5></td></tr><tr key=0-1-7-11><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> qualification_img</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>资质认证材料</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 获取用户详情
<a id=获取用户详情> </a>
### 基本信息

**Path：** /mis/v1_0/users/:target

**Method：** GET

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回状态码 201</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 user-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  用户id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> account</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>账号</span></td><td key=5><p key=3><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> fullName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>姓名</span></td><td key=5><p key=3><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> mobile</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>联系电话</span></td><td key=5><p key=3><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permission_group_id</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>权限组id</span></td><td key=5><p key=3><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> avatar</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>头像</span></td><td key=5><p key=3><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> email</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>邮件</span></td><td key=5><p key=3><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> disabled</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否屏蔽</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> account</span></td><td key=1><span>null</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> email</span></td><td key=1><span>null</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> mobile</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> last_login</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> is_verified</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> is_media</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
# 2-信息管理

## 修改频道
<a id=修改频道> </a>
### 基本信息

**Path：** /mis/v1_0/channels/:target

**Method：** PUT

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回 201</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 channel-put</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
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
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>频道名称</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> is_visible</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>是否可见 1是 0否</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> sequence</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>排序 默认0</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> channel_id</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> is_visible</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 内容管理-文章列表
<a id=内容管理-文章列表> </a>
### 基本信息

**Path：** /mis/v1_0/articles

**Method：** GET

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回状态码 200</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 article-list-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 是  |   |  页数(默认1) |
| per_page | 是  |   |  每页返回数量(min:10 max:50 default:20) |
| begin | 否  |   |  开始时间 2019-01-01 00:00:00 |
| end | 否  |   |  结束时间 2019-01-01 00:00:00 |
| status_list | 是  |   |  状态列表. 字符串格式, 使用英文字符逗号隔开.比如 '1,2' 0草稿 1待审核 2审核通过 3审核失败 4已删除 5封禁  |
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
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> articles</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> article_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>文章id</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>文章标题(名称)</span></td><td key=5></td></tr><tr key=0-1-0-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>作者</span></td><td key=5></td></tr><tr key=0-1-0-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> channel_name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>频道名称(所属频道)</span></td><td key=5></td></tr><tr key=0-1-0-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> comment_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>评论数量</span></td><td key=5></td></tr><tr key=0-1-0-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> update_time</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>修改时间</span></td><td key=5></td></tr><tr key=0-1-0-6><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>状态(参考请求参数status_list)</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 删除频道
<a id=删除频道> </a>
### 基本信息

**Path：** /mis/v1_0/channels/:target

**Method：** DELETE

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回 204</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 channel-delete</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
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
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
## 批量修改文章状态
<a id=批量修改文章状态> </a>
### 基本信息

**Path：** /mis/v1_0/articles

**Method：** PUT

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 201</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点 article-list-put</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> article_ids</span></td><td key=1><span>number []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>文章id列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>number</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>需要修改的审核状态 5封禁 6解封 2通过审核 3驳回(审核失败) 4删除</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> reject_reason</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>驳回原因</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 添加频道
<a id=添加频道> </a>
### 基本信息

**Path：** /mis/v1_0/channels

**Method：** POST

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回 201</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 channel-list-post</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>频道名称</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> is_visible</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>是否可见 1是 0否</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> sequence</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>排序 默认0</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> channel_id</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>频道id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>频道名称</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> is_visible</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>是否可见 1是 0否</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 获取文章详情(content)
<a id=获取文章详情(content)> </a>
### 基本信息

**Path：** /mis/v1_0/articles/:target

**Method：** GET

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 200</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点 article-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  文章id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> article_ids</span></td><td key=1><span>number []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>文章id列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>number</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>需要修改的审核状态 5封禁 6解封 2通过审核 3驳回(审核失败) 4删除</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> reject_reason</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>驳回原因</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> article_id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> channel_name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> comment_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> update_time</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> status</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> content</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>文章内容</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 频道列表
<a id=频道列表> </a>
### 基本信息

**Path：** /mis/v1_0/channels

**Method：** GET

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回 200</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 channel-list-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 是  |   |  页数(默认1) |
| per_page | 是  |   |  每页返回数量(min:10 max:50 default:20) |
| is_visible | 否  |   |  1可见 0不可见 |
| channel_id | 否  |   |  频道id |
| keyword | 否  |   |  关键字查询(匹配频道名称) |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> is_point</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span>是否权限点</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pid</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>父 id</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> code</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>菜单代码 全局唯一</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>菜单标题</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> channels</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> channel_id</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>频道id</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>频道名称</span></td><td key=5></td></tr><tr key=0-1-0-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> is_visible</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>1可见 0不可见</span></td><td key=5></td></tr><tr key=0-1-0-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> article_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>文章数量</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>总数量，用于分页</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
# 3-数据统计

## None
<a id=None> </a>
### 基本信息

**Path：** /mis/permissions/:id

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>标题</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permissions</span></td><td key=1><span>integer []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>权限ids [1101,1102,1103]</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>integer</span></p></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>名称</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permissions</span></td><td key=1><span>integer []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>权限ids [1101,1102,1103]</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>integer</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> create_date</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>创建时间</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 基本统计
<a id=基本统计> </a>
### 基本信息

**Path：** /mis/v1_0/statistics_basic

**Method：** GET

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 200</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点 statistics-basic-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| type | 是  |  day_activate |  统计类型 day_activate(日活), access(访问), access_ip(访问IP), new_user(新增用户),
			search_user(搜索用户), search(搜索), article(文章), comment(评论), read(阅读),
			forward(转发) |
| ### | 是  |   |  下面是获取图表数据才需要传的参数 |
| size | 是  |   |  图表粒度 day(天) hour(小时) month(月。month, 获取当年数据) |
| begin | 是  |   |  开始时间(闭区间) '2019-1-30' |
| end | 是  |   |  结束时间(闭区间) '2019-2-1' |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>标题</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permissions</span></td><td key=1><span>integer []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>权限ids [1101,1102,1103]</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>integer</span></p></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
返回两种数据:
1. 网站统计里的 日活用户、访问量、访问IP、新增用户量和内容统计里的 文章总量、评论数、阅读量、转发数(没size参数)
{
  "message": "OK",
  "data": {
    "day_count": 10,  // 当天总数
    "week_percent": -8.33,  // 周涨/降幅百分比
    "day_percent": -58.33,  // 日涨/降幅百分比
    "day_average": 24.71,  // 日平均数
    "total_days": 14,  // 总天数
    "total_count": 346  // 总数量
  }
}
2. 折线图和柱状图(有size参数), 这里又分三种粒度数据。
	2.1 month
	{
      "message": "OK",
      "data": [
        {
          "month": 1,  // 月份
          "count": 48  // 数量
        },
        {
          "month": 2,
          "count": 298
        },
        {
          "month": 3,
          "count": 0
        },
        {
          "month": 4,
          "count": 0
        },
        {
          "month": 5,
          "count": 0
        },
        {
          "month": 6,
          "count": 0
        },
        {
          "month": 7,
          "count": 0
        },
        {
          "month": 8,
          "count": 0
        },
        {
          "month": 9,
          "count": 0
        },
        {
          "month": 10,
          "count": 0
        },
        {
          "month": 11,
          "count": 0
        },
        {
          "month": 12,
          "count": 0
        }
      ]
    }
	2.2 day
	{
      "message": "OK",
      "data": [
        {
          "date": "2019-01-30", // 日期
          "count": 24   // 数量
        },
        {
          "date": "2019-01-31",
          "count": 24
        },
        {
          "date": "2019-02-01",
          "count": 24
        }
      ]
    }
	2.3 hour
	{
  "message": "OK",
  "data": [
        {
          "date_time": "2019-01-30 00:00:00",  // 每小时时间
          "count": 1  // 数量
        },
        {
          "date_time": "2019-01-30 01:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 02:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 03:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 04:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 05:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 06:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 07:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 08:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 09:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 10:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 11:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 12:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 13:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 14:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 15:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 16:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 17:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 18:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 19:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 20:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 21:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 22:00:00",
          "count": 1
        },
        {
          "date_time": "2019-01-30 23:00:00",
          "count": 1
        }
      ]
    }
```
## 搜索关键字统计-分页
<a id=搜索关键字统计-分页> </a>
### 基本信息

**Path：** /mis/v1_0/statistics_search

**Method：** GET

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回状态码 200</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 statistics-search-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 是  |  1 |  页数(默认1) |
| per_page | 是  |  10 |  每页返回数量(min:10 max:50 default:20) |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> keywords</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> keyword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>关键词</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> user_count</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户数</span></td><td key=5></td></tr><tr key=0-1-0-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> week_percent</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span>周涨/降幅百分比</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 搜索关键字统计-总数
<a id=搜索关键字统计-总数> </a>
### 基本信息

**Path：** /mis/v1_0/statistics_search_total

**Method：** GET

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 200</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点 statistics-search-total-get</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">人均搜索次数 = 搜索次数 / 搜索用户数</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
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
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> user_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>总用户数</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>搜索次数</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> search_user_count</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>搜索用户数</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 销售额统计--总数
<a id=销售额统计--总数> </a>
### 基本信息

**Path：** /mis/v1_0/statistics_sales_total

**Method：** GET

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回状态码 200</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 statistics-sales-total-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>标题</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permissions</span></td><td key=1><span>integer []</span></td><td key=2>必须</td><td key=3></td><td key=4><span>权限ids [1101,1102,1103]</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>integer</span></p></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> area_sales</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> area</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span>区域自编id</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> area_name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>区域名称</span></td><td key=5></td></tr><tr key=0-1-0-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> money</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span>金额(单位: 分)</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_money</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 阅读来源统计-总数
<a id=阅读来源统计-总数> </a>
### 基本信息

**Path：** /mis/v1_0/statistics_read_source_total

**Method：** GET

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回状态码 200</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 statistics-read-source-total-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> read_sources</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> source</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span>阅读来源自编id</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> source_name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>阅读来源名称</span></td><td key=5></td></tr><tr key=0-1-0-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> count</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span>数量</span></td><td key=5></td></tr><tr key=0-1-0-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> count_20_down</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span>完成度在20%以下的数量</span></td><td key=5></td></tr><tr key=0-1-0-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> count_20_80</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span>完成度在20%-80%的数量</span></td><td key=5></td></tr><tr key=0-1-0-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> count_80_up</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span>完成度在80%以上的数量</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_read_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
# 4-推荐系统

## 修改敏感词信息
<a id=修改敏感词信息> </a>
### 基本信息

**Path：** /mis/v1_0/sensitive_words/:target

**Method：** PUT

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 201</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点 sensitive-word-put</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer token | 是  |   |  登录接口拿到的token |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  敏感词id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> word</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>敏感词</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> weights</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权重</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> word</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> weights</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> hold_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> create_time</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> update_time</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 删除敏感词
<a id=删除敏感词> </a>
### 基本信息

**Path：** /mis/v1_0/sensitive_words/:target

**Method：** DELETE

**接口描述：**
<p><span class="colour" style="color:rgb(51, 51, 51)">正常返回状态码 204</span><br>
<span class="colour" style="color:rgb(51, 51, 51)">后端权限点 sensitive-word-delete</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer token | 是  |   |  登录接口拿到的token |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  敏感词id |
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
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
## 敏感词列表
<a id=敏感词列表> </a>
### 基本信息

**Path：** /mis/v1_0/sensitive_words

**Method：** GET

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回状态码 200</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 sensitive-word-list-get</span></p>


### 请求参数
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 是  |   |  页数(默认1) |
| per_page | 是  |   |  每页返回数量(min:10 max:50 default:20) |
| word | 是  |   |  敏感词(模糊匹配) |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> words</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>敏感词列表</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-0-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>敏感词id</span></td><td key=5></td></tr><tr key=0-1-0-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> word</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>敏感词</span></td><td key=5></td></tr><tr key=0-1-0-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> weights</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权重</span></td><td key=5></td></tr><tr key=0-1-0-3><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> hold_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>拦截次数</span></td><td key=5></td></tr><tr key=0-1-0-4><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> create_time</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>创建时间</span></td><td key=5></td></tr><tr key=0-1-0-5><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> update_time</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>更新时间</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 添加敏感词
<a id=添加敏感词> </a>
### 基本信息

**Path：** /mis/v1_0/sensitive_words

**Method：** POST

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回状态码 201</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 sensitive-word-list-post</span></p>


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
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> word</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>敏感词</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> weights</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权重</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>敏感词id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> word</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>敏感词</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> weights</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>权重</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> hold_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>拦截次数</span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> create_time</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>创建时间</span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> update_time</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>更新时间</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 获取敏感词详情
<a id=获取敏感词详情> </a>
### 基本信息

**Path：** /mis/v1_0/sensitive_words/:target

**Method：** GET

**接口描述：**
<p><span class="colour" style="color: rgb(51, 51, 51);">正常返回状态码 200</span><br>
<span class="colour" style="color: rgb(51, 51, 51);">后端权限点 sensitive-word-get</span></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Authorization  |  Bearer token | 是  |   |  登录接口拿到的token |
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| target |   |  敏感词id |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> word</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> weights</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> hold_count</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> create_time</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> update_time</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr>
               </tbody>
              </table>
            