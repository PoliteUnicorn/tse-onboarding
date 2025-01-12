import { CheckButton } from "src/components/CheckButton";
import styles from "src/components/TaskItem.module.css";

import type { Task } from "src/api/tasks";

export interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  let descriptionColor = styles.textContainer;
  if (task.isChecked) {
    descriptionColor += ` ${styles.checked}`;
  }
  return (
    <div className={styles.item}>
      {/* render CheckButton here */}
      <CheckButton checked={task.isChecked} />

      <div className={descriptionColor}>
        <span className={styles.title}>{task.title}</span>
        {task.description && <span className={styles.description}>{task.description}</span>}
      </div>
    </div>
  );
}
