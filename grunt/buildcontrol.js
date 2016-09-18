// https://github.com/rubenv/grunt-git
module.exports = {
	options: {
        commit: true,
        push: true,
        remote: '<%= remoteRepo %>',
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
    },
    pushSite: {
        options: {
        	dir: '<%= temp %>',
        	branch: 'gh-pages'
        }
    }
};
