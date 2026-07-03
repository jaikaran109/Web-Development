# Git & GitHub Commands Cheatsheet

## Setup
| Command | Kaam |
|---|---|
| `git --version` | Git installed hai ya nahi check karo |
| `git config --global user.name "Name"` | Username set karo |
| `git config --global user.email "email"` | Email set karo |
| `git config --list` | Saari settings dekho |

## Repo Start Karna
| Command | Kaam |
|---|---|
| `git init` | Naya local repo banao |
| `git clone <url>` | GitHub se repo copy karo |

## Basic Workflow
| Command | Kaam |
|---|---|
| `git status` | Kya changed hai dekho |
| `git add <file>` | Ek file staging me daalo |
| `git add .` | Saari files staging me daalo |
| `git commit -m "message"` | Changes save karo |
| `git log` | Commit history dekho |
| `git log --oneline` | Short history dekho |
| `git diff` | Changes ka detail dekho (unstaged) |

## GitHub se Connect
| Command | Kaam |
|---|---|
| `git remote add origin <url>` | Local repo ko GitHub se link karo |
| `git remote -v` | Connected remote dekho |
| `git push -u origin main` | Pehli baar push karo |
| `git push` | Changes GitHub pe bhejo |
| `git pull` | GitHub se latest changes lao |
| `git fetch` | Changes check karo (bina merge kiye) |

## Branching
| Command | Kaam |
|---|---|
| `git branch` | Saari branches dekho |
| `git branch <name>` | Nayi branch banao |
| `git checkout <name>` | Branch switch karo |
| `git checkout -b <name>` | Nayi branch bana ke switch bhi karo |
| `git switch <name>` | Branch switch karo (newer command) |
| `git merge <branch>` | Branch ko current branch me merge karo |
| `git branch -d <name>` | Branch delete karo |

## Undo / Fix
| Command | Kaam |
|---|---|
| `git restore <file>` | File ke changes undo karo |
| `git reset <file>` | Staging se hatao (unstage) |
| `git reset --soft HEAD~1` | Last commit undo karo, changes rakho |
| `git reset --hard HEAD~1` | Last commit + changes dono delete karo ⚠️ |
| `git revert <commit>` | Purane commit ko safely undo karo |
| `git stash` | Changes temporarily save karo |
| `git stash pop` | Stashed changes wapas lao |

## Useful Extras
| Command | Kaam |
|---|---|
| `git show <commit>` | Ek commit ka detail dekho |
| `git rm <file>` | File delete karo aur track bhi karo |
| `git mv old new` | File rename karo |
| `.gitignore` | Files jo track nahi karni unki list |
