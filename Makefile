lint:
	npx eslint .

install: deps-install
	npx simple-git-hooks

test:
	npm test
