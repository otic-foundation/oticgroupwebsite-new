# Clean up rebase state
Remove-Item -Recurse -Force .git\rebase-merge -ErrorAction SilentlyContinue
Remove-Item -Force .git\.COMMIT_EDITMSG.sw* -ErrorAction SilentlyContinue
Remove-Item -Force .git\REBASE_HEAD -ErrorAction SilentlyContinue
Remove-Item -Force .git\AUTO_MERGE -ErrorAction SilentlyContinue
Remove-Item -Force .git\MERGE_MSG -ErrorAction SilentlyContinue

# Restore HEAD to main branch
"ref: refs/heads/main" | Out-File -FilePath .git\HEAD -Encoding ascii -NoNewline

# Reset to the last commit
git reset --hard origin/main

# Stage all changes
git add -A

# Commit
git commit -m "Update homepage with internships section, mobile responsiveness, and favicon cache-bust"

# Push
git push origin main
