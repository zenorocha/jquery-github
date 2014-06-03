describe("jquery.github.repo", function() {

	var instance;

	beforeEach(function() {
		instance = new GithubRepo({
			name: "jquery-github",
			description: "A jQuery plugin to display your Github Repositories",
			forks: 33,
			pushed_at: "2013-07-02T12:08:36Z",
			url: "https://api.github.com/repos/zenorocha/jquery-github",
			stargazers: 131
		});
	});

	describe("initialize GithubRepo", function() {
		it("should be repository's name", function() {
			expect(instance.name)
				.toEqual("jquery-github");
		});

		it("should be repository's description", function() {
			expect(instance.description)
				.toEqual("A jQuery plugin to display your Github Repositories");
		});

		it("should be repository's number of forks", function() {
			expect(instance.forks)
				.toEqual(33);
		});

		it("should be repository's last update date", function() {
			expect(instance.pushed_at)
				.toEqual("2013-07-02T12:08:36Z");
		});

		it("should be repository's api url", function() {
			expect(instance.url)
				.toEqual("https://api.github.com/repos/zenorocha/jquery-github");
		});

		it("should be repository's number of stargazers", function() {
			expect(instance.stargazers)
				.toEqual(131);
		});
	});

	describe("execute _parsePushedDate()", function() {
		it("should parse repository's pushed_at attribute", function() {
			expect(instance._parsePushedDate(instance.pushed_at))
				.toEqual("2/7/2013");
		});
	});

	describe("execute _parseURL()", function() {
		it("should parse repository's url attribute", function() {
			expect(instance._parseURL(instance.url))
				.toEqual("https://github.com/zenorocha/jquery-github");
		});
	});

	describe("execute toHTML()", function() {
		// TODO
	});
});
