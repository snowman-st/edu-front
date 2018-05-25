<template>
  <div>
    <ul>
      <li>
        <div id="Pie1Chart" :style="{width: '1200px', height: '500px'}"></div>
      </li>

      <li>
        <div id="Pie2Chart" :style="{width: '1200px', height: '500px'}"></div>
      </li>

      <li>
        <div id="BarChart" :style="{width: '1200px', height: '500px'}"></div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
import {get5msg} from '../../api/api'
import {draw3pie,draw3map,drawbar,draw5pie} from '../../api/chart'
export default{
    name: 'fifthtable',
    data() {
      return {
        xdata: [],
        y1data: [],
        y2data: [],
        y3data: []     


      }
    },
    methods:{
      drawPie(){
      get5msg().then(response => {
        this.xdata = response.data[0],
        this.y1data = response.data[1],
        this.y2data = response.data[2],
        this.y3data = response.data[3]

        draw5pie('Pie1Chart',this.xdata, this.y1data)
        draw5pie('Pie2Chart',this.xdata, this.y2data)
        drawbar('BarChart', this.xdata, this.y3data)


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