---
title : "Mermaid"
description : "采用类似Markdown的方法根据文本生成图表和流程图。"
---

[Mermaid](https://mermaidjs.github.io/)是一个帮助你根据文本生成图表和流程图的库，实现方法类似于Markdown。

只需要插入`mermaid`简码就行了。

## 流程图示例

    {{</*mermaid align="left"*/>}}
    graph LR;
        A[Hard edge] -->|Link text| B(Round edge)
        B --> C{Decision}
        C -->|One| D[Result one]
        C -->|Two| E[Result two]
    {{</* /mermaid */>}}

效果如下：

{{<mermaid align="left">}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{</mermaid>}}

## 序列图示例

    {{</* mermaid */>}}
    sequenceDiagram
        participant Alice
        participant Bob
        Alice->>John: Hello John, how are you?
        loop Healthcheck
            John->John: Fight against hypochondria
        end
        Note right of John: Rational thoughts <br/>prevail...
        John-->Alice: Great!
        John->Bob: How about you?
        Bob-->John: Jolly good!
    {{</* /mermaid */>}}

效果如下：

{{<mermaid>}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
{{</mermaid>}}

## 甘特图示例

    {{</* mermaid */>}}
    gantt
            dateFormat  YYYY-MM-DD
            title Adding GANTT diagram functionality to mermaid
            section A section
            Completed task            :done,    des1, 2014-01-06,2014-01-08
            Active task               :active,  des2, 2014-01-09, 3d
            Future task               :         des3, after des2, 5d
            Future task2               :         des4, after des3, 5d
            section Critical tasks
            Completed task in the critical line :crit, done, 2014-01-06,24h
            Implement parser and jison          :crit, done, after des1, 2d
            Create tests for parser             :crit, active, 3d
            Future task in critical line        :crit, 5d
            Create tests for renderer           :2d
            Add to mermaid                      :1d
    {{</* /mermaid */>}}

效果如下：

{{<mermaid>}}
gantt
        dateFormat  YYYY-MM-DD
        title Adding GANTT diagram functionality to mermaid
        section A section
        Completed task            :done,    des1, 2014-01-06,2014-01-08
        Active task               :active,  des2, 2014-01-09, 3d
        Future task               :         des3, after des2, 5d
        Future task2               :         des4, after des3, 5d
        section Critical tasks
        Completed task in the critical line :crit, done, 2014-01-06,24h
        Implement parser and jison          :crit, done, after des1, 2d
        Create tests for parser             :crit, active, 3d
        Future task in critical line        :crit, 5d
        Create tests for renderer           :2d
        Add to mermaid                      :1d
{{</mermaid>}}


### 类示例

    {{</* mermaid */>}}
    classDiagram
      Class01 <|-- AveryLongClass : Cool
      Class03 *-- Class04
      Class05 o-- Class06
      Class07 .. Class08
      Class09 --> C2 : Where am i?
      Class09 --* C3
      Class09 --|> Class07
      Class07 : equals()
      Class07 : Object[] elementData
      Class01 : size()
      Class01 : int chimp
      Class01 : int gorilla
      Class08 <--> C2: Cool label
    {{</* /mermaid */>}}

效果如下：

{{<mermaid>}}
classDiagram
  Class01 <|-- AveryLongClass : Cool
  Class03 *-- Class04
  Class05 o-- Class06
  Class07 .. Class08
  Class09 --> C2 : Where am i?
  Class09 --* C3
  Class09 --|> Class07
  Class07 : equals()
  Class07 : Object[] elementData
  Class01 : size()
  Class01 : int chimp
  Class01 : int gorilla
  Class08 <--> C2: Cool label
{{</mermaid>}}

### Git示例

    {{</* mermaid */>}}
    gitGraph:
    options
    {
      "nodeSpacing": 150,
      "nodeRadius": 10
    }
    end
      commit
      branch newbranch
      checkout newbranch
      commit
      commit
      checkout master
      commit
      commit
      merge newbranch
    {{</* /mermaid*/>}}

效果如下：

{{<mermaid>}}
gitGraph:
options
{
  "nodeSpacing": 150,
  "nodeRadius": 10
}
end
  commit
  branch newbranch
  checkout newbranch
  commit
  commit
  checkout master
  commit
  commit
  merge newbranch
{{</mermaid>}}

### 状态机示例

    {{</* mermaid */>}}
    stateDiagram-v2
      open: Open Door
      closed: Closed Door
      locked: Locked Door
      open   --> closed: Close
      closed --> locked: Lock
      locked --> closed: Unlock
      closed --> open: Open
    {{</* /mermaid */>}}

效果如下：

{{<mermaid>}}
stateDiagram-v2
  open: Open Door
  closed: Closed Door
  locked: Locked Door
  open   --> closed: Close
  closed --> locked: Lock
  locked --> closed: Unlock
  closed --> open: Open
{{</mermaid>}}
