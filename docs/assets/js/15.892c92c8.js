(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{544:function(v,_,l){"use strict";l.r(_);var i=l(2),a=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"jvm-垃圾回收"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#jvm-垃圾回收"}},[v._v("#")]),v._v(" JVM 垃圾回收")]),v._v(" "),l("h2",{attrs:{id:"引用类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#引用类型"}},[v._v("#")]),v._v(" 引用类型")]),v._v(" "),l("ol",[l("li",[l("p",[v._v("强引用：发生 gc 的时候不会被回收")])]),v._v(" "),l("li",[l("p",[v._v("软引用：有用但不是必须的对象，在发生内存溢出之前会被回收")])]),v._v(" "),l("li",[l("p",[v._v("弱引用：有用但不是必须的对象，在下一次 GC 时会被回收")])]),v._v(" "),l("li",[l("p",[v._v("虚引用（幽灵引用/幻影引用）：无法通过虚引用获得对象")]),v._v(" "),l("p",[v._v("用 PhantomReference 实现虚引用，虚引用的用途是在 gc 时返回一个通知")])])]),v._v(" "),l("h2",{attrs:{id:"垃圾辨别方法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#垃圾辨别方法"}},[v._v("#")]),v._v(" 垃圾辨别方法")]),v._v(" "),l("ol",[l("li",[v._v("引用计数器\n"),l("ul",[l("li",[v._v("为每个对象创建一个引用计数，有对象引用时计数器 +1，引用被释放时计数 -1")]),v._v(" "),l("li",[v._v("当计数器为 0 时就可以被回收。缺点是不能解决循环引用的问题")])])]),v._v(" "),l("li",[v._v("可达性分析\n"),l("ul",[l("li",[v._v("从 GC Roots 开始向下搜索，搜索所走过的路径称为引用链")]),v._v(" "),l("li",[v._v("当一个对象到 GC Roots 没有任何引用链相连时，则证明此对象是可以被回收的")])])])]),v._v(" "),l("blockquote",[l("p",[v._v("GC Roots，GC 的根集合， 是一组必须活跃的引用")]),v._v(" "),l("p",[v._v("可作为 GC Roots 的对象有：")]),v._v(" "),l("ol",[l("li",[v._v("虚拟机（栈帧中的本地变量表）中引用的对象")]),v._v(" "),l("li",[v._v("方法区中类静态属性引用的对象")]),v._v(" "),l("li",[v._v("方法区中常量引用的对象")]),v._v(" "),l("li",[v._v("本地方法栈中 JNI（即一般说的 native 方法）中引用的对象")])])]),v._v(" "),l("h2",{attrs:{id:"垃圾收集算法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集算法"}},[v._v("#")]),v._v(" 垃圾收集算法")]),v._v(" "),l("ol",[l("li",[l("p",[v._v("引用计数（Reference Counting）")]),v._v(" "),l("ul",[l("li",[v._v("原理是此对象有一个引用，即增加一个计数，删除一个引用则减少一个计数")]),v._v(" "),l("li",[v._v("垃圾回收时，只用收集计数为 0 的对象")]),v._v(" "),l("li",[v._v("缺点：无法处理循环引用问题")])])]),v._v(" "),l("li",[l("p",[v._v("标记-清除（Mark-Sweep）")]),v._v(" "),l("ul",[l("li",[v._v("第一阶段从引用根节点开始标记所有被引用的对象")]),v._v(" "),l("li",[v._v("第二阶段遍历整个堆，把未标记的对象清除")]),v._v(" "),l("li",[v._v("缺点：此算法需要暂停整个应用，同时，会产生内存碎片")])])]),v._v(" "),l("li",[l("p",[v._v("复制（Copying）")]),v._v(" "),l("ul",[l("li",[v._v("把内存空间划为两个相等的区域，每次只使用其中一个区域")]),v._v(" "),l("li",[v._v("垃圾回收时，遍历当前使用区域，把正在使用中的对象复制到另外一个区域中。次算法每次只处理正在使用中的对象")]),v._v(" "),l("li",[v._v("因为复制成本比较小，同时复制过去以后还能进行相应的内存整理，不会出现“碎片”问题")]),v._v(" "),l("li",[v._v("缺点：需要两倍内存空间")])])]),v._v(" "),l("li",[l("p",[v._v("标记-整理（Mark-Compact）")]),v._v(" "),l("ul",[l("li",[v._v("第一阶段从引用根节点开始标记所有被引用对象")]),v._v(" "),l("li",[v._v("第二阶段遍历整个堆，将所有存活的对象都向一端移动，然后直接清除掉端边界以外的内存")]),v._v(" "),l("li",[v._v("此算法避免了“标记-清除”的碎片问题，同时也避免了“复制”算法的空间问题")])])]),v._v(" "),l("li",[l("p",[v._v("分代（Generational Collecting）")]),v._v(" "),l("ul",[l("li",[v._v("基于对对象生命周期分析后得出的垃圾回收算法")]),v._v(" "),l("li",[v._v("把堆中对象分为年青代、年老代、持久代（JDK8 不存在持久代）")]),v._v(" "),l("li",[v._v("对不同生命周期的对象使用不同的算法进行回收")]),v._v(" "),l("li",[v._v("现在的垃圾回收器一般使用此算法")])])])]),v._v(" "),l("h2",{attrs:{id:"分代回收算法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#分代回收算法"}},[v._v("#")]),v._v(" 分代回收算法")]),v._v(" "),l("blockquote",[l("p",[v._v("起源：研究发现，大部分 java 对象只存活一小段时间，而存活下来的小部分 java 对象则会存活很长一段时间")]),v._v(" "),l("p",[v._v("简单来说，将堆分成两部分，年轻代用来存放新对象，当对象存活时间够长时，移动到年老代")])]),v._v(" "),l("h3",{attrs:{id:"堆的分代"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#堆的分代"}},[v._v("#")]),v._v(" 堆的分代")]),v._v(" "),l("ol",[l("li",[l("p",[v._v("年轻代 Young Generation")]),v._v(" "),l("ul",[l("li",[v._v("默认占总空间的 1/3（通过 -XX:NewRatio 指定年轻代和老年代比例）")]),v._v(" "),l("li",[v._v("分为 Eden、To Survivor、From Survivor 三个区，默认占比 8：1：1（通过 -XX:SurvivorRatio 指定）")])])]),v._v(" "),l("li",[l("p",[v._v("年老代 Tenured Generation")]),v._v(" "),l("ul",[l("li",[v._v("默认占总空间的 2/3")])])]),v._v(" "),l("li",[l("p",[v._v("持久代 Perm Generation（JDK8后不存在）")]),v._v(" "),l("ul",[l("li",[v._v("即方法区，用于存放静态文件，如今Java类、方法等")]),v._v(" "),l("li",[v._v("持久代对垃圾回收没有显著影响")]),v._v(" "),l("li",[v._v("在 JDK8 中，废弃了持久代，改用元空间（metaspace）实现方法区，属于本地内存")])])])]),v._v(" "),l("h3",{attrs:{id:"分代收集"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#分代收集"}},[v._v("#")]),v._v(" 分代收集")]),v._v(" "),l("ol",[l("li",[l("p",[v._v("年轻代回收器")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("假设大部分对象都存活很短时间，需要频繁采用耗时较短的垃圾回收算法")])]),v._v(" "),l("li",[l("p",[v._v("新生代垃圾收集器一般采用复制算法，优点是效率高，缺点是内存利用率低")])]),v._v(" "),l("li",[l("p",[v._v("垃圾收集器有：Serial、ParNew、Parallel Scavenge")])])])]),v._v(" "),l("li",[l("p",[v._v("年老代回收器")]),v._v(" "),l("ul",[l("li",[v._v("假设老年代中的对象大概率继续存活，真正触发老年代 gc 时，代表假设出错或堆空间已耗尽，一般需要全堆扫描，全局垃圾回收")]),v._v(" "),l("li",[v._v("老年代收集器一般采用的是标记-整理的算法进行垃圾回收")]),v._v(" "),l("li",[v._v("垃圾收集器有：Serial Old、Parallel Old、CMS")])])]),v._v(" "),l("li",[l("p",[v._v("整堆回收器")]),v._v(" "),l("p",[v._v("G1：兼顾吞吐量和停顿时间的 GC 实现，JDK 9 以后的默认 GC 选项")])])]),v._v(" "),l("h3",{attrs:{id:"回收过程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#回收过程"}},[v._v("#")]),v._v(" 回收过程")]),v._v(" "),l("blockquote",[l("p",[v._v("新对象存放在年轻代的 Eden 分区，Eden 空间耗尽时，触发 gc，一般使用复制算法")]),v._v(" "),l("p",[v._v("年老代空间占用到达某个值之后就会触发全局垃圾收回，一般使用标记整理的执行算法")])]),v._v(" "),l("ol",[l("li",[v._v("把 Eden 和 From Survivor 存活的对象放入 To Survivor 区")]),v._v(" "),l("li",[v._v("清空 Eden 和 From Survivor 分区")]),v._v(" "),l("li",[v._v("From 和 To 交换指针，保证下次 gc 前To Survivor 为空")]),v._v(" "),l("li",[v._v("Survivor 分区的对象，经过一次复制年龄就 +1，年龄到达 15时（默认 15），Survivor 分区升级为老生代。对象也会直接进入年老代")])]),v._v(" "),l("h3",{attrs:{id:"gc-类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#gc-类型"}},[v._v("#")]),v._v(" gc 类型")]),v._v(" "),l("ol",[l("li",[v._v("Minor GC")])]),v._v(" "),l("ul",[l("li",[v._v("一般情况下，当新对象生成，并且在 Eden 申请空间失败时，就会触发Minor GC")]),v._v(" "),l("li",[v._v("在年轻代 Eden 区域进行GC，清除不存活对象，并且把尚且存活的对象移动到 Survivor 区。然后整理 Survivor 的两个区")]),v._v(" "),l("li",[v._v("很频繁的 gc，不影响老年代")])]),v._v(" "),l("ol",{attrs:{start:"2"}},[l("li",[v._v("Full GC\n对整个堆进行整理，包括Young、Tenured和Perm。Full GC比Scavenge GC要慢，因此应该尽可能减少Full GC。有如下原因可能导致Full GC：\n"),l("ul",[l("li",[v._v("Tenured 被写满")]),v._v(" "),l("li",[v._v("Perm 域被写满（JDK8 之前）")]),v._v(" "),l("li",[v._v("System.gc( ) 被显示调用")]),v._v(" "),l("li",[v._v("上一次 GC 之后堆的各域分配策略动态变化")])])])]),v._v(" "),l("h2",{attrs:{id:"垃圾收集器"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集器"}},[v._v("#")]),v._v(" 垃圾收集器")]),v._v(" "),l("h3",{attrs:{id:"收集器分类"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#收集器分类"}},[v._v("#")]),v._v(" 收集器分类")]),v._v(" "),l("ol",[l("li",[l("p",[v._v("串行收集器")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("使用单线程处理所有垃圾回收工作，因为无需多线程交互，所以效率比较高")])]),v._v(" "),l("li",[l("p",[v._v("无法使用多处理器的优势，所以适合单处理器机器，也可以用在小数据量情况下的多处理器机器")])]),v._v(" "),l("li",[l("p",[v._v("可以使用 -XX:+UseSerialGC 打开")])])])]),v._v(" "),l("li",[l("p",[v._v("并发收集器")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("对年轻代进行并行垃圾回收，可以减少垃圾回收时间。一般在多线程多处理器机器上使用")]),v._v(" "),l("p",[v._v("使用 -XX:+UseParallelGC 打开")])]),v._v(" "),l("li",[l("p",[v._v("并行收集器 jdk5 引入，在 jdk6 中进行了增强，可对堆年老代进行并行收集")]),v._v(" "),l("p",[v._v("使用 -XX:+UseParallelOldGC 打开")])]),v._v(" "),l("li",[l("p",[v._v("如果年老代不使用并发收集，而使用单线程进行垃圾回收，会制约扩展能力")])])])]),v._v(" "),l("li",[l("p",[v._v("并发收集器")]),v._v(" "),l("ul",[l("li",[v._v("可以保证大部分工作都并发进行（应用不停止），垃圾回收只暂停很少的时间")]),v._v(" "),l("li",[v._v("此收集器适合对响应时间要求比较高的中、大规模应用")]),v._v(" "),l("li",[v._v("使用 -XX:+UseConcMarkSweepGC 打开")])])])]),v._v(" "),l("h3",{attrs:{id:"常见收集器"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常见收集器"}},[v._v("#")]),v._v(" 常见收集器")]),v._v(" "),l("ol",[l("li",[v._v("Serial：最早的单线程串行垃圾回收器")]),v._v(" "),l("li",[v._v("Serial Old：Serial 垃圾回收器的老年版本，同样也是单线程的，可以作为 CMS 垃圾回收器的备选预案")]),v._v(" "),l("li",[v._v("ParNew：是 Serial 的多线程版本")]),v._v(" "),l("li",[v._v("Parallel ：\n"),l("ul",[l("li",[v._v("和 ParNew 收集器类似，是多线程的收集器")]),v._v(" "),l("li",[v._v("Parallel 是吞吐量优先的收集器，可以牺牲等待时间换取系统的吞吐量")])])]),v._v(" "),l("li",[v._v("Parallel Old：\n"),l("ul",[l("li",[v._v("是 Parallel 老生代版本")]),v._v(" "),l("li",[v._v("Parallel 使用复制算法，Parallel Old 使用标记-整理算法")])])]),v._v(" "),l("li",[v._v("CMS：一种以获得最短停顿时间为目标的收集器，非常适用 B/S 系统")]),v._v(" "),l("li",[v._v("G1：一种兼顾吞吐量和停顿时间的 GC 实现，是 JDK 9 以后的默认 GC 选项")])]),v._v(" "),l("h3",{attrs:{id:"cms-收集器"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#cms-收集器"}},[v._v("#")]),v._v(" CMS 收集器")]),v._v(" "),l("ol",[l("li",[l("p",[v._v("CMS：Concurrent Mark-Sweep")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("牺牲吞吐量来获得最短回收停顿时间")])]),v._v(" "),l("li",[l("p",[v._v("非常适合用在要求服务器响应速度的应用上")])]),v._v(" "),l("li",[l("p",[v._v("使用 -XX:+UseConcMarkSweepGC 来指定使用 CMS 垃圾回收器")])])])]),v._v(" "),l("li",[l("p",[v._v("CMS 使用标记-清除的算法")]),v._v(" "),l("ul",[l("li",[v._v("在 gc 时候会产生大量的内存碎片")]),v._v(" "),l("li",[v._v("当剩余内存不能满足程序运行要求时，系统将会出现 Concurrent Mode Failure")]),v._v(" "),l("li",[v._v("临时 CMS 会采用 Serial Old 回收器进行垃圾清除，此时的性能将会被降低")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);