﻿//------------------------------------------------------------------------------
//----- NavbarController ------------------------------------------------------
//------------------------------------------------------------------------------

//-------1---------2---------3---------4---------5---------6---------7---------8
//       01234567890123456789012345678901234567890123456789012345678901234567890
//-------+---------+---------+---------+---------+---------+---------+---------+

// copyright:   2014 WiM - USGS

//    authors:  Jeremy K. Newson USGS Wisconsin Internet Mapping


//   purpose:  

//discussion:   Controllers are typically built to reflect a View. 
//              and should only contailn business logic needed for a single view. For example, if a View 
//              contains a ListBox of objects, a Selected object, and a Save button, the Controller 
//              will have an ObservableCollection ObectList, 
//              Model SelectedObject, and SaveCommand.

//Comments
//04.14.2015 jkn - Created

//Imports"
module GroundWaterWatch.Controllers {
    'use strict';
    interface INavbarControllerScope extends ng.IScope {
        vm: NavbarController;
    }
    interface INavbarController {
        ProjectName: string; 
    }

    class NavbarController implements INavbarController {
        //Properties
        //-+-+-+-+-+-+-+-+-+-+-+-
        private modalService: Services.IModalService;
        private cookies: any;
        private newArticleCount: number;
        public get ProjectName(): string {
            return configuration.projectName;
        }
        //Constructor
        //-+-+-+-+-+-+-+-+-+-+-+-
        static $inject = ['$scope', 'GroundWaterWatch.Services.ModalService'];
        constructor($scope: INavbarControllerScope, modal: Services.IModalService) {            
            $scope.vm = this;
            this.modalService = modal;
        }

        //Methods
        //-+-+-+-+-+-+-+-+-+-+-+-

        public openAboutModal(): void {
            this.modalService.openModal(Services.ModalType.e_about);
        }

        //Helper Methods
        //-+-+-+-+-+-+-+-+-+-+-+-

    }//end class
    angular.module('GroundWaterWatch.Controllers')
        .controller('GroundWaterWatch.Controllers.NavbarController', NavbarController)

}//end module
  