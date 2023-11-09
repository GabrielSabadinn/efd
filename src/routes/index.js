import { createWebHistory, createRouter } from 'vue-router';

import Principal from '../screens/Principal.vue';
import Opcoes from '../screens/Opcoes.vue';
export const routes = [    
    {path:'/efdReinf', name:'rtfonte',component: Principal},    
	{path:'/efdReinf/:cod', name:'opcoes',component: Opcoes},    
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;