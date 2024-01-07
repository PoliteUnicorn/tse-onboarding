/**
 * User route requests.
 */

import express from "express";
import * as UserController from "src/controllers/user";
import * as UserValidator from "src/validators/user";

const router = express.Router();

router.get("/:id", UserController.getUser);

router.post("/", UserValidator.createUser, UserController.createUser);
// router.delete("/:id", UserController.removeUser);
// router.put("/:id", UserController.updateUser);

export default router;