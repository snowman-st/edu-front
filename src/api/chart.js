var echarts = require('echarts')
import {get3msg} from './api'

export const drawbar = (element,xdata,seriesdata,seriesname) => {
    //绘制柱状图，element为此图要嵌入到网页上的元素标识，
    let myChart = echarts.init(document.getElementById(element))
            myChart.setOption({
                tooltip : { trigger: 'axis' },
                left:'center',
                title:{
                    text:'小学阶段学科版本完整度',
                    left:'center',
                    textStyle:{
                                //文字颜色
                                color:'#030303',
                                //字体风格,'normal','italic','oblique'
                                fontStyle:'oblique',
                                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                                fontWeight:'normal',
                                //字体系列
                                fontFamily:'微软雅黑',
                                //字体大小
　　　　                            fontSize:16

                        }
                },
                toolbox: {
                    show:true,
                    feature: {
                        mark : {show: true},
                    }
                },
                calculable : true,
                legend: { 
                    show:true,
                    data: seriesname
                },
                xAxis : [ 
                    {
                        type : 'category',
                        name:"科目",
                        axisLabel:{
                            interval:0
                        },
                        data : xdata

                    } 
                ],
                yAxis : [ 
                    {
                    type : 'value',
                    name:"科目版本完整百分比",
                    axisLabel : { formatter: '{value}%' } 
                    } 
                ],
                series : [ 
                    { 
                        name:seriesname,
                        type:'bar',
                        data: seriesdata,
                        barWidth: 30,
                        itemStyle:{
                                    normal:{
                                        color:'#008B8B'
                                    }
                                }
                    }
                ]
            });
};

export const draw5bar = (element,xdata,seriesdata,seriesname) => {
    //绘制柱状图，element为此图要嵌入到网页上的元素标识，
    let myChart = echarts.init(document.getElementById(element))
            myChart.setOption({
                tooltip : { trigger: 'axis' },
                left:'center',
                title:{
                    text:'不同学科资源链接数量',
                    left:'center',
                    textStyle:{
                                //文字颜色
                                color:'#030303',
                                //字体风格,'normal','italic','oblique'
                                fontStyle:'normal',
                                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                                fontWeight:'normal',
                                //字体系列
                                fontFamily:'微软雅黑',
                                //字体大小
　　　　                            fontSize:30

                        }
                },
                toolbox: {
                    show:true,
                    feature: {
                        mark : {show: true},
                    }
                },
                calculable : true,
                legend: { 
                    show:true,
                    data: seriesname
                },
                xAxis : [ 
                    {
                        type : 'category',
                        name:"科目",
                        axisLabel:{
                            interval:0
                        },
                        data : xdata

                    } 
                ],
                yAxis : [ 
                    {
                    type : 'value',
                    name:"资源链接量",
                    axisLabel : { formatter: '{value}' } 
                    } 
                ],
                series : [ 
                    { 
                        name:seriesname,
                        type:'bar',
                        data: seriesdata,
                        barWidth: 30,
                        itemStyle:{
                                    normal:{
                                        color:'#008B8B'
                                    }
                                }
                    }
                ]
            });
};


export const draw4bar1 = (element,xdata,seriesdata,seriesname) => {
    //绘制柱状图，element为此图要嵌入到网页上的元素标识，
    let myChart = echarts.init(document.getElementById(element))
            myChart.setOption({
                tooltip : { trigger: 'axis' },
                left:'center',
                title:{
                    text:'学科点击量',
                    left:'center',
                    textStyle:{
                                //文字颜色
                                color:'#030303',
                                //字体风格,'normal','italic','oblique'
                                fontStyle:'oblique',
                                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                                fontWeight:'normal',
                                //字体系列
                                fontFamily:'微软雅黑',
                                //字体大小
　　　　                            fontSize:16

                        }
                },
                toolbox: {
                    show:true,
                    feature: {
                        mark : {show: true},
                    }
                },
                calculable : true,
                legend: { 
                    show:true,
                    data: seriesname
                },
                xAxis : [ 
                    {
                        type : 'category',
                        name:"科目",
                        axisLabel:{
                            interval:0
                        },
                        data : xdata

                    } 
                ],
                yAxis : [ 
                    {
                    type : 'value',
                    name:'点击量',
                    axisLabel : { formatter: '{value}' } 
                    } 
                ],
                series : [ 
                    { 
                        name:seriesname,
                        type:'bar',
                        data: seriesdata,
                        barWidth: 30,
                        itemStyle:{
                                    normal:{
                                        color:'#008B8B'
                                    }
                                }
                    }
                ]
            });
};

