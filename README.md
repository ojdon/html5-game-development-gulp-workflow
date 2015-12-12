A gulp workflow that is optimised for HTML5 Game Development. 

##Requirements
* OSX or Linux (Project needs a Windows tester!)
* Nodejs + NPM

## Installing NodeJS + NPM
### Within OSX
`brew install nodejs npm`
### Within Ubuntu, Debian, Elementary OS, etc
`sudo apt-get install nodejs npm`
### Within Red Hat, Fedora, CentOS, etc
`sudo yum install nodejs npm` 

## Installing Gulp
Please refer to Gulp’s getting started guide [here](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md).

## Gulp Tasks
You can install the list of gulp tasks above by using the following command below: 
```
npm install gulp gulp-zip gulp-watch gulp-jshint gulp-concat gulp-uglify gulp-image-optimization gulp-minify-html gulp-rename run-sequence
```

##Commands
You will now be able to run the following commands in order to achieve different tasks:

`gulp zip` - Adds your minified JS file and index.html to a zip file, great for quick distribution of your game

`gulp publish` - The command you run when you are ready to release your game. It will run the build commands for your JS and HTML, one last time before zipping them up. 

`gulp images` - Compresses images for a lower file size

`gulp build-html` - minifies your HTML file(s)

`gulp build-js` - Checks your JS for errors, concatenates all your JS files down to one file before minifying the JavaScript code.

`gulp build-dev` - Checks your JS for errors and concatenates all your JavaScript files down to one file but *doesn't* minify (Easier for debugging!!)

`gulp watch` - Keeps a close eye on your specific JS files / folders and will run uglify whenever a change has been made, just like the `gulp build` command.

## Task Requests
Want a task automating for your game development workflow? Accepting requests via raising [a new issue](https://github.com/ojdon/html5-game-development-gulp-workflow/issues). 

## License
This gulpfile uses the same license as Gulp itself, MIT.
