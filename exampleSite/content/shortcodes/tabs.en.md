---
title: Tabbed views
description : "Synchronize selection of content in different tabbed views"
---

Let your viewers choose which content to see. Very handy for providing code
snippets for multiple languages or providing configuration in different formats.

## Code example

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

Renders as:

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

Tabs views with the same tabs that belong to the same group sychronize their selection:

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

## Config example

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

renders as

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

{{% notice note %}}
When using tab views with different content sets, make sure to use a common `groupId` for equal sets but distinct
`groupId` for differnt sets. The `groupId` defaults to `'default'`.
{{% /notice %}}
