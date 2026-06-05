// Password validation
const ADMIN_PASSWORD = '123';

document.addEventListener('DOMContentLoaded', () => {
    // Check if already logged in
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
        showAdminPanel();
    }

    // Login functionality
    const passwordInput = document.getElementById('passwordInput');
    const loginBtn = document.getElementById('loginBtn');
    const loginError = document.getElementById('loginError');

    loginBtn.addEventListener('click', () => {
        const password = passwordInput.value;
        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem('adminLoggedIn', 'true');
            loginError.textContent = '';
            showAdminPanel();
        } else {
            loginError.textContent = '❌ Incorrect password. Try again.';
            passwordInput.value = '';
            passwordInput.focus();
        }
    });

    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });

    // Logout functionality
    document.getElementById('logoutBtn').addEventListener('click', () => {
        sessionStorage.removeItem('adminLoggedIn');
        location.reload();
    });

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = localStorage.getItem('theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme);
        });
        updateThemeIcon(localStorage.getItem('theme') || 'light');
    }

    // Course form submission
    document.getElementById('courseForm').addEventListener('submit', (e) => {
        e.preventDefault();
        addCourse();
    });

    // Load and display existing courses
    displayCourses();
});

function showAdminPanel() {
    document.getElementById('loginScreen').classList.remove('active');
    document.getElementById('adminPanel').classList.add('active');
}

function addCourse() {
    const courseName = document.getElementById('courseName').value;
    const courseIcon = document.getElementById('courseIcon').value;
    const courseLevel = document.getElementById('courseLevel').value;
    const courseDuration = document.getElementById('courseDuration').value;
    const youtubeLink = document.getElementById('youtubeLink').value;
    const courseDescription = document.getElementById('courseDescription').value;
    const courseNotes = document.getElementById('courseNotes').value;

    // Get existing courses from localStorage
    let courses = JSON.parse(localStorage.getItem('shortstudyCourses')) || [];

    // Create new course object
    const newCourse = {
        id: Date.now(),
        name: courseName,
        icon: courseIcon,
        level: courseLevel,
        duration: courseDuration,
        youtubeLink: youtubeLink,
        description: courseDescription,
        notes: courseNotes,
        dateAdded: new Date().toLocaleString()
    };

    // Add to courses array
    courses.push(newCourse);

    // Save to localStorage
    localStorage.setItem('shortstudyCourses', JSON.stringify(courses));

    // Show success message
    const successMsg = document.getElementById('successMsg');
    successMsg.style.display = 'block';
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 3000);

    // Reset form
    document.getElementById('courseForm').reset();

    // Refresh courses list
    displayCourses();
}

function displayCourses() {
    const courses = JSON.parse(localStorage.getItem('shortstudyCourses')) || [];
    const coursesList = document.getElementById('coursesList');

    if (courses.length === 0) {
        coursesList.innerHTML = '<p class="no-courses">No courses added yet</p>';
        return;
    }

    coursesList.innerHTML = '';

    courses.forEach((course, index) => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerHTML = `
            <div class="course-item-header">
                <div class="course-item-title">
                    <span class="course-icon-small">${course.icon}</span>
                    <h3>${course.name}</h3>
                </div>
                <button class="btn-delete" onclick="deleteCourse(${course.id})">Delete</button>
            </div>
            <div class="course-item-details">
                <p><strong>Level:</strong> ${course.level}</p>
                <p><strong>Duration:</strong> ${course.duration}</p>
                <p><strong>YouTube Link:</strong> <a href="${course.youtubeLink}" target="_blank">${course.youtubeLink}</a></p>
                <p><strong>Description:</strong> ${course.description}</p>
                ${course.notes ? `<p><strong>Notes:</strong> ${course.notes}</p>` : ''}
                <p><small>Added on: ${course.dateAdded}</small></p>
            </div>
        `;
        coursesList.appendChild(courseItem);
    });
}

function deleteCourse(courseId) {
    if (confirm('Are you sure you want to delete this course?')) {
        let courses = JSON.parse(localStorage.getItem('shortstudyCourses')) || [];
        courses = courses.filter(course => course.id !== courseId);
        localStorage.setItem('shortstudyCourses', JSON.stringify(courses));
        displayCourses();
    }
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

// Check if session is still valid (prevent back button access)
window.addEventListener('beforeunload', () => {
    // This helps prevent caching issues
});
