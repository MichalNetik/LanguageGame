#!/bin/sh

FROM_BRANCH=$1
TO_BRANCH=$2
GITHUB_TOKEN=$3

GITHUB_REPO="MichalNetik/LanguageGame"


REPO_TEMP=$(mktemp -d)
git clone "https://github.com/$GITHUB_REPO" "$REPO_TEMP"

pushd $REPO_TEMP

git checkout "$TO_BRANCH"
git merge "$FROM_BRANCH"


PUSH_URI="https://$GITHUB_TOKEN@github.com/$GITHUB_REPO"

git push "$PUSH_URI" "$TO_BRANCH" >/dev/null 2>&1

popd



