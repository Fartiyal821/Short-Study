# ✅ Admin Panel Testing Checklist

## Pre-Testing
- [ ] All files have been created/updated
- [ ] `.htaccess` is in the root directory
- [ ] Using a web server (not just opening HTML files)
- [ ] Browser has JavaScript enabled

## Part 1: Admin Panel Access

### Accessing the Admin Panel
- [ ] Can access `/g` URL
- [ ] Admin login screen appears
- [ ] Login screen has password input field
- [ ] Login screen shows "Admin Panel" heading

### Password Test
- [ ] Typing wrong password shows error message
- [ ] Error message clears when retrying
- [ ] Password cannot be empty (try to login)
- [ ] Correct password (123) logs in successfully

## Part 2: Admin Panel Interface

### Layout & Navigation
- [ ] Admin panel displays correctly
- [ ] Navigation bar is visible
- [ ] "Logout" button is visible and clickable
- [ ] Theme toggle button works (light/dark mode)
- [ ] Form title "Add New Course" is visible

### Form Fields
- [ ] Course Name field is visible and editable
- [ ] Course Icon field is visible and editable
- [ ] Course Level dropdown has 3 options
- [ ] Course Duration field is visible and editable
- [ ] YouTube Link field is visible and editable
- [ ] Course Description textarea is visible and editable
- [ ] Notes textarea is visible and editable
- [ ] "Add Course to Website" button is visible
- [ ] Form has helpful labels and hints

## Part 3: Adding a Test Course

### Fill Form
- [ ] Can type in Course Name field
- [ ] Can type in Course Icon field
- [ ] Can select from Course Level dropdown
- [ ] Can type in Course Duration field
- [ ] Can paste YouTube embed link
- [ ] Can type course description
- [ ] Can type course notes

### Test Data
Enter this test data:
```
Course Name: Test Course
Icon: TEST
Level: Beginner
Duration: 1 week
YouTube: https://www.youtube.com/embed/dQw4w9WgXcQ
Description: This is a test course. Try copying this code: "console.log('Hello World');"
Notes: Test resources: https://www.example.com
```

### Submit Form
- [ ] Can click "Add Course to Website" button
- [ ] Form doesn't submit if required fields are empty
- [ ] Success message appears after submission
- [ ] Success message disappears after 3 seconds
- [ ] Form resets after successful submission

## Part 4: Course Management Section

### View Added Courses
- [ ] "Manage Courses" section is visible
- [ ] Newly added course appears in the list
- [ ] Course displays all information correctly:
  - [ ] Course name appears
  - [ ] Course icon appears in colored box
  - [ ] Course level displays correctly
  - [ ] Course duration displays correctly
  - [ ] YouTube link is shown and clickable
  - [ ] Description shows correctly
  - [ ] Notes/resources show correctly
  - [ ] Date added shows correctly

### Delete Functionality
- [ ] Delete button appears for each course
- [ ] Clicking delete shows confirmation
- [ ] Confirming delete removes course from list
- [ ] Course no longer in localStorage
- [ ] Page updates immediately

## Part 5: Website Display

### Check Courses Page
- [ ] Go to `/web.html` or courses page
- [ ] Added course appears on the page
- [ ] Course displays as a card with:
  - [ ] Icon/Code in colored box
  - [ ] Course name as heading
  - [ ] Course description visible
  - [ ] Level badge shows "Beginner"
  - [ ] Duration badge shows "1 week"
  - [ ] "Start Course" button is visible

### Course Card Layout
- [ ] Icon and name layout looks professional
- [ ] Description is readable
- [ ] Metadata badges are styled correctly
- [ ] Button is clickable

## Part 6: Course Viewing

### Start Course
- [ ] Can click "Start Course" button
- [ ] Page loads successfully
- [ ] URL changes to `/course-view.html`

### Course View Page
- [ ] Course title displays correctly
- [ ] Course icon displays correctly
- [ ] Level and duration badges show
- [ ] Back button is visible and works
- [ ] YouTube video is embedded correctly
- [ ] Video plays when clicked
- [ ] Video is responsive (resizes with window)

