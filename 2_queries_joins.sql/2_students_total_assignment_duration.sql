-- SELECT SUM(assignment_submissions.duration) 
-- FROM students 
-- JOIN assignment_submissions 
-- ON student_id = assignment_submissions.id
-- WHERE name = 'Ibrahim Schimmel';
SELECT sum(assignment_submissions.duration) as total_duration
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';