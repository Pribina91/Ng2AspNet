"use strict";
var SystemClass = (function () {
    function SystemClass(id, name, description) {
        this.Id = id;
        this.SystemName = name;
        this.Description = description;
        this.SelectedPackageId = 1;
        this.SelectedMultiDescriptiors = [1, 2];
    }
    return SystemClass;
}());
exports.SystemClass = SystemClass;
//# sourceMappingURL=SystemClass.js.map