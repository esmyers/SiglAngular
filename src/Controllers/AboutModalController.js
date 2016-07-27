//------------------------------------------------------------------------------
//----- AboutModalController -------------------------------------------------
//------------------------------------------------------------------------------
//-------1---------2---------3---------4---------5---------6---------7---------8
//       01234567890123456789012345678901234567890123456789012345678901234567890
//-------+---------+---------+---------+---------+---------+---------+---------+
// copyright:   2016 WiM - USGS
//    authors:  Jeremy K. Newson USGS Wisconsin Internet Mapping
//             
// 
//   purpose:  Example of Modal Controller
//          
//discussion:
//Comments
//05.11.2016 jkn - Created
//Import
var SIGL;
(function (SIGL) {
    var Controllers;
    (function (Controllers) {
        'use string';
        var AboutModalController = (function () {
            function AboutModalController($scope, modal) {
                $scope.vm = this;
                this.modalInstance = modal;
                this.init();
            }
            //Methods  
            //-+-+-+-+-+-+-+-+-+-+-+-
            AboutModalController.prototype.Close = function () {
                this.modalInstance.dismiss('cancel');
            };
            //Helper Methods
            //-+-+-+-+-+-+-+-+-+-+-+-
            AboutModalController.prototype.init = function () {
                //place anything that needs to be initialized here
            };
            //Constructor
            //-+-+-+-+-+-+-+-+-+-+-+-
            AboutModalController.$inject = ['$scope', '$modalInstance'];
            return AboutModalController;
        }()); //end  class
        angular.module('SIGL.Controllers')
            .controller('SIGL.Controllers.AboutModalController', AboutModalController);
    })(Controllers = SIGL.Controllers || (SIGL.Controllers = {}));
})(SIGL || (SIGL = {})); //end module 
//# sourceMappingURL=AboutModalController.js.map