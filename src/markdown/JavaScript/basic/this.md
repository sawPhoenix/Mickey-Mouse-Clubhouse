# this 

  >thi指向会根据环境变量来改变，如果是在一个对象里面调取函数的this，这里的this指向该对象，如果是声明变量调用函数，则this指向声明变量所在的作用域。
  其原理是在内存中的位置不一样，对象和函数在内存中保存的位置不一样，浏览器引擎会将函数单独保存在内存中，然后再将函数的地址赋值给对象或者声明变量。由于函数是一个单独的值，所以它可以在不同的环境中执行。

首先，我们需要函数的理解调用的位置，在调用时this才会出现，

## 绑定规则
 1. 默认绑定，其他规则无法作用时的默认规则。即函数被调用的作用域。
    全局对象在严格模式下不能被默认绑定。

 2. 隐式绑定：当函数在obj中被调用，this则会隐式绑定到该obj的上下文对象中。

 3. 显式绑定：即bind(),call(), apply()，其变种有：硬绑定，  在调用的函数内部显式绑定，所以无论如何调用，this指向一定会发生改变。
 
 
 4. new绑定
   
    使用 new 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。 
     1. 创建（或者说构造）一个全新的对象。 
     2. 这个新对象会被执行 [[ 原型 ]] 连接。
     3. 这个新对象会绑定到函数调用的 this。
     4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。
    使用
  ## 优先级
  new是创建一个新的对象，优先级最高，显式绑定是强制改变this指向，优先级次之，隐式转换优先级较低。
  ### 优先级例外
  1. 把null和undefined作为this绑定的对象传入call，apply或bind，这些值在调用时会被忽略。（常见用法：用apply来“展开”一个数组，进行柯里化）这种情况一般不用，因为会导致function里面的this指向全局对象。解决方法是创造一个DMZ空对象，将值带入进去var ø = Object.create( null );
  2. 
    ```
    function foo() { console.log( this.a ); }
    var a = 2;
    var o = { a: 3, foo: foo };
    var p = { a: 4 };
    o.foo(); // 3 
    (p.foo = o.foo)(); // 2
    ```
    赋值表达式 p.foo = o.foo 的返回值是目标函数的引用，因此调用位置是 foo() 而不是 p.foo() 或者 o.foo()。根据我们之前说过的，这里会应用默认绑定。注意：对于默认绑定来说，决定 this 绑定对象的并不是调用位置是否处于严格模式，而是 函数体是否处于严格模式。如果函数体处于严格模式，this 会被绑定到 undefined，否则 this 会被绑定到全局对象。
  3. 软绑定
    用软绑定来加大绑定的灵活性，使得绑定函数视情况而选择硬绑定还是显示绑定，又或是隐性绑定

  ```
  if (!Function.prototype.softBind) {
    Function.prototype.softBind = function (obj) {
      var fn = this; // 捕获所有 curried 参数
      var curried = [].slice.call(arguments, 1);
      var bound = function () {
        return fn.apply((!this || this === (window || global)) 
        ? obj 
        : this.curried.concat.apply(curried, arguments));
      }; bound.prototype = Object.create(fn.prototype);
      return bound;
    };
  }
  ```

  使用方法：
  ```
  function foo() { console.log("name: " + this.name); }
  var obj = { name: "obj" }, obj2 = { name: "obj2" }, obj3 = { name: "obj3" };
  var fooOBJ = foo.softBind(obj); fooOBJ(); // name: obj 
  obj2.foo = foo.softBind(obj); obj2.foo(); // name: obj2 <---- 看！！！ 
  fooOBJ.call(obj3); // name: obj3 <---- 看！ 
  setTimeout(obj2.foo, 10); // name: obj <---- 应用了软绑定
  ```

  ## 箭头函数
  箭头函数不使用 this 的四种标准规则，而是根据外层（函数或者全局）作用域来决 定 this。
  箭头函数的绑定调用过一次后，会自动绑定到被调用的作用域中，且无法变更，如果第二次绑定到其他作用域上，this也会指向第一次绑定的函数上。



  # 类型
  
  ## 对象

  ### 访问类型
  1. obj.xxx ：属性访问
  2. obj['xxx']：键访问
    
  两者区别： 键访问可以接受任意 UTF-8/Unicode 字符串作为属性名。而且由于键访问使用字符串来访问属性，所以可以在程序中构造这个字符串
  
  例：
  ```
  var myObject = { a:2 };
  var idx;
  if (wantA) { idx = "a"; }
  // 之后 
  console.log( myObject[idx] ); // 2
  ```
这种方式可以用来做可计算属性名，classnames插件用的就是这种方式
  