# jsx
  jsx是js的一种语法扩展
  流程：
  - 编写jsx代码
  - babel编译成React.createElement 
  - React.createElement: 处理传入的属性值 => 遍历config，筛选出可以提进props里的属性 => 提取子元素，推入childArray（即props，children）数组 => 格式化defaultProps => 结合以上数据作为入参，发起ReactElement调用
  - ReactElement: 本质上是一个虚拟dom，通过render方法渲染到容器中

# render
  ## state更新流程：
    当react在执行渲染时会触发一个ReactDefaultBatchingStrategy对象（其本身是一个Transaction（事物）机制）来管控render更新，对象中会有一个isBatchingUpdates的锁标识，当这个标识为true的时候，批量更新将会被锁上，无法更新。

    而在render更新流中，isBatchingUpdates在react生命周期函数以及合成事件更新前会被修改为true，当函数执行完毕后，事物的close方法会将其改为false

  - 异步情况
  
    首先，setState本身会将数据添加到更新队列中，每次set都会触发一次入列行为，此时的行为是同步的
  然后，将队列中的数据统一render（更新数据），这个过程是异步的


  - 同步情况：

    在setTimeout等异步或者DOM原生事件情况发生时，isBatchingUpdates已经处于false状态，所以更新是同步的






# hooks

函数式组件和类组件的区别：
  函数组件会捕获render内部的状态
                    ----这是两类组件最大的不同
  class会根据this 的转变而改变props的值，而子组件获取到的则是改变后的props 的值，而函数式组件则会捕获这一状态


## hook
  api：
  https://react.docschina.org/docs/hooks-overview.html

  useEffect：
  ```
  useEffect(() => {
    //挂载阶段执行
    ...

    //卸载阶段执行
    return() => {

    }
  },[])
  ```

  ## hooks原理

  hooks的正常运作在底层依赖于顺序链表，即其本质是一个链表

  hooks调用链路（以useState为例）：
  
  （首次渲染）
  useState ->通过resolveDispatcher获取dispatcher -> 调用dispatcher.useState -> **调用mountState** -> 返回目标数组（如[state,setState]） 
  （二次渲染）
  useState ->通过resolveDispatcher获取dispatcher -> 调用dispatcher.useState -> **调用uodateState -> 调用updateReducer** -> 返回目标数组（如[state,setState]）****

  mountState:用来初始化hooks， 构建链表并渲染（首次渲染）
  updateState：按顺序遍历之前构建好的链表，取出对应的数据信息进行渲染

  hooks的渲染是通过依次遍历来定位每个hooks的内容的


# 虚拟DOM
  - 本质是js和DOM之间的一个映射缓存
    
  - 在形态上表现为： 一个能够描述DOM结构及其属性信息的js对象

  挂载阶段： React结合JSX的描述，构建出虚拟DOM树，然后通过ReactDOM.render实现虚拟DOM到真实DOM的映射（触发渲染流水线）

  更新阶段： 页面的变化会先作用于虚拟DOM，虚拟DOM将在JS层借助算法先对比出具体有那些真实的DOM需要被改变，然后再将这些改变用于真实DOM



## 协调和diff算法
  调和：UI以一种理想化的，或者说‘虚拟的’表现形式被保存于内存中，并**通过如ReactDOM等类库使之与“真实的”DOM同步，这一过程被称为协调（调和）**

- react 15 的栈调和
- react 16+ 的diff

 ### diff：

 设计思想：

 - 若两个组件属于同一个类型，它们将拥有相同的DOM树形结构
 - 处于同一层级的一组子节点，可用通过设置key作为唯一标识从而维持各个节点在不同渲染过程中的稳定性


三个要点：
  1. Diff算法性能突破的关键点在于“分层对比”
  2. 类型一致的节点才有继续Diff的必要性
  3. key属性的设置，可以帮我们竟可能重用同一层级内的节点



React中的Transaction机制：
  其本身是一个盒子，首先会将目标函数用wrapper封装起来，同时用Transaction类暴露的perform方法来执行它