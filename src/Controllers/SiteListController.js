//------------------------------------------------------------------------------
//----- SiteListController ------------------------------------------------------
//------------------------------------------------------------------------------
//-------1---------2---------3---------4---------5---------6---------7---------8
//       01234567890123456789012345678901234567890123456789012345678901234567890
//-------+---------+---------+---------+---------+---------+---------+---------+
// copyright:   2016 WiM - USGS
//    authors:  Jeremy K. Newson USGS Wisconsin Internet Mapping
//   purpose:   
//discussion:   Controllers are typically built to reflect a View. 
//              and should only contailn business logic needed for a single view. For example, if a View 
//              contains a ListBox of objects, a Selected object, and a Save button, the Controller 
//              will have an ObservableCollection ObectList, 
//              Model SelectedObject, and SaveCommand.
//Comments
//05.13.2016 jkn - Created
//Imports"
var SIGL;
(function (SIGL) {
    var Controllers;
    (function (Controllers) {
        'use strict';
        var SiteListController = (function () {
            function SiteListController($scope, siglservice) {
                $scope.vm = this;
                this.siglServices = siglservice;
                // this.SiteList = gwwservice.GWSiteList;
                this.isShown = true;
            }
            //Methods
            //-+-+-+-+-+-+-+-+-+-+-+-
            SiteListController.prototype.toggleShown = function () {
                this.isShown = !this.isShown;
            };
            //Constructor
            //-+-+-+-+-+-+-+-+-+-+-+-
            SiteListController.$inject = ['$scope', 'SIGL.Services.SIGLService'];
            return SiteListController;
        }()); //end class
        angular.module('SIGL.Controllers')
            .controller('SIGL.Controllers.SiteListController', SiteListController);
    })(Controllers = SIGL.Controllers || (SIGL.Controllers = {}));
})(SIGL || (SIGL = {})); //end module
//# sourceMappingURL=SiteListController.js.map