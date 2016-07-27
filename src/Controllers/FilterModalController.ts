﻿//------------------------------------------------------------------------------
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

module SIGL.Controllers {

    'use string';
    interface IFilterModalControllerScope extends ng.IScope {
        vm: IFilterModalController;
    }
    interface IModal {
        Close():void
    }    
    interface IFilterModalController extends IModal {
        StateList: Array<Models.IGroundWaterFilterSite>;
        CountyList: Array<Models.IGroundWaterFilterSite>;
        AquiferList: Array<Models.IGroundWaterFilterSite>;

        SelectedStates: Array<Models.IGroundWaterFilterSite>;
        SelectedCounties: Array<Models.IGroundWaterFilterSite>;
        SelectedAquifers: Array<Models.IGroundWaterFilterSite>;
    }
    class FilterModalController implements IFilterModalController {
        
        //Properties
        //-+-+-+-+-+-+-+-+-+-+-+-
        private modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        private SIGLService: Services.ISIGLService;

        public StateList: Array<Models.IGroundWaterFilterSite>;
        public CountyList: Array<Models.IGroundWaterFilterSite>;
        public AquiferList: Array<Models.IGroundWaterFilterSite>;

        public SelectedStates: Array<Models.IGroundWaterFilterSite>;
        public SelectedCounties: Array<Models.IGroundWaterFilterSite>;
        public SelectedAquifers: Array<Models.IGroundWaterFilterSite>;
        //Constructor
        //-+-+-+-+-+-+-+-+-+-+-+-
        static $inject = ['$scope', '$modalInstance', 'SIGL.Services.SIGLService'];
        constructor($scope: IFilterModalControllerScope, modal:ng.ui.bootstrap.IModalServiceInstance, SIGLService:Services.ISIGLService) {
            $scope.vm = this;
            this.modalInstance = modal;
            this.SIGLService = SIGLService;
            this.init();  
        }  
        
        //Methods  
        //-+-+-+-+-+-+-+-+-+-+-+-

        public Close(): void {
            //if(this.SelectedStates.length >0) this.GWWService.AddFilterTypes(this.SelectedStates);
            //if (this.SelectedCounties.length > 0) this.GWWService.AddFilterTypes(this.SelectedCounties);
            //if (this.SelectedAquifers.length > 0) this.GWWService.AddFilterTypes(this.SelectedAquifers);
            this.modalInstance.dismiss('cancel')
        }

        public AddStateFilter(item: string) {
            this.SelectedStates.push(new Models.GroundWaterFilterSite(item, Models.FilterType.STATE));
        }
        public AddCountyFilter(item: string) {
            this.SelectedCounties.push(new Models.GroundWaterFilterSite(item, Models.FilterType.COUNTY));
        }
        public AddAquiferFilter(item: string) {
            this.SelectedAquifers.push(new Models.GroundWaterFilterSite(item, Models.FilterType.AQUIFER));
        }
        
        //Helper Methods
        //-+-+-+-+-+-+-+-+-+-+-+-
        private init(): void {
            //place anything that needs to be initialized here
            this.SelectedAquifers = [];
            this.SelectedCounties = [];
            this.SelectedStates = [];            
        }
      
    }//end  class

    angular.module('SIGL.Controllers')
        .controller('SIGL.Controllers.FilterModalController', FilterModalController);
}//end module 