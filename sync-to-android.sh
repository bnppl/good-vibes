#!/bin/bash
# Sync Obsidian vault to GitHub for Android access
#
# First-time setup:
#   1. Create a private repo on GitHub (e.g. "good-vibes")
#   2. Run: git init && git remote add origin git@github.com:YOUR_USERNAME/good-vibes.git
#   3. Make this script executable: chmod +x sync-to-android.sh
#
# Android setup:
#   1. Install Obsidian from Play Store
#   2. Install the "Obsidian Git" community plugin (Settings > Community Plugins > Browse)
#   3. In Obsidian Git settings:
#      - Set "Pull updates on startup" to ON
#      - Set "Auto pull interval" to 10 (minutes)
#      - Clone your repo as a new vault: use the plugin's "Clone existing remote repo" command
#      - For auth, use a GitHub Personal Access Token (fine-grained, repo scope only)
#        Generate at: https://github.com/settings/tokens?type=beta
#
# Usage:
#   ./sync-to-android.sh              # auto-generated commit message
#   ./sync-to-android.sh "my message" # custom commit message

set -e

cd "$(dirname "$0")"

# Check if git is initialized
if [ ! -d .git ]; then
    echo "Error: Not a git repo. Run first-time setup (see comments at top of script)."
    exit 1
fi

# Check for changes
if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
    echo "Nothing to sync — vault is up to date."
    exit 0
fi

# Stage all vault content (excluding common junk)
git add -A

# Commit
MSG="${1:-vault update $(date '+%Y-%m-%d %H:%M')}"
git commit -m "$MSG"

# Push
git push origin main 2>/dev/null || git push origin master

echo "Synced to GitHub. Open Obsidian on Android and pull (or wait for auto-pull)."
