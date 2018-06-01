<!-- <template>       
    <div>
        <div id="PieChart" style="width:800px; height:500px"></div>
    </div>
</template> -->
<template>
  <div>
    <ul>
      <li >
        <div :style="{width: '800px',height:'100px'}">
        可用性得分为：{{score}},各个模块详细情况展示如下
        </div>
      </li>
      <li>
        <div id="BarChart1" :style="{width: '800px', height: '500px'}"></div>
      </li>
      <li>
        <div id="BarChart2" :style="{width: '800px', height: '500px'}"></div>
      </li>
      <li>
        <div id="BarChart3" :style="{width: '800px', height: '500px'}"></div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
import {get4msg} from '../../api/api'
import {draw4bar,draw4bar1} from '../../api/chart'
export default{
    name: 'thirdtable',
    data() {
      return {
        bar1_xdata: [],
        bar1_ydata: [],
        bar2_xdata: [],
        bar2_ydata: [],
        xdata:[],
        ydata:[],
        zdata:[], 
        score:0

      }
    },
    methods:{
      drawPie(){
      get4msg().then(response => {
        this.bar1_xdata = response.data[0],
        this.bar1_ydata = response.data[1],
        this.bar2_xdata = response.data[2],
        this.bar2_ydata = response.data[3],
        this.score = response.data[4],
        this.xdata = response.data[5],
        this.ydata = response.data[6],
        this.zdata = response.data[7]

        draw4bar1('BarChart1', this.bar1_xdata, this.bar1_ydata, 'subject')
        draw4bar1('BarChart2', this.bar2_xdata, this.bar2_ydata, 'subject')
        draw4bar('BarChart3', this.xdata, this.ydata, this.zdata)

        // drawlinetest('LineChart')
        // console.log(this.xdata)
        console.log('asd')
      })
        .catch(function(error) {
          console.log('the data can not return back!');
          });
      }
  },
    created(){
      this.drawPie()
      console.log(this.xdata)
    }
}
</script>