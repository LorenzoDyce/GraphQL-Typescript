export interface ProjectData {
  id: number;
  name: string;
}

export interface TaskData {
  id: number;
  title: string;
  completed: boolean;
  project_id: number;
}

export const projects: ProjectData[] = [
  { id: 1, name: 'Learn Typescript' },
  { id: 2, name: 'workout' }
];

export const tasks: TaskData[] = [
  { id: 1, title: 'Install typescript', completed: true, project_id: 1 },
  { id: 2, title: 'Install GraphlQL types', completed: false, project_id: 1 },
  { id: 3, title: 'Install Xcode', completed: false, project_id: 1 },
  { id: 4, title: 'Morning Jog', completed: true, project_id: 2 },
  { id: 5, title: 'Visit the gym', completed: false, project_id: 2 }
];
