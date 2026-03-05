# Web Engineering Collaboration Workflow

This repo is organized for parallel work across multiple groups.

## 1) Branch Strategy

Use `main` as the integration baseline.

### Landing page branches

- `landing/hero`
- `landing/mission-vision`
- `landing/department-grid`
- `landing/news`
- `landing/facilities`
- `landing/statistics`
- `landing/contact`
- `landing/footer`

### Department branches

- `dept/CE`
- `dept/CPE`
- `dept/ECE`
- `dept/EE`
- `dept/IE`
- `dept/MFE`
- `dept/ME`
- `dept/MEE`

## 2) Scope Rules

- Landing teams only edit [src/Pages/LandingPage.tsx](/Users/anon/Multimedia/workbench/WebEngProj/src/Pages/LandingPage.tsx) and assets they need.
- Department teams only edit their own department data file in `src/data/department/*` and department page sections.
- Each department has an admin editor at `/dept/<CODE>/admin` for local content editing.

## 3) Merge Flow

1. Branch from `main`.
2. Commit only files related to your assigned scope.
3. Open PR into `main`.
4. Resolve conflicts immediately if another section touched the same file.
5. Keep commits small and descriptive.

## 4) Department Required Content

Each department page must include these sections:

1. Program Overview
2. Program Educational Objectives (PEO)
3. Student Outcomes (SO)
4. Curriculum Overview
5. Laboratories
6. Faculty
7. Career Opportunities

## 5) Notes About Admin

- Admin content currently saves to browser `localStorage` per department.
- This is a temporary setup for development collaboration.
- If needed, replace with a shared backend API later.
