import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import vMainWrapper from './components/v-main-wrapper/v-main-wrapper'
import vErrorPage from './components/v-message/v-error-page'

let router = new Router(
    {
        routes: [
            {
                path: "/",
                name: "Home",
                component: vMainWrapper
            },
            {
                path: "/errormessage",
                name: "Error Page",
                component: vErrorPage

            }
        ]

    })

export default  router;