function User({
    name, rol, password, ObjectId
}) {
    if (typeof name !== 'string' || name instanceof String) {
        throw new Error({message: 'Name must be of type String', code: 'S01'})
    }
    if (typeof rol !== 'string' || rol instanceof String) {
        throw new Error({message: 'Rol must be of type String', code: 'S01'});
    }

    this.id = ObjectId+1
    this.name = name
    this.rol = rol
    this.password = password
}

const { prototype } = User

prototype.getName = function getName() {
    return this.name
}
prototype.getRol = function getRol() {
    return this.rol
}
prototype.getPassword = function getPassword() {
    return this.password
}

export default function buildMakeUser({ObjectId}) {
    return function makeUser(user) {
        return new User({...user, ObjectId})
    }
}