export const draw4bar2 = (element,xdata,seriesdata,seriesname) => {
    //绘制柱状图，element为此图要嵌入到网页上的元素标识，
    let myChart = echarts.init(document.getElementById(element))
            myChart.setOption({
                tooltip : { trigger: 'axis' },
                left:'center',
                title:{
                    text:'学科好评量',
                    left:'center',
                    textStyle:{
                                //文字颜色
                                color:'#030303',
                                //字体风格,'normal','italic','oblique'
                                fontStyle:'oblique',
                                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                                fontWeight:'normal',
                                //字体系列
                                fontFamily:'微软雅黑',
                                //字体大小
　　　　                            fontSize:16

                        }
                },
                toolbox: {
                    show:true,
                    feature: {
                        mark : {show: true},
                    }
                },
                calculable : true,
                legend: { 
                    show:true,
                    data: seriesname
                },
                xAxis : [ 
                    {
                        type : 'category',
                        name:"科目",
                        axisLabel:{
                            interval:0
                        },
                        data : xdata

                    } 
                ],
                yAxis : [ 
                    {
                    type : 'value',
                    name:'好评量',
                    axisLabel : { formatter: '{value}' } 
                    } 
                ],
                series : [ 
                    { 
                        name:seriesname,
                        type:'bar',
                        data: seriesdata,
                        barWidth: 30,
                        itemStyle:{
                                    normal:{
                                        color:'#008B8B'
                                    }
                                }
                    }
                ]
            });
};



export const draw3bar = (element,xdata,seriesdata,seriesname) => {
    //绘制柱状图，element为此图要嵌入到网页上的元素标识，
    let myChart = echarts.init(document.getElementById(element))
    var option = {
                tooltip : { trigger: 'axis' },
                left:'center',
                title:{
                    text:'不同学校上传资源数量',
                    left:'center',
                    textStyle:{
                                //文字颜色
                                color:'#030303',
                                //字体风格,'normal','italic','oblique'
                                fontStyle:'oblique',
                                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                                fontWeight:'normal',
                                //字体系列
                                fontFamily:'微软雅黑',
                                //字体大小
　　　　                            fontSize:16

                        }
                },
                toolbox: {
                    show:true,
                    feature: {
                        mark : {show: true},
                    }
                },
                calculable : true,
                legend: { 
                    show:true,
                    data: seriesname
                },
                grid: { // 控制图的大小，调整下面这些值就可以，
                        x: 40,
                        x2: 100,
                        y2: 150,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
                },
                xAxis : [ 
                    {
                        type : 'category',
                        name:'学校',
                        axisLabel:{
                            interval:0,
                            rotate:-40
                        },
                        data : xdata

                    } 
                ],
                yAxis : [ 
                    {
                    type : 'value',
                    name:'资源上传量',
                    axisLabel : { formatter: '{value}' } 
                    } 
                ],
                series : [ 
                    { 
                        name:seriesname,
                        type:'bar',
                        data: seriesdata,
                        barWidth: 30,
                        itemStyle:{
                                    normal:{
                                        color:'#008B8B'
                                    }
                                }
                    }
                ]
            };
    myChart.setOption(option,true)
};

