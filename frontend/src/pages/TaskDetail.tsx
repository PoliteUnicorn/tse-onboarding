import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Task, getTask } from "src/api/tasks";
import styles from "src/pages/TaskDetail.module.css";

import { Button, Page } from "src/components";

export function TaskDetail() {
  const [task, setTask] = useState<Task>();
  const { id } = useParams();

  useEffect(() => {
    getTask(id as string).then((result) => {
      if (result.success) {
        setTask(result.data);
      }
    });
  }, []);

  if (task === undefined) {
    return (
      <Page>
        <Helmet>
          <title> {"Task Not Defined| TSE Todos"}</title>
        </Helmet>
        <h2>This task doesn&apos;t exist!</h2>
      </Page>
    );
  }

  let descriptionDisplay;
  if (task.description?.length === 0) {
    descriptionDisplay = "(No description)";
  } else {
    descriptionDisplay = task.description;
  }

  let assigneeDisplay;
  if (task.assignee === undefined) {
    assigneeDisplay = "Not assigned";
  } else {
    assigneeDisplay = id;
  }

  let taskCompleted;
  if (task.isChecked === true) {
    taskCompleted = "Done";
  } else {
    taskCompleted = "Not done";
  }

  return (
    <Page>
      <Helmet>
        <title> {task.title + "| TSE Todos"}</title>
      </Helmet>
      <p>
        <Link to="/">Back to home</Link>
      </p>
      {/* task title  */}
      <div className={styles.taskRowAndButton}>
        {/* `data-testid` is used by React Testing Library--see the tests in
        `TaskForm.test.tsx` */}
        <h2 className="styles.taskTitle">{task.title}</h2>
        {/* set `type="primary"` on the button so the browser doesn't try to
        handle it specially (because it's inside a `<form>`) */}
        {<Button kind="primary" type="button" data-testid="task-edit-button" label="Edit task" />}
      </div>

      {/* task descitioion   */}
      <div>
        <p>{descriptionDisplay}</p>
      </div>

      {/* assignee label */}
      <div className={styles.labelAndValue}>
        <p>
          <strong>Assignee</strong>
        </p>

        <p>{assigneeDisplay}</p>
      </div>

      {/* status of task label */}
      <div className={styles.labelAndValue}>
        <p>
          <strong>Status</strong>
        </p>
        {/* how to make the status change depending on different things */}

        <p>{taskCompleted}</p>
      </div>

      {/* date created label */}
      <div className={styles.labelAndValue}>
        <p>
          <strong>Date created</strong>
        </p>
        {/* how to make the status change depending on different things */}
        <p>
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "full",
            timeStyle: "short",
          }).format(task.dateCreated)}
        </p>
      </div>
    </Page>
  );
}
