import { getInput, exportVariable } from '@actions/core';
import { getOctokit } from '@actions/github';

const main = async () => {
    const tag = getInput('tag');
    const commit = getInput('commit');
    const owner = getInput('owner');
    const repo = getInput('repo');
    const token = getInput('token');
    const octokit = getOctokit(token);

    const tagExists = await octokit.rest.git.getRef({
        owner,
        repo,
        ref: `tags/${tag}`,
    }).then(() => true).catch(() => false);

    if (tagExists) {
        console.log(`Tag ${tag} already exists.`);
        exportVariable('TAGGED', 'false');
        return;
    }

    await octokit.rest.git.createRef({
        owner,
        repo,
        ref: `refs/tags/${tag}`,
        sha: commit,
    });

    console.log(`Tag ${tag} created.`);

    exportVariable('TAGGED', 'true');
};

main();