export default function makeUsersController({userAction}) {
  async function create(req, res) {
    try {
      const user = await userAction.createUser()
      if (user) {
        res.send(user);
      }
    } catch (error) {
      console.log(error);
    }

    
  };
  async function findAll(req, res) {
    const user = await userAction.getAllUsers()
    if (user) {
      res.json(user);
    }
  }
  async function findOne(req, res) {
    const user = await userAction.getUser()
    if (user) {
      res.json(user);
    }
  }
  async function findRoleOne(req, res) {
    const user = await userAction.findByNameAndPassword(req.body, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.body}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.body
          });
        }
      } else return data;
    });
    res.send(user);
  };
  async function update (req, res) {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    await userAction.updateUser(
      req.params.userId,
      new userAction(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.userId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Customer with id " + req.params.userId
            });
          }
        } else res.send(data);
      }
    );
  };
  async function remove (req, res) {
    await userAction.removeUser(req.params.userId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Customer with id " + req.params.userId
          });
        }
      } else res.send({ message: `Customer was deleted successfully!` });
    });
  };
  async function deleteAll (req, res) {
    User.removeAllUsers((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all customers."
        });
      else res.send({ message: `All Customers were deleted successfully!` });
    });
  };
  return {
    create,
    findAll,
    findOne,
    findRoleOne,
    update,
    remove,
    deleteAll
  }
}