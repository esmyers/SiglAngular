//------------------------------------------------------------------------------
//----- FilterModalController -------------------------------------------------
//------------------------------------------------------------------------------
//-------1---------2---------3---------4---------5---------6---------7---------8
//       01234567890123456789012345678901234567890123456789012345678901234567890
//-------+---------+---------+---------+---------+---------+---------+---------+
// copyright:   2016 WiM - USGS
//    authors:  Jeremy K. Newson USGS Wisconsin Internet Mapping
//             
// 
//   purpose:  Handles the filter selection modal content
//          
//discussion:
//Comments
//05.11.2016 jkn - Created
var SIGL;
(function (SIGL) {
    var Controllers;
    (function (Controllers) {
        'use string';
        var FilterModalController = (function () {
            function FilterModalController($scope, modal, SIGLService) {
                $scope.vm = this;
                this.modalInstance = modal;
                this.SIGLService = SIGLService;
                this.init();
            }
            //Methods  
            //-+-+-+-+-+-+-+-+-+-+-+-
            FilterModalController.prototype.Close = function () {
                //if(this.SelectedStates.length >0) this.GWWService.AddFilterTypes(this.SelectedStates);
                //if (this.SelectedCounties.length > 0) this.GWWService.AddFilterTypes(this.SelectedCounties);
                //if (this.SelectedAquifers.length > 0) this.GWWService.AddFilterTypes(this.SelectedAquifers);
                this.modalInstance.dismiss('cancel');
            };
            FilterModalController.prototype.AddStateFilter = function (item) {
                this.SelectedStates.push(new SIGL.Models.GroundWaterFilterSite(item, SIGL.Models.FilterType.STATE));
            };
            FilterModalController.prototype.AddCountyFilter = function (item) {
                this.SelectedCounties.push(new SIGL.Models.GroundWaterFilterSite(item, SIGL.Models.FilterType.COUNTY));
            };
            FilterModalController.prototype.AddAquiferFilter = function (item) {
                this.SelectedAquifers.push(new SIGL.Models.GroundWaterFilterSite(item, SIGL.Models.FilterType.AQUIFER));
            };
            //Helper Methods
            //-+-+-+-+-+-+-+-+-+-+-+-
            FilterModalController.prototype.init = function () {
                //place anything that needs to be initialized here
                this.SelectedAquifers = [];
                this.SelectedCounties = [];
                this.SelectedStates = [];
            };
            //Constructor
            //-+-+-+-+-+-+-+-+-+-+-+-
            FilterModalController.$inject = ['$scope', '$modalInstance', 'SIGL.Services.SIGLService'];
            return FilterModalController;
        }()); //end  class
        angular.module('SIGL.Controllers')
            .controller('SIGL.Controllers.FilterModalController', FilterModalController);
    })(Controllers = SIGL.Controllers || (SIGL.Controllers = {}));
})(SIGL || (SIGL = {})); //end module 
//# sourceMappingURL=FilterModalController.js.map