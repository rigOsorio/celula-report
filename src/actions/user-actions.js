export default function makeUserAction({ userDb, ObjectId }) {
    this.userDb = userDb
    this.ObjectId = ObjectId
}

const { prototype } = makeUserAction

prototype.createUser = async function createUser() {
    const newUser = await this.userDb.create()
    return newUser;
}

prototype.getUsers = async function getUsers() {
    const users = await this.userDb.getAll()
    return users;
}