### Course Details
- [ ] Course description displays
- [ ] Code blocks appear formatted (text in quotes)
- [ ] Code blocks are styled differently than regular text
- [ ] Resources/notes section displays
- [ ] Links are clickable
- [ ] Links open in new tabs
- [ ] "Enroll" button appears and is clickable

## Part 7: Special Features

### Code Block Copying (Optional Test)
- [ ] Description includes quoted text
- [ ] Quoted text appears as a styled block
- [ ] Block is visually distinct from other text

### Link Functionality
- [ ] Links in notes are underlined
- [ ] Links are colored differently
- [ ] Clicking links opens in new tab
- [ ] Links in notes section all work

### Responsive Design
- [ ] Test on desktop (resize to different widths)
- [ ] Test on tablet resolution (768px)
- [ ] Test on mobile resolution (375px)
- [ ] All elements remain readable
- [ ] Buttons remain clickable
- [ ] Video resizes properly
- [ ] Admin form remains usable

## Part 8: Session & Security

### Session Management
- [ ] Logout button works
- [ ] Clicking logout returns to login screen
- [ ] Cannot access admin panel without login
- [ ] Password is case-sensitive
- [ ] Session persists when navigating pages
- [ ] Session clears when browser closes

### Data Persistence
- [ ] Add a course
- [ ] Refresh the page
- [ ] Course still appears
- [ ] Close browser
- [ ] Open browser again
- [ ] Course still there (localStorage working)

## Part 9: Theme Switching

### Light/Dark Mode
- [ ] Theme toggle button works in admin panel
- [ ] Theme toggle button works in course view
- [ ] Switching themes changes colors appropriately
- [ ] Text remains readable in both themes
- [ ] Form elements visible in both themes
- [ ] Video container visible in both themes

### Theme Persistence
- [ ] Switch to dark mode
- [ ] Refresh page
- [ ] Dark mode persists
- [ ] Navigate to different page
- [ ] Dark mode persists
- [ ] Switch back to light
- [ ] Light mode persists

## Part 10: Error Handling

### Form Validation
- [ ] Try submitting empty form
- [ ] Required field warnings appear
- [ ] Form doesn't submit with empty fields
- [ ] Focus moves to first empty field

### Invalid YouTube Link
- [ ] Try submitting with malformed YouTube link
- [ ] Form accepts but video may not display

### Special Characters
- [ ] Course name with special characters works
- [ ] Description with special characters works
- [ ] Notes with special characters work

## Part 11: Multiple Courses

### Add Multiple Courses
- [ ] Add 3-5 different courses
- [ ] All courses appear on courses page
- [ ] Each course displays correctly
- [ ] Each course can be clicked
- [ ] Each course video plays differently

### Manage Multiple Courses
- [ ] All courses show in management section
- [ ] Can delete one course
- [ ] Other courses remain
- [ ] Can add course back

## Part 12: Performance

### Page Load
- [ ] Admin page loads quickly
- [ ] Course page loads quickly
- [ ] No console errors (check F12)
- [ ] No JavaScript warnings

### Responsiveness
- [ ] Buttons respond immediately to clicks
- [ ] Form submission is fast
- [ ] Course cards load smoothly
- [ ] Video player loads quickly

## Final Verification

### Complete System Test
1. [ ] Admin panel works (/g)
2. [ ] Can add courses
3. [ ] Courses appear on website
4. [ ] Can view course details
5. [ ] Videos play
6. [ ] Links work
7. [ ] All persists after refresh
8. [ ] Responsive on all devices
9. [ ] No console errors
10. [ ] Professional appearance

## Browser Compatibility

Test in:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari
- [ ] Android Chrome

## Final Sign-Off

- [ ] System fully tested
- [ ] All features working
- [ ] Ready for production
- [ ] Documentation complete
- [ ] Screenshots/examples captured

---

**Testing Status**: ❌ Not Started | 🟡 In Progress | ✅ Complete

---

## Test Results Summary

**Total Tests**: 100+  
**Passed**: ____  
**Failed**: ____  
**Notes**: ____________________

---

**Tested by**: ________________  
**Date**: ________________  
**Approved**: ________________
