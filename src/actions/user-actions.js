export default class makeUserAction {
    constructor({ userDb, ObjectId }) {
        this.userDb = userDb
        this.ObjectId = ObjectId
    }
}

const { prototype } = makeUserAction

prototype.createUser = async function createUser(user) {
    const newUser = await this.userDb.create(user)
    return newUser;
}

prototype.getUser = async function getUser(userId) {
    const user = await this.userDb.findById()
    return user;
}
prototype.findByNameAndPassword = async function findByNameAndPassword() {
    const user = await this.userDb.findByNameAndPassword()
    return user;
}
prototype.getAllUsers = async function getAllUsers() {
    const users = await this.userDb.getAll()
    return users;
}
prototype.updateUser = async function updateUser(userId) {
    const user = await this.userDb.updateById(userId)
    return user;
}
prototype.removeUser = async function removeUser(userId) {
    const user = await this.userDb.remove(userId)
    return user;
}
prototype.removeAllUsers = async function removeAllUsers() {
    const users = await this.userDb.removeAll()
    return users;
}