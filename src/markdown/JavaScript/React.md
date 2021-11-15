# jsx
  jsx是js的一种语法扩展
  流程：
  - 编写jsx代码
  - babel编译成React.createElement 
  - React.createElement: 处理传入的属性值 => 遍历config，筛选出可以提进props里的属性 => 提取子元素，推入childArray（即props，children）数组 => 格式化defaultProps => 结合以上数据作为入参，发起ReactElement调用
  - ReactElement: 本质上是一个虚拟dom，通过render方法渲染到容器中

# render
  

# 