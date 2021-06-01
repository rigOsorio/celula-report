export default async function makeUserDb({makeDb, ObjectId}) {
    this.makeDb = makeDb
    this.ObjectId = ObjectId+1
}

const { prototype } = makeUserDb

prototype.create = async function create({newUser, result}) {
    const db = await this.makeDb()
    db.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if(err) {
            console.log('error: ', err );
            result(err, null);
            return;
        }
        console.log('created user');
        result(null, {id: res.ObjectId, ...newUser});
    })
}
prototype.findById = async function findById({userId, result}) {
    const db = await this.makeDb()
    db.query(`SELECT FROM users WHERE id = ${userId}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('found user: ', res[0]);
            result(null, res[0]);
            return;
        }
        //Not Found
        result({kind: 'not found'}, null);
    })
}
prototype.findByNameAndPassword = async function findByNameAndPassword({user, result}) {
    const db = await this.makeDb()
    console.log('user:', user);
    db.query(`SELECT FROM users WHERE ((name = '${user.name}') AND (password = '${user.password}'))`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
}
prototype.getAll = async function getAll({result}) {
    const db = await this.makeDb()
    db.query('SELECT FROM users', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("users: ", res);
        result(null, res);
    });
}
prototype.updateById = async function updateById({id, user, result}) {
    const db = await this.makeDb()
    db.query('UPDATE users SET name=?, rol=?, password=? WHERE id=?',
    [user.name, user.rol, user.password, id],
    (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("updated customer: ", { id: id, ...user });
        result(null, { id: id, ...user });
    }
    );
}
prototype.remove = async function remove({id, result}) {
    const db = await this.makeDb()
    db.query('DELETE FROM users WHERE id=?', id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted customer with id: ", id);
        result(null, res);
    });
}
prototype.removeAll = async function removeAll({result}) {
    const db = await this.makeDb()
    db.query('DELETE FROM users', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} customers`);
        result(null, res);
    });
}