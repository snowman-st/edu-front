<template>
  <div>
    <ul>
      <!-- <li>{{tdata}}</li> -->
      <li>版本完整度</li>
      <li>
        <div id="myChart" :style="{width: '800px', height: '500px',color: 'green'}"></div>
      </li>
      <li>科目完整度</li>
      <li>
        <div id="treeChart" :style="{width: '800px', height: '500px'}"></div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
import {drawbar,drawtree} from '../../api/chart'
import {getsubject} from '../../api/api'
export default{
    name: 'firsttable',
    data() {
      return {
        xdata: [],
        ydata: [],
        // xdata: ["语文",'数学','英语','品德与生活','社会','体育','音乐','美术','科学','信息技术'],
        // ydata: [8,8,8,5,5,2,3,5,7,6],
        tdata: [],
        allsub:[]
      }
    },
    methods:{
      getm(){
      getsubject().then(response => {
        this.xdata = response.data[0],
        this.ydata = response.data[1],
        this.allsub = response.data[2]
        drawbar('myChart',this.xdata,this.ydata,'百分比')
        this.handledata()
        drawtree('treeChart',this.tdata,this.xdata)
      })
        .catch(function(error) {
          console.log('the data can not return back!');
          });
      },
      handledata(){
        var child = new Array()
        var i
        console.log(this.allsub)
        for (i=0;i<this.allsub.length;i++){
          var dict = {"name":this.allsub[i]}
          console.log(dict)
          child.push(dict)
        }
        var map = {"name":'学科',"children":child}
        this.tdata.push(map)
      },
      gettest(){
        console.log('sdaflk')
      }
    },
    mounted(){
      // console.log(this.xdata)
      // drawbar('myChart',this.xdata,this.ydata,'数量')
      // drawtree('treeChart',this.tdata,this.xdata)
    },
    created(){
      this.getm()
      // this.handledata()
      // console.log((this.alldata))
    }
}
</script>