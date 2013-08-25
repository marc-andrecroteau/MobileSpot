#################################################################
## MobileSpot Makefile                                         ##
##                                                             ##
## Builds the application using source code from /src          ##
## and copies the targets into /www for deployment.            ##
##                                                             ##
## ALL COMMANDS NEED TO BE INDENTED EXACTLY ONE TAB CHARACTER  ##
#################################################################


SQWISH = node node_modules/sqwish/bin/sqwish
UGLIFY = node node_modules/uglify-js2/bin/uglifyjs2

IN_CSS_ROOT = ./src/css
IN_JS_ROOT = ./src/js
IN_INDEX_ROOT = ./src/index

TMP_ROOT = ./src

OUT_CSS = ./www/css/application.min.css
OUT_JS = ./www/js/application.min.js
OUT_INDEX = ./www/index.html


##
## Build All Modules
##
all: build-all build-css build-js build-index clean
	@echo --\>
	@echo --\> Build All Completed Succesfully.
build-all:
	@echo --\> Building All.
	@echo --\>


##
## Build CSS
## The order in which files are included is important.
##
css: build-css clean
build-css:
	@echo --\> Building CSS...
	CAT ${IN_CSS_ROOT}/jquery.mobile-1.3.2.css \
		${IN_CSS_ROOT}/z.css \
		${IN_CSS_ROOT}/jqm-icon-pack-2.0-original.css \
		${IN_CSS_ROOT}/index.css \
		${IN_CSS_ROOT}/global.css > ${TMP_ROOT}/tmp.styles.css
	#CP ${TMP_ROOT}/tmp.styles.css ${OUT_CSS}
	${SQWISH} ${TMP_ROOT}/tmp.styles.css -o ${OUT_CSS}
	@echo --\> Build CSS Completed Succesfully.


##
## Build Javascript
## The order in which files are included is important.
##
js: build-js clean
build-js:
	@echo --\> Building Javascript...
	CAT ${IN_JS_ROOT}/lib/jquery-1.9.1.js \
		${IN_JS_ROOT}/app/mobile_init.js \
		${IN_JS_ROOT}/lib/jquery.mobile-1.3.2.js \
		${IN_JS_ROOT}/lib/dust-core-2.0.0.min.js \
		${IN_JS_ROOT}/app/init.js \
		${IN_JS_ROOT}/app/login.js \
		${IN_JS_ROOT}/app/enum.js \
		${IN_JS_ROOT}/app/help.js \ > ${TMP_ROOT}/tmp.js.js
	#CP ${TMP_ROOT}/tmp.js.js ${OUT_JS}
	${UGLIFY} ${TMP_ROOT}/tmp.js.js --output ${OUT_JS} --compress
	@echo --\> Build JS Completed Succesfully.


##
## Build Index File
## The order in which files are included is important.
##
index: build-index clean
build-index:
	@echo --\> Building Application Index...
	CAT ${IN_INDEX_ROOT}/header.html \
		${IN_INDEX_ROOT}/home.html \
		${IN_INDEX_ROOT}/login.html \
		${IN_INDEX_ROOT}/spotlisting.html \
		${IN_INDEX_ROOT}/help.html \
		${IN_INDEX_ROOT}/footer.html > ${OUT_INDEX}
	@echo --\> Build INDEX Completed Succesfully.


##
## Clean Targets
##
clean:
	RM ${TMP_ROOT}/tmp.*
