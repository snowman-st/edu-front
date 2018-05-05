<template>
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
import {getmsg} from '../../api/api'
import axios from 'axios'
export default {
	name: 'secondtable',
	data() {
		return {
			msg:{},
			users: []
		}
	},
	methods:{
		getUsers () {
      		axios.get('http://127.0.0.1:8000/table2/')
        		.then(res => this.users = res.data)
        		.catch(error => console.log(error))
    	},
		getm(){
			getmsg().then((response)=> {
				this.msg = response.data
			})
			.catch(function(error) {
				console.log('the data can not return back!');
			});
		}
	},
	created(){
		this.getm()
		this.getUsers()
		console.log("the getmsg is be used!")
	}
}
</script>
<style type="text/css">
</style>