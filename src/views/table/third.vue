<!-- <template>       
    <div>
        <div id="PieChart" style="width:800px; height:500px"></div>
    </div>
</template> -->
<template>
  <div>
    <ul>
      <!-- <li>{{tdata}}</li> -->
      <li>School Type Chart</li>
      <li>
        <div id="PieChart1" :style="{width: '800px', height: '500px',color: 'green'}"></div>
      </li>
      <li>Teacher Type Chart</li>
      <li>
        <div id="PieChart2" :style="{width: '800px', height: '500px'}"></div>
      </li>
      <li>Packages Map Chart</li>
      <li>
        <div id="MapChart" :style="{width: '800px', height: '500px'}"></div>
      </li>
      <li>Packages Chart</li>
      <li>
        <div id="BarChart1" :style="{width: '800px', height: '500px'}"></div>
      </li>
      <li>
        <div id="BarChart2" :style="{width: '800px', height: '500px'}"></div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
import {get3msg} from '../../api/api'
import {draw3pie,draw3map, drawbar} from '../../api/chart'
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
        map_data: []        


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
        this.map_data = response.data[10]

        // drawlinechart('LineChart',this.xdata,this.ydata)
        // drawbar('LineChart',this.xdata,this.ydata,'baids')
        // drawlinetest('LineChart')
        // console.log('LineChart1')
        // drawlinechart1('LineChart')
        // console.log('LineChart2')
        draw3pie('PieChart1',this.xdata, this.sdata1)
        draw3pie('PieChart2',this.ydata, this.sdata2)
        drawbar('BarChart1', this.bar1_xdata, this.bar1_ydata, 'school')
        drawbar('BarChart2', this.bar2_xdata, this.bar2_ydata, 'school')
        draw3map('MapChart', this.map_data)

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