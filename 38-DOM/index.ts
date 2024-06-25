const box = document.querySelector('.box') as HTMLElement;
const input = document.querySelector('input');
const link = document.querySelector('a');
const p = document.querySelector('.paragraph') as HTMLParagraphElement;
const links = document.querySelectorAll('.a');

input?.value;

if (link) {
  link.href = 'smth';
}

const elem = document.createElement('a');

link?.addEventListener('click', (e) => {
  e.preventDefault();
});

link?.addEventListener('input', (e) => {
  e.preventDefault();
});
