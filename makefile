
SQWISH = node node_modules/sqwish/bin/sqwish
UGLIFY = node node_modules/uglify-js2/bin/uglifyjs2

IN_CSS_ROOT = ./src/css
IN_JS_ROOT = ./src/js
IN_INDEX_ROOT = ./src/index

TMP_ROOT = ./src

OUT_CSS = ./www/css/application.min.css
OUT_JS = ./www/js/application.min.js
OUT_INDEX = ./www/index.html

HR=\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#



all: build-all build-css build-js build-index clean
	@echo --\>
	@echo --\> Build All Completed Succesfully.
build-all:
	@echo --\> Building All.
	@echo --\>


css: build-css clean
build-css:
	@echo --\> Building CSS...
	CAT ${IN_CSS_ROOT}/jquery.mobile-1.3.2.css \
		${IN_CSS_ROOT}/z.css \
		${IN_CSS_ROOT}/jqm-icon-pack-2.0-original.css \
		${IN_CSS_ROOT}/index.css > ${TMP_ROOT}/tmp.styles.css
	#CP ${TMP_ROOT}/tmp.styles.css ${OUT_CSS}
	${SQWISH} ${TMP_ROOT}/tmp.styles.css -o ${OUT_CSS}
	@echo --\> Build CSS Completed Succesfully.


js: build-js clean
build-js:
	@echo --\> Building Javascript...
	CAT ${IN_JS_ROOT}/lib/jquery-1.9.1.js \
        ${IN_JS_ROOT}/app/mobile_init.js \
        ${IN_JS_ROOT}/lib/jquery.mobile-1.3.2.js \
        ${IN_JS_ROOT}/lib/dust-core-2.0.0.min.js \
        ${IN_JS_ROOT}/app/init.js \
        ${IN_JS_ROOT}/app/login.js > ${TMP_ROOT}/tmp.js.js
	#CP ${TMP_ROOT}/tmp.js.js ${OUT_JS}
	${UGLIFY} ${TMP_ROOT}/tmp.js.js --output ${OUT_JS} --compress
	@echo --\> Build JS Completed Succesfully.


index: build-index clean
build-index:
	@echo --\> Building Application Index...
	CAT ${IN_INDEX_ROOT}/header.html \
        ${IN_INDEX_ROOT}/home.html \
        ${IN_INDEX_ROOT}/login.html \
        ${IN_INDEX_ROOT}/spotlisting.html \
        ${IN_INDEX_ROOT}/footer.html > ${OUT_INDEX}
	@echo --\> Build INDEX Completed Succesfully.


clean:
	RM ${TMP_ROOT}/tmp.*
