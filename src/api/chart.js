var echarts = require('echarts')

export const drawbar = (element,xdata,seriesdata,seriesname) => {
	//绘制柱状图，element为此图要嵌入到网页上的元素标识，
	let myChart = echarts.init(document.getElementById(element))
			myChart.setOption({
				tooltip : { trigger: 'axis' },
				title:{
					text:'小学阶段各学科版本完整度'
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