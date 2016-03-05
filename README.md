# Grunt Starter Kit

This small repo is designed to make starting new projects or working on simple ideas faster and easier. Copy the repo into a directory, run a few commands, and you're off and running.

## Usage

Clone repo:

```
$ git clone git@github.com:kyleshevlin/grunt-starter-kit.git
```

Copy contents of `lib/` into your project:

```
$ cp -R grunt-starter-kit/lib/ path/to/your/project
```

Open the `package.json` file and update the name of your project and any other necessary changes.

Then, run:

```
$ npm install
```

This will install all necessary dependencies. Lastly, run:

```
$ grunt
```

This initiates the default `grunt` command. This kit will compile Sass, autoprefix the CSS output, concatenate and uglify JavaScripts, and run a `watch` command to live reload all changes to `.scss` and `.js` files.

Feel free to fork and tweak to your own needs.
