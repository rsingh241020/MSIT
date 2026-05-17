@echo off
cd /d C:\Users\rsing\OneDrive\Desktop\MSIT
echo Starting MSIT website on http://127.0.0.1:3001
"C:\Program Files\nodejs\node.exe" .\node_modules\next\dist\bin\next dev --hostname 127.0.0.1 --port 3001
echo.
echo The dev server stopped. Review any error above.
pause
