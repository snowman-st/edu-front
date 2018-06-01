<template>
  <div>
    <ul>
      <li>
        <div :style="{width: '800px',height:'100px'}">
          资源组织方式得分为：{{score}},各模块详细情况展示如下
        </div>
      </li>
      <li>
        <div id="Pie1Chart" :style="{width: '800px', height: '500px'}"></div>
      </li>
      <li :style="{width: '800px',height:'50px'}"></li>
      <li>
        <div id="Pie2Chart" :style="{width: '800px', height: '500px'}"></div>
      </li>
      <li :style="{width: '800px',height:'50px'}"></li>
      <li>
        <div id="BarChart" :style="{width: '800px', height: '500px'}"></div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
import {get5msg} from '../../api/api'
import {draw5bar,draw5pie} from '../../api/chart'
export default{
    name: 'fifthtable',
    data() {
      return {
        xdata: [],
        y1data: [],
        y2data: [],
        y3data: [],    
        score:0

      }
    },
    methods:{
      drawPie(){
      get5msg().then(response => {
        this.xdata = response.data[0],
        this.y1data = response.data[1],
        this.y2data = response.data[2],
        this.y3data = response.data[3]
        this.score = response.data[4]

        draw5pie('Pie1Chart',this.xdata, this.y1data,'各学科模块化程度')
        draw5pie('Pie2Chart',this.xdata, this.y2data,'各学科层次化程度')
        draw5bar('BarChart', this.xdata, this.y3data,'链接总数')


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