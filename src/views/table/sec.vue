<!-- <template>
	<div>
		<ul>
			<li v-if="msg">
				{{msg.package_from}}
				{{users}}
			</li>
			<li v-else>
				there is nothing return!
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
import {getmsg,testout} from '../../api/api'
import axios from 'axios'
export default {
	name: 'secondtable',
	data() {
		return {
			msg:['hello'],
			users: []
		}
	},
	methods:{
		getUsers () {
      		axios.get('http://127.0.0.1:8000/table4/')
        		.then(res => this.users = res.data)
        		.catch(error => console.log(error))
    	},
		getm(){
			getmsg().then(response => {this.users = response.data})
			.catch(function(error) {
				console.log('the data can not return back!');
			});
		}
	},
	created(){
		this.getm()
		// this.getUsers()
		// console.log("the getmsg is be used!")
	}
}
</script>
<style type="text/css">
</style> -->


<template>       
    <div>
        <div id="LineChart" style="width:800px; height:500px">{{xdata}}</div>
    </div>
<!--     <li>Test Line Chart</li>
    <li>
    <div>
        <div id="TestLineChart" style="width:800px; height:500px">{{xdata}}</div>
    </div>
    </li> -->
</template>
<script type="text/javascript">
import {getmsg} from '../../api/api'
import {drawlinechart, drawbar, drawlinechart1, drawlinechart2, drawlinetest} from '../../api/chart'
export default{
    name: 'forthtable',
    data() {
      return {
        xdata: [],
        ydata: []
      }
    },
    methods:{
      drawLine(){
      getmsg().then(response => {
        this.xdata = response.data[0],
        this.ydata = response.data[1]
        // drawlinechart('LineChart',this.xdata,this.ydata)
        // drawbar('LineChart',this.xdata,this.ydata,'baids')
        // drawlinetest('LineChart')
        // console.log('LineChart1')
        // drawlinechart1('LineChart')
        // console.log('LineChart2')
        drawlinechart2('LineChart',this.xdata, this.ydata)
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
      this.drawLine()
      console.log(this.xdata)
    }
}
</script>