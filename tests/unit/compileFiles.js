define([
	'intern!bdd',
	'intern/chai!assert',
	'intern/dojo/node!fs',
	'intern/dojo/node!../../markdown-include'
], function (bdd, assert, fs, markdownInclude) {
	bdd.describe('markdownInclude.compileFiles', function () {
		var markdownJsonPath = 'tests/data/markdown.json';

		bdd.it('should return data written via a promise', function () {
			var dfd = this.async(1000);
			markdownInclude.compileFiles(markdownJsonPath).then(dfd.callback(function (data) {
				var string = '# Table of Contents\n\n\n\nFirst test include.\nSecond test include.';
				assert.equal(data, string, 'Data matches');
			}));
		});
	});
});