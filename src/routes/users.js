module.exports = () => {
  const findAll = (req, res) => {
    const user = [{ name: "John Doe", mail: "johndoe@mail.com" }];
    res.status(200).json(user);
  };

  const create = (req, res) => {
    res.status(201).json(req.body);
  };

  return { findAll, create };
};
