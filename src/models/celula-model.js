function Celula({
  name, leader, host, ObjectId
}) {
  if (typeof name !== 'string' || name instanceof String) {
      throw new Error({message: 'Name must be of type String', code: 'S01'})
  }
  if (typeof leader !== 'string' || leader instanceof String) {
      throw new Error({message: 'Leader must be of type String', code: 'S01'});
  }
  if (typeof host !== 'string' || host instanceof String) {
    throw new Error({message: 'Host must be of type String', code: 'S01'});
}

  this.id = ObjectId+1
  this.name = name
  this.leader = leader
  this.host = host
}

const { prototype } = Celula

prototype.getName = function getName() {
  return this.name
}
prototype.getLeader = function getLeader() {
  return this.leader
}
prototype.getHost = function getHost() {
  return this.host
}

export default function buildMakeCelula({ObjectId}) {
  return function makeCelula(celula) {
      return new Celula({...celula, ObjectId})
  }
}