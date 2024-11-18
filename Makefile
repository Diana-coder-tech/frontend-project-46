lint:
	npx eslint .

install: deps-install
	npx simple-git-hooks

test:
	npx jest

start:
	node bin/gendiff.js
