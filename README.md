# tag-commit
A simple action that tags a commit.
[![Build](https://github.com/rexdefuror/check_artifact_exists/actions/workflows/pipeline.yml/badge.svg)](https://github.com/rexdefuror/check_artifact_exists/actions/workflows/pipeline.yml/badge.svg)

## Description

This is a simple Github action that tags a commit. It sets an environment variable `TAGGED` to `true` or `false` depending on the result.


## Example Usage

```yaml
- name: Tag a commit
  uses: rexdefuror/tag-commit@v1.0.0
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    owner: 'repository_owner_username'
    repo: 'repository_name'
    tag: 'tag_name'
    commit: 'commit_sha'

- run: echo "exists - ${{ env.TAGGED }}"
```

## Inputs

### `token`

**Required** The Github token to use for authentication.

### `owner`

**Required** The owner of the repository.

### `repo`

**Required** The name of the repository.

### `tag`

**Required** The tag to create.

### `commit`

**Required** The commit to tag.