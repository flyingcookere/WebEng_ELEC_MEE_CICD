# BULSU COE Web Engineering Project

Multi-group collaboration website with:

- Landing page sections assigned per group
- Per-department pages
- Per-department admin editor (`/dept/:deptCode/admin`) for editable section content

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Routes

- `/` Landing page
- `/departments` Department selector
- `/dept/:deptCode` Department page
- `/dept/:deptCode/admin` Department admin editor

## Collaboration Setup

See [docs/PROJECT_WORKFLOW.md](/Users/anon/Multimedia/workbench/WebEngProj/docs/PROJECT_WORKFLOW.md).

To create all collaboration branches locally:

```bash
./scripts/bootstrap-branches.sh
```

You can pass a different base branch:

```bash
./scripts/bootstrap-branches.sh main
```
