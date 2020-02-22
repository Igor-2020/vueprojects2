import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import vMainWrapper from './components/v-main-wrapper/v-main-wrapper'

let router = new Router(
    {
        routes: [
            {
                path: "/",
                name: "Home",
                component: vMainWrapper
            }
        ]

    })

export default  router;