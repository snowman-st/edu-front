<template>
  <div>
    <ul>
      <li >
        <div :style="{width: '800px',height:'100px'}">
        权威性得分为：{{score}},各个模块详细情况展示如下
        </div>
      </li>
      <li>
        <div id="PieChart1" :style="{width: '800px', height: '500px',color: 'green'}"></div>
      </li>
      <li>
        <div id="PieChart2" :style="{width: '800px', height: '500px'}"></div>
      </li>
      <li>
        <div id="MapChart" :style="{width: '800px', height: '500px'}"></div>
      </li>
      <li>
        <div id="BarChart1" :style="{width: '800px', height: '500px'}"></div>
      </li>
    </ul>
    <pro></pro>
  </div>
</template>
<script type="text/javascript">
import {get3msg} from '../../api/api'
import {draw3pie,draw3map,draw3bar} from '../../api/chart'

require('../../assets/china.js')
export default{
    name: 'thirdtable',
    data() {
      return {
        xdata: [],
        ydata: [],
        sdata1: [],
        sdata2: [],
        bar1_xdata: [],
        bar1_ydata: [],
        bar2_xdata: [],
        bar2_ydata: [],
        map_data: [],
        score:0       
      }
    },

    methods:{
      drawPie(){
      get3msg().then(response => {
this.xdata = response.data[0],
        this.ydata = response.data[1],
        this.sdata1 = response.data[2],
        this.sdata2 = response.data[4],
        this.bar1_xdata = response.data[6],
        this.bar1_ydata = response.data[7],
        this.bar2_xdata = response.data[8],
        this.bar2_ydata = response.data[9],
        this.map_data = response.data[10],
        this.score = response.data[11]


        draw3pie('PieChart1',this.xdata, this.sdata1,"学校类型分布")
        draw3pie('PieChart2',this.ydata, this.sdata2,"教师类型分布")
        draw3bar('BarChart1', this.bar1_xdata, this.bar1_ydata, 'school')
        draw3bar('BarChart2', this.bar2_xdata, this.bar2_ydata, 'school')
        draw3map('MapChart', this.map_data)
        console.log('test')
      })
        .catch(function(error) {
          console.log('the data can not return back!');
          });
      }
  },
    created(){
      this.drawPie()
      // console.log(this.xdata)
    }
}
</script>