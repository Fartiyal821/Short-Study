// Constants
const PASSWORD = '123';
const PASSWORD_TIMEOUT = 30 * 60 * 1000; // 30 minutes

// DOM Elements
const passwordScreen = document.getElementById('passwordScreen');
const adminPanel = document.getElementById('adminPanel');
const passwordInput = document.getElementById('passwordInput');
const submitPasswordBtn = document.getElementById('submitPassword');
const passwordError = document.getElementById('passwordError');
const logoutBtn = document.getElementById('logoutBtn');
const courseSelect = document.getElementById('courseSelect');
const youtubeLink = document.getElementById('youtubeLink');
const description = document.getElementById('description');
const notes = document.getElementById('notes');
const submitBtn = document.getElementById('submitBtn');
const coursesList = document.getElementById('coursesList');

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if already authenticated
    const authToken = sessionStorage.getItem('adminAuth');
    const authTime = sessionStorage.getItem('adminAuthTime');
    
    if (authToken && authTime) {
        const elapsed = Date.now() - parseInt(authTime);
        if (elapsed < PASSWORD_TIMEOUT) {
            showAdminPanel();
            displayExistingCourses();
            return;
        } else {
            sessionStorage.removeItem('adminAuth');
            sessionStorage.removeItem('adminAuthTime');
        }
    }
    
    showPasswordScreen();
});

// Password handling
submitPasswordBtn.addEventListener('click', handlePasswordSubmit);
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handlePasswordSubmit();
});

function handlePasswordSubmit() {
    const enteredPassword = passwordInput.value;
    
    if (enteredPassword === PASSWORD) {
        passwordError.textContent = '';
        // Set authentication token
        sessionStorage.setItem('adminAuth', 'true');
        sessionStorage.setItem('adminAuthTime', Date.now().toString());
        showAdminPanel();
        displayExistingCourses();
    } else {
        passwordError.textContent = 'Incorrect password. Try again.';
        passwordInput.value = '';
        passwordInput.focus();
    }
}

function showPasswordScreen() {
    passwordScreen.classList.remove('hidden');
    adminPanel.classList.add('hidden');
    passwordInput.focus();
}

function showAdminPanel() {
    passwordScreen.classList.add('hidden');
    adminPanel.classList.remove('hidden');
}

// Logout
logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('adminAuth');
    sessionStorage.removeItem('adminAuthTime');
    courseSelect.value = '';
    youtubeLink.value = '';
    description.value = '';
    notes.value = '';
    passwordInput.value = '';
    passwordError.textContent = '';
    showPasswordScreen();
});

// Form submission
submitBtn.addEventListener('click', handleFormSubmit);

function handleFormSubmit() {
    // Validate inputs
    if (!courseSelect.value) {
        alert('Please select a course category');
        return;
    }
    if (!youtubeLink.value.trim()) {
        alert('Please enter a YouTube embed link');
        return;
    }
    if (!description.value.trim()) {
        alert('Please enter a course description');
        return;
    }

    // Get existing courses
    let courses = JSON.parse(localStorage.getItem('shortstudyCourses')) || [];

    // Create new course object
    const newCourse = {
        id: Date.now().toString(),
        name: getCourseNameFromValue(courseSelect.value),
        category: courseSelect.value,
        youtubeLink: youtubeLink.value.trim(),
        description: description.value.trim(),
        notes: notes.value.trim(),
        icon: getCourseIcon(courseSelect.value),
        level: 'Intermediate',
        duration: '4 weeks',
        videoEmbedded: true
    };

    // Add to courses array
    courses.push(newCourse);

    // Save to localStorage
    localStorage.setItem('shortstudyCourses', JSON.stringify(courses));

    // Show success message
    alert('Course created successfully!');

    // Clear form
    courseSelect.value = '';
    youtubeLink.value = '';
    description.value = '';
    notes.value = '';

    // Refresh existing courses list
    displayExistingCourses();

    // Redirect to the course page
    redirectToCourse(newCourse.category);
}

function redirectToCourse(category) {
    const coursePageMap = {
        'web': 'web.html',
        'python': 'web.html',
        'data': 'web.html'
    };

    const page = coursePageMap[category] || 'web.html';
    setTimeout(() => {
        window.location.href = page;
    }, 500);
}

function getCourseNameFromValue(value) {
    const nameMap = {
        'web': 'Web Development',
        'python': 'Python (Machine Learning)',
        'data': 'Data Science'
    };
    return nameMap[value] || 'Course';
}

function getCourseIcon(value) {
    const iconMap = {
        'web': '🌐',
        'python': '🐍',
        'data': '📊'
    };
    return iconMap[value] || '📚';
}

// Display existing courses
function displayExistingCourses() {
    const courses = JSON.parse(localStorage.getItem('shortstudyCourses')) || [];

    if (courses.length === 0) {
        coursesList.innerHTML = '<p class="empty-message">No courses added yet</p>';
        return;
    }

    coursesList.innerHTML = '';

    courses.forEach((course) => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerHTML = `
            <div class="course-item-info">
                <h3>${course.icon} ${course.name}</h3>
                <p><strong>Category:</strong> ${course.category}</p>
                <p><strong>Added:</strong> ${new Date(parseInt(course.id)).toLocaleDateString()}</p>
                ${course.youtubeLink ? `<p><strong>Video:</strong> Embedded</p>` : ''}
                ${course.description ? `<p><strong>Description:</strong> ${course.description.substring(0, 30)}...</p>` : ''}
            </div>
            <div class="course-item-actions">
                <button class="btn-delete" onclick="deleteCourse('${course.id}')">Delete</button>
            </div>
        `;
        coursesList.appendChild(courseItem);
    });
}

// Delete course
function deleteCourse(courseId) {
    if (confirm('Are you sure you want to delete this course?')) {
        let courses = JSON.parse(localStorage.getItem('shortstudyCourses')) || [];
        courses = courses.filter(c => c.id !== courseId);
        localStorage.setItem('shortstudyCourses', JSON.stringify(courses));
        displayExistingCourses();
        alert('Course deleted successfully!');
    }
}

// Theme toggle (inherit from main site)
document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
});
