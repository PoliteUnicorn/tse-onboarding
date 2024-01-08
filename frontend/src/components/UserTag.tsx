import React from "react";
import { User } from "src/api/users";
import styles from "src/components/UserTag.module.css";

interface UserTagProps {
  user: User | undefined;
}

export const UserTag = ({ user }: UserTagProps) => {
  if (user !== undefined && user.profilePictureURL !== undefined) {
    return (
      <div>
        <img width={32} height={32} src={user.profilePictureURL} />
      </div>
    );
  } else if (user !== undefined && user.profilePictureURL === undefined) {
    return (
      <div>
        <img width={32} height={32} src="/userDefault.svg" />
        <p>{user.name}</p>
      </div>
    );
  } else {
    return (
      <div className={styles.profilePicture}>
        <p>Not Assigned</p>
      </div>
    );
  }
};
