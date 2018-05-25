<!-- <template>       
    <div>
        <div id="PieChart" style="width:800px; height:500px"></div>
    </div>
</template> -->
<template>
  <div>
    <ul>
      <li>U Chart</li>
      <li>
        <div id="BarChart1" :style="{width: '1200px', height: '500px'}"></div>
      </li>
      <li>
        <div id="BarChart2" :style="{width: '1200px', height: '500px'}"></div>
      </li>
      <li>
        <div id="BarChart3" :style="{width: '1200px', height: '500px'}"></div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
import {get4msg} from '../../api/api'
import {draw3pie,draw3map, drawbar, draw4bar} from '../../api/chart'
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
        zdata:[]   


      }
    },
    methods:{
      drawPie(){
      get4msg().then(response => {
        this.bar1_xdata = response.data[0],
        this.bar1_ydata = response.data[1],
        this.bar2_xdata = response.data[2],
        this.bar2_ydata = response.data[3],
        this.xdata = response.data[5],
        this.ydata = response.data[6],
        this.zdata = response.data[7]

        drawbar('BarChart1', this.bar1_xdata, this.bar1_ydata, 'subject')
        drawbar('BarChart2', this.bar2_xdata, this.bar2_ydata, 'subject')
        draw4bar('BarChart3', this.xdata, this.ydata, this.zdata)

        // drawlinetest('LineChart')
        console.log(this.xdata)
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