lint:
	npx eslint .

install: deps-install
	npx simple-git-hooks

test:
	npx jest

gendiff:
	node bin/gendiff
	
run-stylish:
	node bin/gendiff -f stylish ./__fixtures__/file1.json ./__fixtures__/file2.json

run-plain:
	node bin/gendiff -f plain ./__fixtures__/file1.json ./__fixtures__/file2.json

run-json:
	node bin/gendiff -f json ./__fixtures__/file1.json ./__fixtures__/file2.json

test-coverage:
	npx jest --coverage