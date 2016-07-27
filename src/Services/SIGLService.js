//------------------------------------------------------------------------------
//----- SIGLService -----------------------------------------------------
//------------------------------------------------------------------------------
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//-------1---------2---------3---------4---------5---------6---------7---------8
//       01234567890123456789012345678901234567890123456789012345678901234567890
//-------+---------+---------+---------+---------+---------+---------+---------+
// copyright:   2016 WiM - USGS
//    authors:  Jeremy K. Newson USGS Wisconsin Internet Mapping
//             
// 
//   purpose:  The service agent is responsible for initiating service calls, 
//             capturing the data that's returned and forwarding the data back to 
//             the Controller.
//          
//discussion:
//
//https://docs.angularjs.org/api/ng/service/$http
//Comments
//05.16.2016 jkn - Created
//Import
var SIGL;
(function (SIGL) {
    var Services;
    (function (Services) {
        'use strict';
        Services.onSelectedGWSiteChanged = "onSelectedGWSiteChanged";
        var SIGLService = (function (_super) {
            __extends(SIGLService, _super);
            //Constructor
            //-+-+-+-+-+-+-+-+-+-+-+-
            function SIGLService($http, evntmngr) {
                _super.call(this, $http, configuration.baseurls['SIGLServices']);
                this.init();
            }
            //Methods
            //-+-+-+-+-+-+-+-+-+-+-+- 
            //HelperMethods
            //-+-+-+-+-+-+-+-+-+-+-+-
            SIGLService.prototype.init = function () {
                this.ParameterList = [];
                this.ResourceList = [];
                this.loadParameterList();
                this.loadResourceList();
            };
            SIGLService.prototype.loadParameterList = function () {
                var _this = this;
                var url = "SiGLServices/parameters.json?GroupNames=";
                var request = new WiM.Services.Helpers.RequestInfo(url);
                this.Execute(request).then(function (response) {
                    if (response.data) {
                        response.data.forEach(function (item) {
                            //this.ParameterList.group;
                            _this.ParameterList.push(item);
                        });
                        console.log(_this.ParameterList);
                    } //endif
                }, function (error) {
                    console.log('No Parameters found');
                }).finally(function () {
                });
            };
            SIGLService.prototype.loadResourceList = function () {
                var _this = this;
                var url = "SiGLServices/resourceTypes.json";
                var request = new WiM.Services.Helpers.RequestInfo(url);
                this.Execute(request).then(function (response) {
                    if (response.data) {
                        response.data.forEach(function (item) {
                            _this.ResourceList.push(item);
                        });
                    } //endif
                }, function (error) {
                    console.log('No Resources found');
                }).finally(function () {
                });
            };
            return SIGLService;
        }(WiM.Services.HTTPServiceBase)); //end class
        factory.$inject = ['$http', 'WiM.Event.EventManager'];
        function factory($http, evntmngr) {
            return new SIGLService($http, evntmngr);
        }
        angular.module('SIGL.Services')
            .factory('SIGL.Services.SIGLService', factory);
    })(Services = SIGL.Services || (SIGL.Services = {}));
})(SIGL || (SIGL = {})); //end module  
//# sourceMappingURL=SIGLService.js.map