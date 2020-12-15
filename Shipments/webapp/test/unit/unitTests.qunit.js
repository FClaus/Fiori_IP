/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"be/ap/project/Shipments/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});