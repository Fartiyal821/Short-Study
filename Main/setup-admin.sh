#!/bin/bash

# Short Study Admin Panel - Setup Script
# This script helps verify that all admin panel files are properly set up

echo "🚀 Short Study Admin Panel - Setup Verification"
echo "=================================================="
echo ""

# Check for required files
FILES=(
    "admin.html"
    "admin.js"
    "admin.css"
    "course-view.html"
    "course-view.css"
    "web.js"
    ".htaccess"
)

echo "📋 Checking for required files..."
echo ""

all_files_exist=true

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file - Found"
    else
        echo "❌ $file - NOT FOUND"
        all_files_exist=false
    fi
done

echo ""
echo "=================================================="
echo ""

if [ "$all_files_exist" = true ]; then
    echo "✅ All files are present!"
    echo ""
    echo "📝 Setup Instructions:"
    echo ""
    echo "1. Access the admin panel by going to: /g"
    echo "2. Enter password: 123"
    echo "3. Add your first course using the form"
    echo "4. Course will appear on the courses page"
    echo ""
    echo "🎓 Admin Panel Features:"
    echo "   - Add new courses with YouTube videos"
    echo "   - Set course level, duration, and description"
    echo "   - Add resources and notes with clickable links"
    echo "   - Manage existing courses (view/delete)"
    echo "   - Data stored in browser localStorage"
    echo ""
    echo "📚 Example Course Data:"
    echo "   Course Name: JavaScript Basics"
    echo "   Icon: JS"
    echo "   Level: Beginner"
    echo "   Duration: 6 weeks"
    echo "   YouTube: https://www.youtube.com/embed/VIDEO_ID"
    echo ""
else
    echo "❌ Some files are missing!"
    echo ""
    echo "Please make sure all these files are in your directory:"
    for file in "${FILES[@]}"; do
        echo "   - $file"
    done
    echo ""
fi

echo "=================================================="
echo "🎯 Quick Start:"
echo "   1. Visit: yoursite.com/g"
echo "   2. Password: 123"
echo "   3. Add course"
echo "   4. See it on courses page"
echo "=================================================="
