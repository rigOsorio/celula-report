import celulaController from './celula.controller.js'
import userController from './user.controller.js'



const routesCelula = celulaController({});
const routesUser = userController({});

export {
    routesCelula,
    routesUser
}