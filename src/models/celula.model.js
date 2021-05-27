import sql from '../data/index.js'


// constructor
const Celula = function(celula) {
  this.name = celula.name;
  this.leader = celula.leader;
  this.host = celula.host;
};


Celula.create = (newCelula, result) => {
  console.log('newCelula', newCelula);
  //console.log('newCelula ',newCelula);
  sql.query("INSERT INTO celula SET ?", newCelula, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created celula: ", { id: res.insertId, ...newCelula });
    result(null, { id: res.insertId, ...newCelula });
  });
};

Celula.findById = (celulaId, result) => {
  sql.query(`SELECT * FROM celula WHERE id = ${celulaId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found celula: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Celula.getAll = result => {
  sql.query("SELECT * FROM celula", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

Celula.updateById = (id, celula, result) => {
  sql.query(
    "UPDATE celula SET name = ?, leader = ?, host = ? WHERE id = ?",
    [celula.name, celula.leader, celula.host, id],
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

      console.log("updated customer: ", { id: id, ...celula });
      result(null, { id: id, ...celula });
    }
  );
};

Celula.remove = (id, result) => {
  sql.query("DELETE FROM celula WHERE id = ?", id, (err, res) => {
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
};

Celula.removeAll = result => {
  sql.query("DELETE FROM celula", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

export default Celula;