import { useEffect, useState } from "react";
import { getAllTasks } from "src/api/tasks";
import { TaskItem } from "src/components";
import styles from "src/components/TaskList.module.css";

import type { Task } from "src/api/tasks";

export interface TaskListProps {
  title: string;
}

export function TaskList({ title }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // your code here
    // call getAllTasks
    getAllTasks().then((result) => {
      // if it succeeds
      if (result.success) {
        setTasks(result.data);
      } else {
        // alert the user that something has gone wrong
        alert(result.error);
      }
    });
  }, []);

  return (
    <div className={styles.outerContainer}>
      <span className={styles.title}>{title}</span>
      <div className={styles.taskContainer}>
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one above to get started.</p>
        ) : (
          tasks.map((task) => (
            <ul key={task._id}>
              {" "}
              <TaskItem task={task} />
            </ul>
          ))
        )}
      </div>
    </div>
  );
}
