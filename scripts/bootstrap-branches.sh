#!/usr/bin/env bash
set -euo pipefail

BASE_BRANCH="${1:-main}"

branches=(
  "landing/hero"
  "landing/mission-vision"
  "landing/department-grid"
  "landing/news"
  "landing/facilities"
  "landing/statistics"
  "landing/contact"
  "landing/footer"
  "dept/CE"
  "dept/CPE"
  "dept/ECE"
  "dept/EE"
  "dept/IE"
  "dept/MFE"
  "dept/ME"
  "dept/MEE"
)

for branch in "${branches[@]}"; do
  if git show-ref --verify --quiet "refs/heads/${branch}"; then
    echo "skip   ${branch} (already exists)"
  else
    git branch "${branch}" "${BASE_BRANCH}"
    echo "create ${branch} from ${BASE_BRANCH}"
  fi
done

echo "done"
