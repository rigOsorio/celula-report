import buildMakeUser from './user-model.js'
import buildMakeCelula from './celula-model.js'


const ObjectId = 2345211

const makeUser = buildMakeUser({ObjectId});
const makeCelula = buildMakeCelula({ObjectId});

export {
    makeUser,
    makeCelula
}