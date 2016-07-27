//------------------------------------------------------------------------------
//----- SIGLService -----------------------------------------------------
//------------------------------------------------------------------------------

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
module SIGL.Services {
    'use strict'
    export interface ISIGLService {
        ParameterList: Array<any>;
        ResourceList: Array<any>;
        

    }
    export var onSelectedGWSiteChanged: string = "onSelectedGWSiteChanged";
    class SIGLService extends WiM.Services.HTTPServiceBase implements ISIGLService{       
        //Events
        //-+-+-+-+-+-+-+-+-+-+-+-
        

        //Properties
        //-+-+-+-+-+-+-+-+-+-+-+-
        public ParameterList: Array<any>;
        public ResourceList: Array<any>;

        //Constructor
        //-+-+-+-+-+-+-+-+-+-+-+-
        constructor($http: ng.IHttpService, evntmngr:WiM.Event.IEventManager) {
            super($http, configuration.baseurls['SIGLServices'])

            this.init();
        }

        //Methods
        //-+-+-+-+-+-+-+-+-+-+-+- 
        

        //HelperMethods
        //-+-+-+-+-+-+-+-+-+-+-+-
        private init(): void {
            this.ParameterList = [];
            this.ResourceList = [];

            this.loadParameterList();
            this.loadResourceList();
        }
        private loadParameterList() {
            var url = "SiGLServices/parameters.json?GroupNames=";


            var request: WiM.Services.Helpers.RequestInfo = new WiM.Services.Helpers.RequestInfo(url);
            this.Execute(request).then(
                (response: any) => {
                    if (response.data) {
                        (<Array<any>>response.data).forEach((item: any) => {
                            //this.ParameterList.group;
                            this.ParameterList.push(item);
                        });
                        console.log(this.ParameterList);
                    }//endif
                }, (error) => {
                    console.log('No Parameters found');                    
                }).finally(() => {
                });
        }

        private loadResourceList() {
            var url = "SiGLServices/resourceTypes.json";

            var request: WiM.Services.Helpers.RequestInfo = new WiM.Services.Helpers.RequestInfo(url);
            this.Execute(request).then(
                (response: any) => {
                    if (response.data) {
                        (<Array<any>>response.data).forEach((item: any) => {
                            this.ResourceList.push(item);
                        });    
                    }//endif

                }, (error) => {
                    console.log('No Resources found');
                }).finally(() => {
                });
                    

        
        }

       

        //Event Handlers
        //-+-+-+-+-+-+-+-+-+-+-+-
        
    }//end class

    factory.$inject = ['$http', 'WiM.Event.EventManager'];
    function factory($http: ng.IHttpService, evntmngr: WiM.Event.IEventManager) {
        return new SIGLService($http, evntmngr)
    }
    angular.module('SIGL.Services')
        .factory('SIGL.Services.SIGLService', factory)
}//end module  