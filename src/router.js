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
    router.beforeEach(beforeEach);
    return router;
}

async function beforeEach(to, from, next) {
    const oauth = ['/login', '/register'];
    let layout = !oauth.indexOf(to.path) ? 'base' : '';
    console.log(router.app.$refs.setLayout(layout));
    // console.log(from);
    return next();
}
