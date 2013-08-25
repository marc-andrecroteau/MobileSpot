#!/usr/bin/make -f
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
SQWISH = node node_modules/sqwish/bin/sqwish
UGLIFY = node node_modules/uglify-js2/bin/uglifyjs2

##
## Paths
##
IN_CSS_ROOT = ./src/css
IN_JS_ROOT = ./src/js
IN_HTML_ROOT = ./src/html

TMP_ROOT = ./src

OUT_CSS = ./www/css/application.min.css
OUT_JS = ./www/js/application.min.js
OUT_HTML = ./www/index.html

##
## Source Files
## The order in which files are included is important.
##
CSS_FILES = jquery.mobile-1.3.2.css \
			z.css \
			jqm-icon-pack-2.0-original.css \
			index.css \
			global.css

JS_FILES =  lib/jquery-1.9.1.js \
			app/mobile_init.js \
			lib/jquery.mobile-1.3.2.js \
			lib/dust-core-2.0.0.min.js \
			app/init.js \
			app/login.js \
			app/enum.js \
			app/help.js

HTML_FILES= header.html \
            home.html \
            login.html \
            spotlisting.html \
            help.html \
            footer.html

CSS_FILES  := $(CSS_FILES:%=$(IN_CSS_ROOT)/%)
JS_FILES   := $(JS_FILES:%=$(IN_JS_ROOT)/%)
HTML_FILES := $(HTML_FILES:%=$(IN_HTML_ROOT)/%)

##
## Build All Modules
##
all: build-all build-css build-js build-html clean
	@echo --\>
	@echo --\> Build All Completed Succesfully.
build-all:
	@echo --\> Building All.
	@echo --\>


##
## Build CSS
##
css: build-css clean
build-css:
	@echo --\> Building CSS...
	CAT $(CSS_FILES) > $(TMP_ROOT)/tmp.styles.css
	$(SQWISH) $(TMP_ROOT)/tmp.styles.css -o $(OUT_CSS)
	#CP $(TMP_ROOT)/tmp.styles.css $(OUT_CSS)
	@echo --\> Build CSS Completed Succesfully.


##
## Build Javascript
##
js: build-js clean
build-js:
	@echo --\> Building Javascript...
	CAT $(JS_FILES) > $(TMP_ROOT)/tmp.js.js
	$(UGLIFY) $(TMP_ROOT)/tmp.js.js --output $(OUT_JS) --compress
	#CP $(TMP_ROOT)/tmp.js.js $(OUT_JS)
	@echo --\> Build JS Completed Succesfully.


##
## Build HTML File
##
html: build-html clean
build-html:
	@echo --\> Building Application HTML...
	CAT $(HTML_FILES) > $(OUT_HTML)
	@echo --\> Build HTML Completed Succesfully.


##
## Clean Targets
##
clean:
	RM $(TMP_ROOT)/tmp.*
