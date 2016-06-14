# HTML5 Game Development Gulp Workflow
A collection of gulp tasks that are optimised for HTML5 Game Development. 

## Getting Started

### Installing Gulp
 [Gulp](http://gulpjs.com/) can automate recurring tasks that are performed throughout the game development process, such as minifying and error checking source code, optimising images and much more. Before you begin installing gulp, please ensure that you have [NodeJS, NPM](https://docs.npmjs.com/getting-started/installing-node) & [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) installed globally on your system. Then run the following command from your game's source directory:

`npm install` 

This will pull in the relevant Node packages, required by gulp. 

## Commands
You will now be able to run the following commands in order to achieve different tasks:

`gulp zip` - Adds your minified JS file and index.html to a zip file, great for quick distribution of your game

`gulp publish` - The command you run when you are ready to release your game. It will run the build commands for your JS and HTML, one last time before zipping them up. 

`gulp images` - Compresses images for a lower file size

`gulp build-html` - minifies your HTML file(s)

`gulp build-js` - Checks your JS for errors, concatenates all your JS files down to one file before minifying the JavaScript code.

`gulp build-dev` - Checks your JS for errors and concatenates all your JavaScript files down to one file but *doesn't* minify (Easier for debugging!!)

`gulp watch` - Keeps a close eye on your specific JS files / folders and will run uglify whenever a change has been made, just like the `gulp build` command.

## Any Requests?
Want a task automating for your game development workflow? Accepting requests via raising [a new issue](https://github.com/ojdon/html5-game-development-gulp-workflow/issues). 

## License
This gulpfile uses the same license as Gulp itself, [MIT](https://raw.githubusercontent.com/ojdon/html5-game-development-gulp-workflow/master/LICENSE).
