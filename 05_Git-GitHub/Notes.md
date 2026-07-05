# Git & GitHub — Notes

## Git vs GitHub (the thing that confused me at first)

Git is the actual tool that tracks changes to files. It runs on my computer and doesn't need internet at all. GitHub is just a website that hosts Git repositories online, so I can back up my code and share it with others. People use them together so much that it's easy to think they're the same thing, but they're not.

## The three areas

There are basically three "zones" my files move through:

1. **Working directory** – the actual files I'm editing right now
2. **Staging area** – files I've marked as "ready to be saved" using `git add`
3. **Repository (local)** – where the change is permanently saved once I run `git commit`

Nothing goes to GitHub automatically. It just sits on my machine until I push it.

## Commit vs Push (kept forgetting this)

- `git commit` only saves the change **locally**. GitHub has no idea anything happened.
- `git push` is what actually sends those commits up to GitHub.

So if I commit ten times and never push, GitHub still shows the old version. This tripped me up early on because I assumed the Source Control panel in VS Code was directly syncing with GitHub — it's not, unless I hit push.

## Cloning

When I run `git clone <url>`, it copies the whole repo (including its `.git` folder) onto my computer. That `.git` folder already knows which GitHub repo it belongs to (the "origin"). So even if I clone the repo inside some random folder like `wd-practice`, it's still fully connected to the original GitHub repo — folder name and location don't matter.

If I clone multiple repos, each one keeps its own separate connection. They don't interfere with each other.

## Branches

A branch is basically a separate line of work. Instead of messing with the main code directly, I can create a branch, try things out, and only merge it back once it works.

- `git branch new-feature` → creates a branch
- `git checkout new-feature` → switches to it
- `git checkout -b new-feature` → does both in one step
- `git merge new-feature` → brings those changes back into the current branch

## Undoing things

This is the part I was most nervous about, but it's not that scary:

- `git restore <file>` — undo changes I haven't staged yet
- `git reset` — unstage something
- `git revert` — safely undo a commit that's already been pushed (doesn't rewrite history, just adds a new commit that cancels it out)
- `git stash` — temporarily "hide" my changes if I need to switch tasks without committing half-done work

## Random things worth remembering

- `.gitignore` stops junk files (like `node_modules`, `.env`) from ever being tracked
- Commit messages should actually describe what changed — "fix" or "update" a hundred times is useless later
- VS Code's Source Control panel is just a GUI for all of this — everything it does maps to a normal git command underneath

## Things I still need to actually practice, not just read about

- Real merge conflicts (only seen examples, haven't caused one myself)
- Opening and reviewing a pull request end to end
- What GitHub Actions actually does, beyond the definition
