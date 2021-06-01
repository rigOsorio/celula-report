export default function makeCelulaDb({makeDb, ObjectId}) {
    this.makeDb = makeDb
    this.ObjectId = ObjectId
}

const { prototype } = makeCelulaDb

prototype.insert = async function insert({}) {
    const db = await this.makeDb()

}