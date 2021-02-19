(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{547:function(v,_,a){"use strict";a.r(_);var t=a(2),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"java-内存模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-内存模型"}},[v._v("#")]),v._v(" Java 内存模型")]),v._v(" "),a("h2",{attrs:{id:"计算机内存模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算机内存模型"}},[v._v("#")]),v._v(" 计算机内存模型")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("当程序在运行过程中，会将运算需要的数据从主存复制一份到 CPU 的高速缓存当中，那么 CPU 进行计算时就可以直接从它的高速缓存读取数据和向其中写入数据，当运算结束之后，再将高速缓存中的数据刷新到主存当中")])]),v._v(" "),a("li",[a("p",[v._v("当 CPU 要读取一个数据时，首先从一级缓存中查找，如果没有找到再从二级缓存中查找，如果还是没有就从三级缓存或内存中查找")])]),v._v(" "),a("li",[a("p",[v._v("在 CPU 和主存之间增加缓存，在多线程场景下就可能存在"),a("strong",[v._v("缓存一致性问题")]),v._v("，也就是说，在多核 CPU 中，每个核的自己的缓存中，关于同一个数据的缓存内容可能不一致")])]),v._v(" "),a("li",[a("p",[v._v("为了使处理器内部的运算单元能够尽量的被充分利用，处理器可能会对输入代码进行乱序执行处理。这就是"),a("strong",[v._v("处理器优化")])])]),v._v(" "),a("li",[a("p",[v._v("除了现在很多流行的处理器会对代码进行优化乱序处理，很多编程语言的编译器也会有类似的优化，比如 Java 虚拟机的即时编译器（JIT）也会做"),a("strong",[v._v("指令重排")])])])]),v._v(" "),a("h2",{attrs:{id:"并发编程特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发编程特性"}},[v._v("#")]),v._v(" 并发编程特性")]),v._v(" "),a("ol",[a("li",[a("strong",[v._v("原子性")]),v._v("是指在一个操作中就是 cpu 不可以在中途暂停然后再调度，既不被中断操作，要不执行完成，要不就不执行")]),v._v(" "),a("li",[a("strong",[v._v("可见性")]),v._v("是指当多个线程访问同一个变量时，一个线程修改了这个变量的值，其他线程能够立即看得到修改的值")]),v._v(" "),a("li",[a("strong",[v._v("有序性")]),v._v("即程序执行的顺序按照代码的先后顺序执行")])]),v._v(" "),a("h2",{attrs:{id:"java-memory-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-memory-model"}},[v._v("#")]),v._v(" java memory model")]),v._v(" "),a("p",[v._v("JMM 主要解决的问题： 解决由于多线程通过共享内存进行通信时，存在的"),a("strong",[v._v("本地内存数据不一致")]),v._v("、"),a("strong",[v._v("编译器会对代码指令重排序")]),v._v("、"),a("strong",[v._v("处理器会对代码乱序执行")]),v._v("等带来的问题")]),v._v(" "),a("ul",[a("li",[v._v("缓存一致性问题就是"),a("strong",[v._v("可见性")]),v._v("问题。")]),v._v(" "),a("li",[v._v("处理器优化是可以导致"),a("strong",[v._v("原子性")]),v._v("问题")]),v._v(" "),a("li",[v._v("指令重排会导致"),a("strong",[v._v("有序性")]),v._v("问题")])]),v._v(" "),a("h2",{attrs:{id:"jmm-的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmm-的实现"}},[v._v("#")]),v._v(" jmm 的实现")]),v._v(" "),a("blockquote",[a("p",[v._v("内存模型解决并发问题主要采用两种方式：限制处理器优化和使用内存屏障")])]),v._v(" "),a("h3",{attrs:{id:"原子性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原子性"}},[v._v("#")]),v._v(" 原子性")]),v._v(" "),a("p",[v._v("在 java 中，为了保证原子性，提供了两个高级的字节码指令"),a("code",[v._v("monitorenter")]),v._v("和"),a("code",[v._v("monitorexit")]),v._v("。在 java 中对应的关键字就是"),a("code",[v._v("synchronized")]),v._v("，在 java 中可以使用"),a("code",[v._v("synchronized")]),v._v("来保证方法和代码块内的操作是原子性的")]),v._v(" "),a("h3",{attrs:{id:"可见性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可见性"}},[v._v("#")]),v._v(" 可见性")]),v._v(" "),a("p",[v._v("java 内存模型是通过在变量修改后将新值同步回主内存，在变量读取前从主内存刷新变量值的这种依赖主内存作为传递媒介的方式来实现的")]),v._v(" "),a("p",[v._v("java 中的"),a("code",[v._v("volatile")]),v._v("关键字提供了一个功能，那就是被其修饰的变量在被修改后可以立即同步到主内存，被其修饰的变量在每次是用之前都从主内存刷新。因此，可以使用"),a("code",[v._v("volatile")]),v._v("来保证多线程操作时变量的可见性")]),v._v(" "),a("p",[v._v("除了"),a("code",[v._v("volatile")]),v._v("，java 中的"),a("code",[v._v("synchronized")]),v._v("和"),a("code",[v._v("final")]),v._v("两个关键字也可以实现可见性")]),v._v(" "),a("h3",{attrs:{id:"有序性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有序性"}},[v._v("#")]),v._v(" 有序性")]),v._v(" "),a("p",[v._v("在 java中，可以使用"),a("code",[v._v("synchronized")]),v._v("和"),a("code",[v._v("volatile")]),v._v("来保证多线程之间操作的有序性。实现方式有所区别：")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("volatile")]),v._v("关键字会禁止指令重排")]),v._v(" "),a("li",[a("code",[v._v("synchronized")]),v._v("关键字保证同一时刻只允许一条线程操作")])])])}),[],!1,null,null,null);_.default=r.exports}}]);