export const drawtree = (element,treedata,have) =>{
    // var myChart = echarts.init(document.getElementById(element))
    var worldMapContainer = document.getElementById(element);
    var resizeWorldMapContainer = function () {
    worldMapContainer.style.width = element.clientWidth+'px';
    worldMapContainer.style.height = element.clientHeight+'px';
    // echartsWarp.style.width = window.innerWidth+'px';  
    // echartsWarp.style.height = window.innerHeight+'px';
    };
    resizeWorldMapContainer();
    var myChart = echarts.init(worldMapContainer)
    var option = {
    title : {
        text: '小学阶段学科完整度',
        left:'center',
        textStyle:{
                    //文字颜色
                    color:'#030303',
                    //字体风格,'normal','italic','oblique'
                    fontStyle:'oblique',
                    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                    fontWeight:'normal',
                    //字体系列
                    fontFamily:'微软雅黑',
                    //字体大小
　　　　                fontSize:16

                        }
                },
    toolbox: {
        show : true,
    },
    legend:{
        data: ['存在','缺失'],
        left: 'right'
    },
    series : [
        {
            name:'树图',
            type:'tree',
            top:'10%',
            bottom:'10%',
            left:'10%',
            right:'20%',
            orient: 'horizontal',  // vertical horizontal
            //rootLocation: {x: 100,y: 230}, // 根节点位置  {x: 100, y: 'center'}
            // layerPadding: 200,
            hoverable: true,
            roam: true,
            symbolSize: 16,
            symbol:'circle',
            nodePadding: 2,
            itemStyle: {
                normal: {
                    color: function(params){
                            var colorlist=['#008B8B','#8A8A8A','#030303']
                            if (params.name=='学科')
                                return colorlist[2]
                            if (have.toString().indexOf(params.name)<0)
                                return colorlist[1]
                            else return colorlist[0]
                            
                        },
                    borderColor:'#030303',
                    borderWidth: 0,
                    label: {
                        show: true,
                        formatter: "{b}",
                        position: 'left',
                        textStyle: {
                            color: '#030303',
                            fontSize: 16
                        }
                    },
                    lineStyle: {
                        color: '#030303',
                        type: 'dashed', // 'curve'|'broken'|'solid'|'dotted'|'dashed'
                        width: 2,
                        length:10
                    }
                    },
                    emphasis: {
                                color: '#030303',
                                // label: 
                                //     show: false
                                // },
                                borderWidth: 1
                    }
            },
            leaves:{
                label:{
                    normal:{
                        color:'black',
                        position: 'right',
                },
                }
                
            },
            
            data: treedata
        },    ]
};
    myChart.setOption(option);
    window.onresize = function () {
    resizeWorldMapContainer();
    myChart.resize();
    };
}



