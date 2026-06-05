# Admin Panel Setup Guide

## Quick Start

### Accessing the Admin Panel

1. **Open your website and go to**: `/g`
   - Example: `http://localhost/g`
   - Example: `https://shortstudy.com/g`

2. **Enter password**: `123`

3. **Click Login**

---

## Adding Your First Course

### Step 1: Fill in the Course Information

| Field | Example |
|-------|---------|
| Course Name | "HTML Fundamentals" |
| Course Icon | "HTML" |
| Course Level | "Beginner" |
| Duration | "4 weeks" |

### Step 2: Add YouTube Video

Find your YouTube video's ID:
- Go to video on YouTube
- Copy from URL: `https://www.youtube.com/watch?v=**VIDEO_ID**`
- Use in embed link: `https://www.youtube.com/embed/VIDEO_ID`

### Step 3: Write Description

Example with copyable code block:
```
Learn HTML tags and structure. Practice with "your first HTML document" to get started.
```

The text inside quotes `""` becomes a copyable block!

### Step 4: Add Resources (Optional)

Links automatically become clickable:
```
Check out: https://developer.mozilla.org/en-US/docs/Web/HTML
```

### Step 5: Submit

Click **"Add Course to Website"** - Your course is now LIVE!

---

## Course Page Features

When you add a course, users will see:

✅ Course icon and title
✅ Course level and duration
✅ Embedded YouTube video
✅ Full description with copyable code blocks
✅ Clickable resource links
✅ Professional course layout

---

## Managing Courses

### View All Courses
Scroll down to see all added courses with their details

### Delete a Course
Click the **Delete** button next to any course

### Update a Course
Delete the old one and add it again with new information

---

## Important URLs

| Page | URL |
|------|-----|
| Admin Panel | `/g` |
| Courses Page | `/web.html` |
| Course Details | `/course-view.html` (automatic) |
| Home | `/index.html` |

---

## Passwords & Security

- **Admin Password**: `123`
- **Change it in**: `admin.js` line 3

---

## File Locations

```
/admin.html              ← Admin panel page
/admin.js               ← Admin login & functions
/admin.css              ← Admin styling
/course-view.html       ← Course details page
/course-view.css        ← Course details styling
/web.js                 ← Load courses from storage
/.htaccess              ← URL routing
```

---

## Data Storage

- Courses are stored in browser's **localStorage**
- Each visitor's browser stores data separately
- Data persists until browser cache is cleared

---

## YouTube Embed Link Example

❌ **Wrong**: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`

✅ **Correct**: `https://www.youtube.com/embed/dQw4w9WgXcQ`

---

## Text with Quotes = Copyable Block

When you write in description:
```
"const hello = 'world';"
```

Users see it as a styled block they can copy with one click!

---

## Need Help?

1. Check the main README.md file
2. Verify YouTube link format
3. Clear browser cache and try again
4. Check browser console for errors (F12)

---

**Happy course creation! 🎓**
