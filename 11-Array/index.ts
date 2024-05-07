const departments: string[] = ['dev', 'design', 'marketing'];

const nums: number[] = [3, 4, 5];

const nums1: any[] = [3, 'test', { a: 1 }];

const nums2: number[][] = [
  [3, 4, 5],
  [3, 4, 5],
];

const department = departments[0];

// departments.push(5)

const report = departments
  .filter((d: string) => d !== 'dev')
  .map((d: string) => `${d} - done`); // [ 'design - done', 'marketing - done' ]

/*
const report = departments
  .filter((d: string) => d !== 'dev')
  .map((d: string) => {
    return 4;
  })
  .map((d) => `${d + 10} - done`);
  */

console.log(report);

const [first, second] = report;
console.log(first, second); // [ 'design - done', 'marketing - done' ]
