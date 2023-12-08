import React from 'react';
import { Gantt } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';
let tasks = [
    {
        start: new Date(2020, 1, 1),
        end: new Date(2020, 1, 2),
        name: 'Idea',
        id: 'Task 0',
        type: 'task',
        progress: 100,
        isDisabled: true,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
        start: new Date(2020, 1, 3),
        end: new Date(2020, 1, 5),
        name: 'Idea123',
        id: 'Task 1',
        type: 'task',
        progress: 100,
        isDisabled: true,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
        start: new Date(2020, 1, 1),
        end: new Date(2020, 1, 2),
        name: 'Idea868',
        id: 'Task 2',
        type: 'task',
        progress: 100,
        isDisabled: true,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    // Add more tasks here
];
export default function GanttChart() {
    return <Gantt tasks={tasks}/>;
}
