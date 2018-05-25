var echarts = require('echarts')

export const drawbar = (element,xdata,seriesdata,seriesname) => {
	//绘制柱状图，element为此图要嵌入到网页上的元素标识，
	let myChart = echarts.init(document.getElementById(element))
			myChart.setOption({
				tooltip : { trigger: 'axis' },
				title:{
					text:'Bar Chart'
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
						axisLabel:{
							interval:0
						},
						data : xdata
					} 
				],
				yAxis : [ 
					{
					type : 'value',
					axisLabel : { formatter: '{value}%' } 
					} 
				],
				series : [ 
					{ 
						name:seriesname,
						type:'bar',
						data: seriesdata
					}
				]
			});
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
        position:'center'
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
            symbolSize: 20,
            symbol:'circle',
            nodePadding: 2,
            itemStyle: {
                normal: {
                    color: function(params){
                    		var colorlist=['red','gray','brown']
                    		if (params.name=='学科')
                    			return colorlist[2]
                    		if (have.toString().indexOf(params.name)<0)
                    			return colorlist[1]
                    		else return colorlist[0]
                    		
                    	},
                    label: {
                        show: true,
                        formatter: "{b}",
                        position: 'left',
                        textStyle: {
                            color: '#000',
                            fontSize: 25
                        }
                    },
                    lineStyle: {
                        color: 'brown',
                        type: 'solid', // 'curve'|'broken'|'solid'|'dotted'|'dashed'
                        width: 5,
                        length:10
                    }
                },
                emphasis: {
                    color: '#000',
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


export const drawlinechart1 = (element) => {

    let myChart = echarts.init(document.getElementById(element));
        myChart.setOption({
            xAxis: {
                data: ["2017", "2018", "2019"],
                name: 'time'
            },
            yAxis : {},
                series: [{
                    name: 'score',
                    type: 'line',
                    data: [90, 93.33333333333333, 100],
                    itemStyle: {   
                        normal: {
                        color: 'hotpink'
                        }
                    }
                }]
        })
    console.log('画出来了')
};

export const drawlinechart2 = (element, xdata, ydata) => {

    let myChart = echarts.init(document.getElementById(element));
        myChart.setOption({
            xAxis: {
                // data: ["2017","2018"],
                data: xdata,
                name: 'time'
            },
            yAxis : {},
                series: [{
                    name: 'score',
                    type: 'line',
                    // data: [90, 93.33333333333333],
                    data: ydata,
                    itemStyle: {   
                        normal: {
                        color: 'hotpink'
                        }
                    }
                }]
        })
    console.log('画出来了')
};


export const drawlinetest = (element) => {
        // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById(element));
    var option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};

    // 为echarts对象加载数据
    myChart.setOption(option);
}

export const draw3pie = (element, datas, sdata) => {
    var myChart = echarts.init(document.getElementById(element));
    var option = {
    title : {
        text: 'School Type Pie Chart',
        subtext: 'For U',
        x:'center'
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
            // data:[
            //     {value:335, name:'直接访问'},
            //     {value:310, name:'邮件营销'},
            //     {value:234, name:'联盟广告'},
            //     {value:135, name:'视频广告'},
            //     {value:1548, name:'搜索引擎'}
            // ],
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


export const draw3map = (element, datas) => {
        var myChart = echarts.init(document.getElementById(element));

        var option = {
            title: {
                text: 'Package Map',
                subtext: 'For U',
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
                max: 2500,
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
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
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
        text: 'Subject C',
        subtext: '数据来自网络'
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

export const draw5pie = (element, xdata, ydata) =>{
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
                return 100 - params.value + '%'
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
        text: 'Module',
        textStyle: {
                fontSize: 30
            },

        x: 'center'
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
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
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [{
        type: 'pie',
        center: ['20%', '20%'],
        radius: radius,
        x: '0%', // for funnel
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
        center: ['40%', '20%'],
        radius: radius,
        x: '20%', // for funnel
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
        center: ['60%', '20%'],
        radius: radius,
        x: '40%', // for funnel
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
        center: ['80%', '20%'],
        radius: radius,
        x: '60%', // for funnel
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
        center: ['20%', '60%'],
        radius: radius,
        x: '0%', // for funnel
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
        center: ['40%', '60%'],
        radius: radius,
        x: '20%', // for funnel
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
        center: ['60%', '60%'],
        radius: radius,
        x: '40%', // for funnel
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
        center: ['80%', '60%'],
        radius: radius,
        x: '60%', // for funnel
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

