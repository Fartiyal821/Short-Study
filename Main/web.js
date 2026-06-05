// Load courses from localStorage when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadCoursesFromAdmin();
});

function loadCoursesFromAdmin() {
    const courses = JSON.parse(localStorage.getItem('shortstudyCourses')) || [];
    const coursesContainer = document.getElementById('coursesContainer');

    if (courses.length === 0) {
        // Show placeholder if no courses added
        coursesContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 2rem;">No courses available yet. Check back soon!</p>';
        return;
    }

    coursesContainer.innerHTML = '';

    courses.forEach((course) => {
        const courseCard = createCourseCard(course);
        coursesContainer.appendChild(courseCard);
    });
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    
    // Process description - convert quoted text to code blocks
    let processedDescription = course.description;
    if (processedDescription.includes('"')) {
        // Replace quoted text with code block representation
        processedDescription = processedDescription.replace(/"([^"]*)"/g, '<code class="inline-code">$1</code>');
    }

    card.innerHTML = `
        <div class="course-image">
            <div class="course-icon">${course.icon}</div>
        </div>
        <div class="course-info">
            <h2>${course.name}</h2>
            <p class="course-desc">${processedDescription}</p>
            <div class="course-meta">
                <span class="course-level">${course.level}</span>
                <span class="course-duration">${course.duration}</span>
            </div>
            ${course.notes ? `<div class="course-notes"><strong>📎 Resources:</strong> ${processNotes(course.notes)}</div>` : ''}
            <button class="btn-primary course-btn" onclick="startCourse('${course.id}', '${course.name}')">Start Course</button>
        </div>
    `;

    return card;
}

function processNotes(notes) {
    // Convert URLs to clickable links
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return notes.replace(urlRegex, '<a href="$1" target="_blank" class="resource-link">$1</a>');
}

function startCourse(courseId, courseName) {
    const courses = JSON.parse(localStorage.getItem('shortstudyCourses')) || [];
    const course = courses.find(c => c.id == courseId);

    if (course) {
        // Store current course in sessionStorage
        sessionStorage.setItem('currentCourse', JSON.stringify(course));
        
        // Redirect to course page
        window.location.href = 'course-view.html';
    }
}
