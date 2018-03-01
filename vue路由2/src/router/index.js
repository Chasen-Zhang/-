import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


let Home = (resolve)=>{
	return require.ensure([],()=>{
		resolve(require('../component/home/home.component'))
	});
	
}

let PartA = (resolve)=>{
	return require.ensure([],()=>{
		resolve(require('../component/home/partA/partA.component'))
	});
	
}
let PartB = (resolve)=>{
	return require.ensure([],()=>{
		resolve(require('../component/home/partB/partB.component'))
	});
	
}

let Home2 = (resolve)=>{
	return require.ensure([],()=>{
		resolve(require('../component/home2/home2.component'))
	});
	
}

let PartA2 = (resolve)=>{
	return require.ensure([],()=>{
		resolve(require('../component/home2/partA/partA.component'))
	});
	
}
let PartB2 = (resolve)=>{
	return require.ensure([],()=>{
		resolve(require('../component/home2/partB/partB.component'))
	});
	
}


const routes = [
	{
   		path: '/', 
   		redirect:'/home' 
    },
	{
        path: '/home',
        component: Home,
        children:[
        	{
        		path: '/',
        		component: PartA,
        	},
        	{
        		path: 'partA',
        		component: PartA,
        	},
        	{
        		path: 'partB',
        		component: PartB,
        	}
        ]
    },{
        path: '/home2',
        component: Home2,
        children:[
        	{
        		path: '/',
        		component: PartA2,
        	},
        	{
        		path: 'partA2',
        		component: PartA2,
        	},
        	{
        		path: 'partB2',
        		component: PartB2,
        	}
        ]
    }
]

const router = new VueRouter({
    routes
});

export default router;