
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sap.draft.DraftBOMExplosion.controller.tree", {
		onInit: function () {
			this.oModel = this.getOwnerComponent().getModel();
			this.getView().setModel(this.oModel);

		},
		onPressExplode: function (oEvent) {
			var sValue = this.getView().byId("materialInput").getValue();
			var oFilter = new Filter({
				path: "Id",
				operator: FilterOperator.EQ,
				value1: sValue
			});
			var oTree = this.getView().byId("treeTable");
			oTree.bindRows({
				path: "/Z_C_NODEHIERTP",
				filters: oFilter,
				parameters: {
					countMode: "Inline",
					numberOfExpandedLevels: 0
				}
			});

		}
	});
});