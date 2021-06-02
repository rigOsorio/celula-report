import makeCelulaAction from './celula-actions.js'
import makeUserAction from './user-actions.js'


import {
    makeUser,
    makeCelula
} from '../models/index.js'
import {
    userDb,
    celulaDb
} from '../data/index.js'

const ObjectId = 24234231

const celulaAction = makeCelulaAction({ makeCelula,celulaDb,ObjectId });
const userAction = new makeUserAction({ makeUser,userDb,ObjectId });


export{
    celulaAction,
    userAction
}