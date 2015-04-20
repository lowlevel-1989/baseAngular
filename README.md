#INSTALATION
##REQUERIMENTS
	- Node.js
	- bower
	- gulp
##INSTALING
###LINUX / MAC OS X
	sudo npm install bower --global
	sudo npm install gulp  --global
	npm   install
	bower install
#USAGE
##GULP COMMANDS
```
gulp debug: find bug in the project.
gulp dist:  Build and optimize the current project, ready for deployment. This includes linting as well as image, script, stylesheet and HTML optimization and minification. 
gulp server: This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.
gulp clean: Delete folder dist from the project.
```

##ESTRUCTURE

```
├── app							-->  All of the source files for the application.
│   ├── app.module.js 			
│   ├── app.routes.js 			
│   ├── components 				-->  Each component is treated as a mini Angular app.
│   └── shared 					-->  Acts as reusable components or partials of our site.
├── assets	                    -->  All of the source files for the application.
│   ├── css  					-->  Third-party css.
│   ├── fonts 					-->  All font own and third-party.
│   ├── img 					-->  Images and icons for your app.
│   │   └── loading.gif 		
│   ├── libs 					-->  Third-party libraries such as jQuery, Moment, Underscore, etc.
│   └── stylus 					-->  All styles and style related files.
│       └── A-settings.styl 	
├── bower.json 					
├── gulpfile.js 				
├── index.html 					
└── package.json 				
```

This directory structure is much harder to read and understand from the get go. A newcomer to Angular may be completely turned off by this complex approach, and that is why you see tutorials and examples in Angular following the simpler directory structure found in examples earlier. Let’s dive into the directory structure above and see what’s going on here.

###index.html

The index.html lives at the root of front-end structure. The <b>index.html</b> file will primarily handle loading in all the libraries and Angular elements.

###Assets Folder

The assets folder is also pretty standard. It will contain all the assets needed for your app that are not related your AngularJS code. There are many great ways to organize this directory but they are out of scope for this article. The example above is good enough for most apps.

###App Folder

This is where the meat of your AngularJS app will live. We have two subfolders in here and a couple JavaScript files at the root of the folder. The <b>app.module.js</b> file will handle the setup of your app, load in AngularJS dependencies and so on. The <b>app.route.js</b> file will handle all the routes and the route configuration. After that we have two subfolders – components and shared. Let’s dive into those next.

###Components Folder

The <b>components</b> folder will contain the actual sections for your Angular app. These will be the static views ,directives and services for that specific section of the site (think an admin users section, gallery creation section, etc). Each page should have it’s own subfolder with it’s own controller, services, and HTML files.

Each component here will resemble a mini-MVC application by having a view, controller and potentially services file(s). If the component has multiple related views, it may be a good idea to further separate these files into ‘views’, ‘controllers’, ‘services’ subfolders.

This can be seen as the simpler folder structure shown earlier in this article, just broken down into sections. So you could essentially think of this as multiple mini Angular applications inside of your giant Angular application.

###Shared Folder

The <b>shared</b> folder will contain the individual features that your app will have. These features will ideally be directives that you will want to reuse on multiple pages.

Features such as article posts, user comments, sliders, and others should be crafted as AngularJS Directives. Each component here should have it’s own subfolder that contains the directive JavaScript file and the template HTML file.

In some instances, a directive may have it’s own services JavaScript file, and in the case that it does it should also go into this subfolder.

* [Estructure base: https://scotch.io/tutorials/angularjs-best-practices-directory-structure](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)

#LEGAL

Copyright (c) 2015 Vinicio Valbuena.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

