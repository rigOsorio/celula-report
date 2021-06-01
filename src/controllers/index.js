import celulaController from './celula.controller.js'
import userController from './user.controller.js'

import {
    userAction,
    celulaAction
} from '../actions/index.js'

const routesCelula = celulaController({ userAction });
const routesUser = userController({ celulaAction });

export {
    routesCelula,
    routesUser
}