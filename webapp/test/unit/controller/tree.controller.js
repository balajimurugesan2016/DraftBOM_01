/*global QUnit*/

sap.ui.define([
	"sap/draft/DraftBOMExplosion/controller/tree.controller"
], function (Controller) {
	"use strict";

	QUnit.module("tree Controller");

	QUnit.test("I should test the tree controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});