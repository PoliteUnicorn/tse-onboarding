import { RequestHandler } from "express";
import TaskModel from "src/models/task";
import createHttpError from "http-errors";

export const getAllTasks: RequestHandler = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find().sort({ dateCreated: -1 });

    if (tasks === null) {
      throw createHttpError(404, "Tasks not found.");
    }

    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};
