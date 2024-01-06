import { v4 as uuidV4 } from 'uuid';

const list = document.querySelector<HTMLUListElement>('#list');
const form = document.querySelector<HTMLFormElement>('#new-task-form');
const input = document.getElementById(
  'new-task-title',
) as HTMLInputElement | null;
const tasks: Task[] = loadTasks();
tasks.forEach(addNewTask);

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input?.value === '' || input?.value == null) {
    return;
  }

  const task: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(task);
  saveTasks();
  addNewTask(task);
});

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

function addNewTask(task: Task) {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked;
    saveTasks();
  });
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
}

function saveTasks() {
  localStorage.setItem('TASKS', JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const localTasks = localStorage.getItem('TASKS');

  return localTasks ? JSON.parse(localTasks) : [];
}
