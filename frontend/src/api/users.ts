import { type APIResult, get, handleAPIError, post, put } from "src/api/requests";

/**
 * Defines the "shape" of a User object (what fields are present and their types) for
 * frontend components to use. This will be the return type of most functions in this
 * file.
 */
export interface User {
  _id: string;
  name: string;
  profilePictureURL?: string;
}

/**
 * The expected inputs when we want to create a new Task object. In the MVP, we only
 * need to provide the title and optionally the description, but in the course of
 * this tutorial you'll likely want to add more fields here.
 */
export interface CreateUserRequest {
  name: string;
  profilePictureURL?: string;
}

/**
 * The expected inputs when we want to update an existing User object. Similar to
 * `CreateTaskRequest`.
 */
export interface UpdateUserRequest {
  _id: string;
  name: string;
  profilePictureURL?: string;
}

export async function createUser(user: CreateUserRequest): Promise<APIResult<User>> {
  try {
    const response = await post("/api/user", user);
    const json = await response.json();
    return { success: true, data: JSON.parse(json) };
    /*how to parse? do i even need to? */
  } catch (error) {
    return handleAPIError(error);
  }
}

export async function getUser(id: string): Promise<APIResult<User>> {
  try {
    const response = await get(`/api/user/${id}`);
    const json = await response.json();
    return { success: true, data: JSON.parse(json) };
    /*is this how to parse? very confused  */
  } catch (error) {
    return handleAPIError(error);
  }
}

export async function getAllUsers(): Promise<APIResult<User[]>> {
  try {
    const response = await get(`/api/users`);
    const json = await response.json(); /*add user[] or not */
    const userList = [];
    for (const user of json) {
      userList.push(JSON.parse(user));
      /*can i just push the user not parsed?*/
    }
    return { success: true, data: userList };
  } catch (error) {
    return handleAPIError(error);
  }
}

export async function updateUser(user: UpdateUserRequest): Promise<APIResult<User>> {
  try {
    const response = await put(`/api/user`, user);
    const json = await response.json();
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}
