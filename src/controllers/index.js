import celulaController from './celula.controller.js'
import makeUsersController from './user.controller.js'

import {
    userAction,
    celulaAction
} from '../actions/index.js'

const routesCelula = celulaController({ userAction });
const routesUser = makeUsersController({ celulaAction });

export {
    routesCelula,
    routesUser
}