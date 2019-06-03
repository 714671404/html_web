import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import App from './App'

const routes = [
    {
        path: '/',
        component: App
    }
];

const router = createRouter();

export default router;

function createRouter() {
    const router = new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    });
    return router;
}
