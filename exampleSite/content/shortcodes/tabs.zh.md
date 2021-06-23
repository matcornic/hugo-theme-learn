---
title: 选项卡视图
description : "在不同的选项卡试图中同步选择内容。"
---

在页面中选择查看哪部分内容。在展示多种不同语言的代码片段或者不同格式的配置时非常顺手。

## 代码示例

	{{</* tabs */>}}
	{{%/* tab name="python" */%}}
	```python
	print("Hello World!")
	```
	{{%/* /tab */%}}
	{{%/* tab name="R" */%}}
	```R
	> print("Hello World!")
	```
	{{%/* /tab */%}}
	{{%/* tab name="Bash" */%}}
	```Bash
	echo "Hello World!"
	```
	{{%/* /tab */%}}
	{{</* /tabs */>}}

效果如下：

{{< tabs >}}
{{% tab name="python" %}}
```python
print("Hello World!")
```
{{% /tab %}}
{{% tab name="R" %}}
```R
> print("Hello World!")
```
{{% /tab %}}
{{% tab name="Bash" %}}
```Bash
echo "Hello World!"
```
{{% /tab %}}
{{< /tabs >}}

同一组的选项卡视图的选择状态会保持同步。

{{< tabs >}}
{{% tab name="python" %}}
```python
print("Hello World!")
```
{{% /tab %}}
{{% tab name="R" %}}
```R
> print("Hello World!")
```
{{% /tab %}}
{{% tab name="Bash" %}}
```Bash
echo "Hello World!"
```
{{% /tab %}}
{{< /tabs >}}

## 配置示例

	{{</* tabs groupId="config" */>}}
	{{%/* tab name="json" */%}}
	```json
	{
	  "Hello": "World"
	}
	```
	{{%/* /tab */%}}
	{{%/* tab name="XML" */%}}
	```xml
	<Hello>World</Hello>
	```
	{{%/* /tab */%}}
	{{%/* tab name="properties" */%}}
	```properties
	Hello = World
	```
	{{%/* /tab */%}}
	{{</* /tabs */>}}

效果如下：

{{< tabs groupId="config" >}}
{{% tab name="json" %}}
```json
{
  "Hello": "World"
}
```
{{% /tab %}}
{{% tab name="XML" %}}
```xml
<Hello>World</Hello>
```
{{% /tab %}}
{{% tab name="properties" %}}
```properties
Hello = World
```
{{% /tab %}}
{{< /tabs >}}

{{% notice warning %}}
当使用不同内容集的选项卡视图时，相同集合务必使用同一`groupId`，不同集合使用不同`groupId`。`groupId`默认为`'default'`。
**在整个网站中都要考虑这点！**  
 选项卡选择会根据自动存储。如果当从其他页面的`'default'`组转过来，找不到对应选项卡，所有选项卡一开始会清空。
{{% /notice %}}
