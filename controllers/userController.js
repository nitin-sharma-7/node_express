import { usersData } from "../data/usersData.js";

export const getAllUsers = (req, res) => {
  res.status(200).json(usersData);
};

export const getUserById = (req, res, next) => {
  const uid = req.params.id;
  const user = usersData.find((val) => val.id == uid);
  if (!user) {
    const err = new Error("User not found");
    err.statuscode = 404;
    return next(err);
  }
  res.status(200).json(user);
};

export const createUser = (req, res) => {
  const { firstName, lastName, hobby } = req.body;
  const user = {
    id: usersData.length + 1,
    firstName,
    lastName,
    hobby,
  };
  usersData.push(user);
  res.status(201).json(user);
};

export const updateUser = (req, res, next) => {
  const { firstName, lastName, hobby } = req.body;
  const uid = req.params.id;
  const userIndex = usersData.findIndex((val) => val.id == uid);

  if (userIndex === -1) {
    const err = new Error("User not found");
    err.statuscode = 404;
    return next(err);
  }

  const updatedUser = {
    id: usersData[userIndex].id,
    firstName,
    lastName,
    hobby,
  };
  usersData[userIndex] = updatedUser;
  res.json(updatedUser);
};

export const deleteUser = (req, res, next) => {
  const userIndex = usersData.findIndex((val) => val.id == req.params.id);
  if (userIndex === -1) {
    const err = new Error("User not found");
    err.statuscode = 404;
    return next(err);
  }
  const deletedUser = usersData.splice(userIndex, 1);
  res.json(deletedUser);
};
