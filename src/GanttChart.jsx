import React from 'react';
import { Gantt } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';

export default function GanttChart({project}) {
	//project -> milestone -> tasks - flatten into one array and display all
	const tasks_arr = [];
	let id = 0

    if (Array.isArray(project.milestones)) {
        for (const milestone of project.milestones) {
            let task_ids = []
            if (milestone && milestone.completion_date) {
                if (Array.isArray(milestone.tasks)) {
                    for (const task of milestone.tasks) {
                    		id += 1
                        if (task && task.start_time && task.end_time) {
                            tasks_arr.push({
                                start: new Date(task.start_time),
                                end: new Date(task.end_time),
                                name: `Task ${task.task_id} of Milestone ID ${milestone.milestone_id}: ${task.task_desc}`,
                                id: id,
                                type: "task",
                                progress: 100,
                                isDisabled: true,
                                styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
                            })
                            task_ids.push(id)
                        } else {
                            console.error("Task object is missing required properties");
                        }
                    }
                }
                id += 1;
                tasks_arr.push({
                    start: new Date(new Date(milestone.completion_date) - 86400000),
                    end: new Date(milestone.completion_date),
                    name: `Milestone ID ${milestone.milestone_id}: ${milestone.milestone_desc}`,
                    id: id,
                    type: "milestone",
                    progress: 100,
                    dependencies: task_ids,
                    isDisabled: true,
                    styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
                })
            } else {
                console.error("Milestone object is missing required properties");
            }
        }
    } else {
        console.error("project.milestones is not an array");
    }
    if (tasks_arr.length > 0) return <Gantt tasks={tasks_arr}/>;
    else return <h1>No milestones to show!</h1>
}
