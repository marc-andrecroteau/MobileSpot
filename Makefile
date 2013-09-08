#!/usr/bin/make -f
SHELL = /bin/sh
#################################################################
## MobileSpot Makefile                                         ##
##                                                             ##
## Builds the application using source code from /src          ##
## and copies the targets into /www for deployment.            ##
##                                                             ##
## ALL COMMANDS NEED TO BE INDENTED EXACTLY ONE TAB CHARACTER  ##
#################################################################

##
## Executables
##
SQWISH     = node node_modules/sqwish/bin/sqwish
UGLIFY     = node node_modules/uglify-js2/bin/uglifyjs2
HANDLEBARS = node node_modules/handlebars/bin/handlebars

##
## Paths
##
IN_CSS_ROOT   = ./src/css
IN_JS_ROOT    = ./src/js
IN_VIEWS_ROOT = ./src/views

TMP_ROOT = ./src
HANDLEBARS_FILENAME = tmp.handlebars.js

OUT_CSS        = ./www/css/application.min.css
OUT_HANDLEBARS = $(IN_JS_ROOT)/$(HANDLEBARS_FILENAME)
OUT_JS         = ./www/js/application.min.js

##
## Source Files
## The order in which files are included is important.
##
CSS_FILES = icons.css \
			af.ui.css \
			global.css \
			index.css

JS_FILES =  lib/appframework.js \
			lib/appframework.ui.js \
			lib/underscore.js \
			lib/backbone.js \
			lib/handlebars.runtime.js \
			$(HANDLEBARS_FILENAME) \
			app/global.js \
			app/main.js

CSS_FILES := $(CSS_FILES:%=$(IN_CSS_ROOT)/%)
JS_FILES  := $(JS_FILES:%=$(IN_JS_ROOT)/%)

##
## Build All Modules
##
all: build-all build-css build-js clean
	@echo
	@echo --\> Build All Completed Succesfully.
build-all:
	@echo --\> Begin Build All.


##
## Build CSS
##
css: build-css clean
build-css:
	@echo
	@echo --\> Begin Build CSS...
	CAT $(CSS_FILES) > $(TMP_ROOT)/tmp.styles.css
	#$(SQWISH) $(TMP_ROOT)/tmp.styles.css -o $(OUT_CSS)
	CP $(TMP_ROOT)/tmp.styles.css $(OUT_CSS)
	@echo --\> End Build CSS.


##
## Build Javascript
##
js: build-js clean
build-js:
	@echo
	@echo --\> Begin Build Javascript...
	$(HANDLEBARS) $(IN_VIEWS_ROOT)/ > $(OUT_HANDLEBARS)
	CAT $(JS_FILES) > $(TMP_ROOT)/tmp.js.js
	#$(UGLIFY) $(TMP_ROOT)/tmp.js.js --output $(OUT_JS)
	CP $(TMP_ROOT)/tmp.js.js $(OUT_JS)
	@echo --\> End Build Javascript.


##
## Clean Targets
##
clean:
	@echo
	@echo --\> Begin Clean...
	RM $(TMP_ROOT)/tmp.*
	RM $(IN_JS_ROOT)/tmp.*
	@echo --\> End Clean.