export const drawlinechart2 = (element, xdata, ydata,y2data,y3data) => {

    let myChart = echarts.init(document.getElementById(element));
        myChart.setOption({
            title : {
                text: '教学资源时效性评价',
                left:'center',
                textStyle:{
                    //文字颜色
                    color:'#030303',
                    //字体风格,'normal','italic','oblique'
                    fontStyle:'oblique',
                    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                    fontWeight:'normal',
                    //字体系列
                    fontFamily:'微软雅黑',
                    //字体大小
　　　　                fontSize:16

                    }
                },
            xAxis: [{
                // data: ["2017","2018"],
                    type : 'category',
                    name: '年段',        //X轴名称单位
                    nameLocation:'end', //名称的位置
                    nameTextStyle:{     //名称的样式
                        color:'#030303',
                        fontSize:'16px'
                    },
                    nameGap:0,  //名称与X轴的距离
                    boundaryGap: true,//坐标的刻度是否在中间
                    min:'3',//坐标轴刻度最小值
                    max:'dataMax', //坐标轴刻度的最大值
                    axisLine:{//坐标轴线条相关设置(颜色等)
                        lineStyle:{
                            color:'#030303'
                        }
                    },
                    axisTick:{ //坐标轴刻度相关设置
                        length:'0' //我把长度设置成0了
                    },
                    axisLabel:{ //坐标轴刻度标签
                        margin:7, //刻度标签与轴线之间的距离
                        textStyle:{
                            color:"#030303",  //坐标轴刻度文字的颜色
                            fontSize:'16px' //坐标轴刻度文字的大小
                        }
                    },
                    data: xdata
                
            }],
            legend : {
                data: ['更新速度评价得分','更新资源来源评价得分','更新资源完整性评价得分'],
                x: 'center',
                y: '5%',
                padding: 10,
            },
            yAxis : [
                {
                    type : 'value', //类型数值轴
                    name:'评价得分',    //坐标轴名称
                    nameTextStyle:{     //名称的样式
                        color:'#030303',
                        fontSize:'16px'
                    },
                    nameGap:3,  //名称与Y轴的距离
                    axisTick:{ //坐标轴刻度相关设置
                        length:'0' //我设置成0了
                    },
                    axisLine:{//坐标轴线条相关设置(颜色等)
                        lineStyle:{
                            color:'#030303'
                        }
                    },
                    axisLabel:{//坐标轴标签相关设置,距离颜色等
                        margin:7,
                        //formatter: '{value} °C',//标签内容内置的格式转化器比如这个表示在后面加一个c
                        textStyle:{
                            color:"#030303",  //坐标轴刻度文字的颜色
                            fontSize:'16px' //坐标轴刻度文字的大小
                        },
                    },
                    splitLine:{    //坐标轴分隔线。默认数值轴显示，类目轴不显示。
                        show:false
                    }
                }
            ],
            grid:{ //直角坐标系内绘图网格
                left:36  //由于1000显示被挡住了,所以我让他左移36px;这个功能类似于paddingleft
            },
            series: [
                {
                    name: '更新速度评价得分',
                    type: 'line',
                    // data: [90, 93.33333333333333],
                    data: ydata,
                },
                {
                    name: '更新资源来源评价得分',
                    type: 'line',
                    // data: [90, 93.33333333333333],
                    data: y2data,
                },
                {
                    name: '更新资源完整性评价得分',
                    type: 'line',
                    // data: [90, 93.33333333333333],
                    data: y3data,
                }
                ]
        })
    console.log('画出来了')
};
export const drawlinechart3 = (element, xdata, ydata) => {

    let myChart = echarts.init(document.getElementById(element));
        myChart.setOption({
            title : {
                text: '教学资源更新速度',
                left:'center',
                textStyle:{
                    //文字颜色
                    color:'#030303',
                    //字体风格,'normal','italic','oblique'
                    fontStyle:'oblique',
                    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                    fontWeight:'normal',
                    //字体系列
                    fontFamily:'微软雅黑',
                    //字体大小
　　　　                fontSize:16

                    }
                },
            xAxis: [{
                // data: ["2017","2018"],
                    type : 'category',
                    name: '年段',        //X轴名称单位
                    nameLocation:'end', //名称的位置
                    nameTextStyle:{     //名称的样式
                        color:'#030303',
                        fontSize:'16px'
                    },
                    nameGap:0,  //名称与X轴的距离
                    boundaryGap: true,//坐标的刻度是否在中间
                    min:'3',//坐标轴刻度最小值
                    max:'dataMax', //坐标轴刻度的最大值
                    axisLine:{//坐标轴线条相关设置(颜色等)
                        lineStyle:{
                            color:'#030303'
                        }
                    },
                    axisTick:{ //坐标轴刻度相关设置
                        length:'0' //我把长度设置成0了
                    },
                    axisLabel:{ //坐标轴刻度标签
                        margin:7, //刻度标签与轴线之间的距离
                        textStyle:{
                            color:"#030303",  //坐标轴刻度文字的颜色
                            fontSize:'16px' //坐标轴刻度文字的大小
                        }
                    },
                    data: xdata
                
            }],
            yAxis : [
                {
                    type : 'value', //类型数值轴
                    name:'评价得分',    //坐标轴名称
                    nameTextStyle:{     //名称的样式
                        color:'#030303',
                        fontSize:'16px'
                    },
                    nameGap:3,  //名称与Y轴的距离
                    axisTick:{ //坐标轴刻度相关设置
                        length:'0' //我设置成0了
                    },
                    axisLine:{//坐标轴线条相关设置(颜色等)
                        lineStyle:{
                            color:'#030303'
                        }
                    },
                    axisLabel:{//坐标轴标签相关设置,距离颜色等
                        margin:7,
                        //formatter: '{value} °C',//标签内容内置的格式转化器比如这个表示在后面加一个c
                        textStyle:{
                            color:"#030303",  //坐标轴刻度文字的颜色
                            fontSize:'16px' //坐标轴刻度文字的大小
                        },
                    },
                    splitLine:{    //坐标轴分隔线。默认数值轴显示，类目轴不显示。
                        show:false
                    }
                }
            ],
            grid:{ //直角坐标系内绘图网格
                left:36  //由于1000显示被挡住了,所以我让他左移36px;这个功能类似于paddingleft
            },
            series: [{
                    name: '评价得分',
                    type: 'line',
                    // data: [90, 93.33333333333333],
                    data: ydata,
                    itemStyle: {   
                        normal: {
                        color: '#008B8B'
                        }
                    }
                }]
        })
    console.log('画出来了')
};

