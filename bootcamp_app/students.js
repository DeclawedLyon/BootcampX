const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const input = process.argv.splice(2);
const processInput = (input) => {
  // store user input
  const cohortName = input[0];
  const resultsLimit = input[1];
  const inputArray = [cohortName, resultsLimit];

  const queryString = `
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
`
  pool.query(queryString, inputArray)
  .then(res => {
    res.rows.forEach(user => {
     console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    })
  })
  .catch(err => console.error('query error', err.stack));
}
processInput(input);

// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
//   })
// })
// .catch(err => console.error('query error', err.stack));