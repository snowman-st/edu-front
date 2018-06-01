<template> 
  <div>      
    <div>
        <div id="LineChart" style="width:800px; height:500px"></div>
    </div>
  </div>
</template>
<script type="text/javascript">
import {getmsg} from '../../api/api'
import {drawlinechart, drawbar, drawlinechart1, drawlinechart2, drawlinechart3, drawlinechart4} from '../../api/chart'
export default{
    name: 'forthtable',
    data() {
      return {
        xdata: [],
        ydata: [],
        y1data: [],
        y2data: []
      }
    },
    methods:{
      drawLine(){
      getmsg().then(response => {
        this.xdata = response.data[0],
        this.ydata = response.data[1],
        this.y1data = response.data[2],
        this.y2data = response.data[3]

        drawlinechart2('LineChart',this.xdata, this.ydata,this.y1data,this.y2data)
        // drawlinechart3('LineChart1',this.xdata, this.y1data)
        // drawlinechart4('LineChart2',this.xdata, this.y2data)
        console.log('linechart')
      })
        .catch(function(error) {
          console.log('the data can not return back!');
          });
      }
  },
    created(){
      this.drawLine()
      console.log(this.xdata)
    }
}
</script>