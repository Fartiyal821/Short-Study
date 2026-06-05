#!/bin/bash

# Django Integration Verification Script

echo "======================================"
echo "Django Integration Verification"
echo "======================================"
echo ""

PROJECT_DIR="/home/g/Desktop/Short Study/Shortstudy"

echo "✓ Checking directory structure..."
if [ -d "$PROJECT_DIR/ShortStudy/templates" ]; then
    echo "  ✓ Templates directory exists"
    echo "    - Found $(ls $PROJECT_DIR/ShortStudy/templates/*.html | wc -l) HTML files"
else
    echo "  ✗ Templates directory missing"
fi

if [ -d "$PROJECT_DIR/ShortStudy/static" ]; then
    echo "  ✓ Static directory exists"
    echo "    - Found $(ls $PROJECT_DIR/ShortStudy/static/css/*.css | wc -l) CSS files"
    echo "    - Found $(ls $PROJECT_DIR/ShortStudy/static/js/*.js | wc -l) JS files"
else
    echo "  ✗ Static directory missing"
fi

echo ""
echo "✓ Checking configuration files..."

if grep -q "ShortStudy.urls" "$PROJECT_DIR/Shortstudy/urls.py"; then
    echo "  ✓ Main URLs configured correctly"
else
    echo "  ✗ Main URLs not configured"
fi

if [ -s "$PROJECT_DIR/ShortStudy/urls.py" ]; then
    echo "  ✓ App URLs file created and populated"
else
    echo "  ✗ App URLs file empty"
fi

echo ""
echo "✓ Checking template tags..."
STATIC_TAGS=$(grep -c "{% static" "$PROJECT_DIR/ShortStudy/templates/index.html")
if [ "$STATIC_TAGS" -gt 0 ]; then
    echo "  ✓ Templates use {% static %} tags ($STATIC_TAGS found in index.html)"
else
    echo "  ✗ No {% static %} tags found"
fi

URL_TAGS=$(grep -c "{% url" "$PROJECT_DIR/ShortStudy/templates/index.html")
if [ "$URL_TAGS" -gt 0 ]; then
    echo "  ✓ Templates use {% url %} tags ($URL_TAGS found in index.html)"
else
    echo "  ✗ No {% url %} tags found"
fi

echo ""
echo "✓ Checking Django models..."
if grep -q "class Course" "$PROJECT_DIR/ShortStudy/models.py"; then
    echo "  ✓ Course model defined"
else
    echo "  ✗ Course model not found"
fi

if grep -q "@admin.register" "$PROJECT_DIR/ShortStudy/admin.py"; then
    echo "  ✓ Course model registered in admin"
else
    echo "  ✗ Course model not registered"
fi

echo ""
echo "======================================"
echo "Verification Complete!"
echo "======================================"
echo ""
echo "Next steps:"
echo "1. cd $PROJECT_DIR"
echo "2. python manage.py makemigrations"
echo "3. python manage.py migrate"
echo "4. python manage.py runserver"
echo "5. Visit http://localhost:8000/"