export const drawlinechart4 = (element, xdata, ydata) => {

    let myChart = echarts.init(document.getElementById(element));
        myChart.setOption({
            title : {
                text: '更新资源来源质量',
                left:'center',
                textStyle:{
                    //文字颜色
                    color:'#030303',
                    //字体风格,'normal','italic','oblique'
                    fontStyle:'oblique',
                    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                    fontWeight:'normal',
                    //字体系列
                    fontFamily:'微软雅黑',
                    //字体大小
　　　　                fontSize:16

                    }
                },
            xAxis: [{
                // data: ["2017","2018"],
                    type : 'category',
                    name: '年段',        //X轴名称单位
                    nameLocation:'end', //名称的位置
                    nameTextStyle:{     //名称的样式
                        color:'#030303',
                        fontSize:'16px'
                    },
                    nameGap:0,  //名称与X轴的距离
                    boundaryGap: true,//坐标的刻度是否在中间
                    min:'3',//坐标轴刻度最小值
                    max:'dataMax', //坐标轴刻度的最大值
                    axisLine:{//坐标轴线条相关设置(颜色等)
                        lineStyle:{
                            color:'#030303'
                        }
                    },
                    axisTick:{ //坐标轴刻度相关设置
                        length:'0' //我把长度设置成0了
                    },
                    axisLabel:{ //坐标轴刻度标签
                        margin:7, //刻度标签与轴线之间的距离
                        textStyle:{
                            color:"#030303",  //坐标轴刻度文字的颜色
                            fontSize:'16px' //坐标轴刻度文字的大小
                        }
                    },
                    data: xdata
                
            }],
            yAxis : [
                {
                    type : 'value', //类型数值轴
                    name:'评价得分',    //坐标轴名称
                    nameTextStyle:{     //名称的样式
                        color:'#030303',
                        fontSize:'16px'
                    },
                    nameGap:3,  //名称与Y轴的距离
                    axisTick:{ //坐标轴刻度相关设置
                        length:'0' //我设置成0了
                    },
                    axisLine:{//坐标轴线条相关设置(颜色等)
                        lineStyle:{
                            color:'#030303'
                        }
                    },
                    axisLabel:{//坐标轴标签相关设置,距离颜色等
                        margin:7,
                        //formatter: '{value} °C',//标签内容内置的格式转化器比如这个表示在后面加一个c
                        textStyle:{
                            color:"#030303",  //坐标轴刻度文字的颜色
                            fontSize:'16px' //坐标轴刻度文字的大小
                        },
                    },
                    splitLine:{    //坐标轴分隔线。默认数值轴显示，类目轴不显示。
                        show:false
                    }
                }
            ],
            grid:{ //直角坐标系内绘图网格
                left:36  //由于1000显示被挡住了,所以我让他左移36px;这个功能类似于paddingleft
            },
            series: [{
                    name: '评价得分',
                    type: 'line',
                    // data: [90, 93.33333333333333],
                    data: ydata,
                    itemStyle: {   
                        normal: {
                        color: '#008B8B'
                        }
                    }
                }]
        })
    console.log('画出来了')
};



