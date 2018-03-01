import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


let Home = (resolve)=>{
	return require.ensure([],()=>{
		resolve(require('../component/home/home.component'))
	});
	
}
let Detail = (resolve)=>{
	return require.ensure([],()=>{
		resolve(require('../component/detail/detail.component'))
	},'detail');
	
}

let DetailSeller = (resolve)=>{
	return require.ensure([],()=>{
		resolve(require('../component/detail/children/seller/seller.component'))
	},'detail');
	
}
let DetailShop = (resolve)=>{
	return require.ensure([],()=>{
		resolve(require('../component/detail/children/shop/shop.component'))
	},'detail');
	
}

const routes = [
	{
   		path: '/', 
   		redirect:'/home' 
    },
	{
        path: '/home',
        component: Home
    },
    {
        path: '/detail',
        component: Detail,
        children:[
        {
        	path: '/', 
   			redirect:'/detail/detailSeller' 	
        },{
        	path:'detailSeller',
        	component: DetailSeller
        },{
        	path:'detailShop',
        	component: DetailShop
        }]
        
    }
]

const router = new VueRouter({
    routes
});

export default router;