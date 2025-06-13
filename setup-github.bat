@echo off
echo ========================================
echo Easy Sheets Divider - GitHub Setup
echo ========================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

echo Git is installed ✓
echo.

REM Get user input
set /p GITHUB_USERNAME="Enter your GitHub username: "
set /p REPO_NAME="Enter repository name (default: easy-sheets-divider): "
if "%REPO_NAME%"=="" set REPO_NAME=easy-sheets-divider

echo.
echo Configuration:
echo - GitHub Username: %GITHUB_USERNAME%
echo - Repository Name: %REPO_NAME%
echo - Repository URL: https://github.com/%GITHUB_USERNAME%/%REPO_NAME%
echo.

set /p CONFIRM="Is this correct? (y/n): "
if /i not "%CONFIRM%"=="y" (
    echo Setup cancelled.
    pause
    exit /b 0
)

echo.
echo ========================================
echo Setting up Git repository...
echo ========================================

REM Initialize Git repository
echo Initializing Git repository...
git init

REM Add all files
echo Adding files to Git...
git add .

REM Create initial commit
echo Creating initial commit...
git commit -m "Initial commit: Easy Sheets Divider v1.0"

REM Add remote origin
echo Adding GitHub remote...
git remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git

REM Set main branch
echo Setting up main branch...
git branch -M main

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Create repository on GitHub: https://github.com/new
echo    - Repository name: %REPO_NAME%
echo    - Make it public for GitHub Pages
echo    - Don't initialize with README, .gitignore, or license
echo.
echo 2. Push your code:
echo    git push -u origin main
echo.
echo 3. Enable GitHub Pages:
echo    - Go to repository Settings
echo    - Navigate to Pages section
echo    - Select "Deploy from branch"
echo    - Choose "main" branch and "/ (root)"
echo.
echo 4. Your app will be available at:
echo    https://%GITHUB_USERNAME%.github.io/%REPO_NAME%
echo.
echo For detailed instructions, see DEPLOYMENT.md
echo.
pause
