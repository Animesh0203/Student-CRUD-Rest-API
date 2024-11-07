// Add a student
function addStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, age, email })
    })
    .then(response => {
        if (!response.ok) throw new Error('Failed to add student');
        return response.json();
    })
    .then(data => {
        alert('Student added successfully');
        loadStudents();
    })
    .catch(error => console.error('Error:', error));
}

// Load all students
function loadStudents() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const studentsList = document.getElementById('students-list');
            studentsList.innerHTML = ''; // Clear the list
            data.forEach(student => {
                const li = document.createElement('li');
                li.textContent = `${student.name} (Age: ${student.age}, Email: ${student.email})`;
                studentsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Run loadStudents on page load
document.addEventListener('DOMContentLoaded', loadStudents);
