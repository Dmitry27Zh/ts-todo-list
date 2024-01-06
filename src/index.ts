// import { v4 as uuidV4 } from 'uuid';

// console.log(uuidV4());

const list = document.querySelector<HTMLUListElement>('#list');
const form = document.querySelector<HTMLFormElement>('#new-task-form');
const input = document.getElementById(
  'new-task-input',
) as HTMLInputElement | null;

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input?.value === '' || input?.value == null) {
    return;
  }
});
