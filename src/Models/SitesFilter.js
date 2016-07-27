//------------------------------------------------------------------------------
//----- IGroundWaterFilterSite -------------------------------------------------
//------------------------------------------------------------------------------
//-------1---------2---------3---------4---------5---------6---------7---------8
//       01234567890123456789012345678901234567890123456789012345678901234567890
//-------+---------+---------+---------+---------+---------+---------+---------+
// copyright:   2014 WiM - USGS
//    authors:  Jeremy K. Newson USGS Wisconsin Internet Mapping
//             
// 
//   purpose:  filter for GWW site
//          
//discussion:
//
//Comments
//08.20.2014 jkn - Created
//Imports"
// Interface
var SIGL;
(function (SIGL) {
    var Models;
    (function (Models) {
        var GroundWaterFilterSite = (function () {
            function GroundWaterFilterSite(n, t) {
                this.Name = n;
                this.Type = t;
            }
            return GroundWaterFilterSite;
        }());
        Models.GroundWaterFilterSite = GroundWaterFilterSite; //end class
        (function (FilterType) {
            FilterType[FilterType["STATE"] = 1] = "STATE";
            FilterType[FilterType["COUNTY"] = 2] = "COUNTY";
            FilterType[FilterType["AQUIFER"] = 3] = "AQUIFER";
        })(Models.FilterType || (Models.FilterType = {}));
        var FilterType = Models.FilterType;
    })(Models = SIGL.Models || (SIGL.Models = {}));
})(SIGL || (SIGL = {})); //end module 
//# sourceMappingURL=SitesFilter.js.map