export const draw3pie = (element, datas, sdata, name) => {
    var myChart = echarts.init(document.getElementById(element));
    var option = {
    title : {
        text: name,
        // subtext: 'For U',
                        left:'center',
                textStyle:{
                    //文字颜色
                    color:'#030303',
                    //字体风格,'normal','italic','oblique'
                    fontStyle:'oblique',
                    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                    fontWeight:'normal',
                    //字体系列
                    fontFamily:'微软雅黑',
                    //字体大小
　　　　                fontSize:16

                    }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: sdata
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data: datas,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

        // 为echarts对象加载数据
    myChart.setOption(option);

}


export const draw3map = (element,element2,datas) => {
        var myChart = echarts.init(document.getElementById(element));

        var option = {
            title: {
                text: '全国各地区上传资源包数量',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['pkgs']
            },
            visualMap: {
                min: 0,
                max: 3000,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
            },
            series: [
                {
                    name: 'Pkgs',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: datas
                }

            ]
        };
    myChart.setOption(option);
}

export const draw4bar = (element,xdata,ydata,zdata) => {
    var myChart = echarts.init(document.getElementById(element));
    var option = {
    title: {
        text: '综合排名靠前的课程展示',
                    left:'left',
                    textStyle:{
                                //文字颜色
                                color:'#030303',
                                //字体风格,'normal','italic','oblique'
                                fontStyle:'oblique',
                                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                                fontWeight:'normal',
                                //字体系列
                                fontFamily:'微软雅黑',
                                //字体大小
　　　　                            fontSize:16

                        }
                
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['ViewNum', 'Score']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: xdata
    },
    series: [
        {
            name: 'ViewNum',
            type: 'bar',
            data: ydata
        },
        {
            name: 'Score',
            type: 'bar',
            data: zdata
        }
    ]
};

  myChart.setOption(option);
}

export const draw5pie = (element, xdata, ydata,tilename) =>{
    var myChart = echarts.init(document.getElementById(element));
var labelTop = {
    normal: {
        label: {
            show: true,
            position: 'center',
            formatter: '{b}',
            textStyle: {
                baseline: 'bottom'
            }
        },
        labelLine: {
            show: false
        }
    }
};
var labelFromatter = {
    normal: {
        label: {
            formatter: function(params) {
                return params.value + '%'
            },
            textStyle: {
                baseline: 'top'
            }
        }
    },
}
var labelBottom = {
    normal: {
        color: '#ccc',
        label: {
            show: true,
            position: 'center'
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [40, 55];
var option = {
    legend: {
        x: 'center',
        y: 'bottom',
        data: xdata
    },
    title: {
        text: tilename,
        textStyle: {
                fontSize: 30
            },

        x: 'center'
    },
    toolbox: {
        show: true,
        feature: {
            magicType: {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        width: '20%',
                        height: '30%',
                        itemStyle: {
                            normal: {
                                label: {
                                    formatter: function(params) {
                                        return 'other\n' + params.value + '%\n'
                                    },
                                    textStyle: {
                                        baseline: 'middle'
                                    }
                                }
                            },
                        }
                    }
                }
            }
        }
    },
    series: [{
        type: 'pie',
        center: ['20%', '25%'],
        radius: radius,
        x: '0%', // for funnel
        y: '35%',
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 100 - ydata[0],
            itemStyle: labelBottom
        }, {
            name: xdata[0],
            value: ydata[0],
            itemStyle: labelTop
        }]
    }, {
        type: 'pie',
        center: ['40%', '25%'],
        radius: radius,
        x: '20%', // for funnel
        y: '35%',
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 100 - ydata[1],
            itemStyle: labelBottom
        }, {
            name: xdata[1],
            value: ydata[1],
            itemStyle: labelTop
        }]
    }, {
        type: 'pie',
        center: ['60%', '25%'],
        radius: radius,
        x: '40%', // for funnel
        y: '35%',
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 100 - ydata[2],
            itemStyle: labelBottom
        }, {
            name: xdata[2],
            value: ydata[2],
            itemStyle: labelTop
        }]
    },{
        type: 'pie',
        center: ['80%', '25%'],
        radius: radius,
        x: '60%', // for funnel
        y: '25%',
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 100 - ydata[3],
            itemStyle: labelBottom
        }, {
            name: xdata[3],
            value: ydata[3],
            itemStyle: labelTop
        }]
    },{
        type: 'pie',
        center: ['20%', '65%'],
        radius: radius,
        x: '0%', // for funnel
        y:'65%',
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 100 - ydata[4],
            itemStyle: labelBottom
        }, {
            name: xdata[4],
            value: ydata[4],
            itemStyle: labelTop
        }]
    },{
        type: 'pie',
        center: ['40%', '65%'],
        radius: radius,
        x: '20%', // for funnel
        y:'65%',
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 100 - ydata[5],
            itemStyle: labelBottom
        }, {
            name: xdata[5],
            value: ydata[5],
            itemStyle: labelTop
        }]
    },{
        type: 'pie',
        center: ['60%', '65%'],
        radius: radius,
        x: '40%', // for funnel
        y:'65%',
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 100 - ydata[6],
            itemStyle: labelBottom
        }, {
            name: xdata[6],
            value: ydata[6],
            itemStyle: labelTop
        }]
    },{
        type: 'pie',
        center: ['80%', '65%'],
        radius: radius,
        x: '60%', // for funnel
        y:'65%',
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 100 - ydata[7],
            itemStyle: labelBottom
        }, {
            name: xdata[7],
            value: ydata[7],
            itemStyle: labelTop
        }]
    }]
};
myChart.setOption(option);
}

