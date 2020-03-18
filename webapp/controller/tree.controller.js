
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
			var sMaterialValue = this.getView().byId("materialInput").getValue();
			var sSalesOrderValue = this.getView().byId("salesOrderInput").getValue();
			var sSalesOrderItemValue = this.getView().byId("salesOrderItemInput").getValue();
			var sRequiredQuantityValue = this.getView().byId("requiredQuantityInput").getValue();
			var sValue = sMaterialValue + "/" + sSalesOrderValue + "/" + sSalesOrderItemValue + "/" + sRequiredQuantityValue ;
		
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