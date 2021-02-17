1.简述 Node.js 的特点以及适用的场景。

    特点: nodejs主线程为单线程, 在Reactor模式下实现事件驱动与异步IO, 适用于处理IO密集型场景
    适用场景: 中间层(提高吞吐量、且很方便的处理数据)、作为后端语言使用(计算量少的项目)、实时聊天程序

2.简述 Buffer 的使用.包括多种创建方式。实例方法，静态方法。

    Buffer作为数据生产者与消费者中间的一个缓冲器，起协调、和缓冲作用
    创建方法: Buffer.from、Buffer.alloc、new Buffer(已弃用)
    实例方法: buf.toString、buf.compare、buf.length、buf.slice、buf.byteOffset
    静态方法: Buffer.isBuffer、Buffer.concat

3.写出5个以上文件操作的API，并且用文字说明其功能。
    
    readFile: 读取文件内容
    readdir: 读取目录内容
    createReadStream: 创建文件可读流
    createWriteStream: 创建文件可写流
    stat: 获取路径指定位置的内容信息
    open: 打开文件, 例如读写时, 需要先打开文件
    close: 关闭文件, 对应open

4.简述使用流操作的优势，以及Node中流的分类。

    优势:
        a. 时间效率, 流的分段处理可同时操作多个数据chunk
        b. 空间效率, 同一时间流无需占用大内存空间
        c. 使用方便, 流配合管理、扩展程序变得简单
    
    分类: 
        a. 可读流, 实现数据的读取
        b. 可写流, 实现数据的写入
        c. 双工流, 包含可读流、可写流
        d. 转换流, 包含可读流、可写流, 且可以对数据进行转换

5.在数据封装与解封装过程中，针对应用层、传输层、网络层、数据链路层、物理层5层分别做了什么事情？

    a. 应用层, 包裹: data
    b. 传输层, 包裹: data、目标端口、源端口
    c. 网络层, 包裹: data、目标端口、源端口、目标IP、源IP
    d. 数据链路层, 包裹: data、目标端口、源端口、目标IP、源IP、目标mac、源mac
    e. 物理层, 通过网卡调制成高低电压



1.统计指定目录中文件总大小。要考虑目录中还有子目录的情况。可以同步编码,异步更好。
    见: work/calculate.js

2. 编写单向链表类并且实现队列的入列出列操作。
    见: work/list.js

3. 基于Node写出一静态服务器。接收请求并且响应特定目录(服务器目录)中的html、css、js、图片等资源。
    见: work/staticServer
