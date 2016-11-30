"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var SystemService = (function () {
    function SystemService(http) {
        this.http = http;
    }
    //getSystems(): Observable<any> {
    //    return this.http.get("http://localhost:65237/api/Systems")
    //        .map((res: Response) => res.json())
    //        .catch((error: any) => Observable.throw(error.json().error || 'Server error')
    //        );
    //};
    SystemService.prototype.getSystem = function (id) {
        return this.http.get("http://localhost:65237/api/Systems/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    ;
    SystemService.prototype.createSystem = function (systemClass) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var objec = "{ &quot; Id & quot;: 2, &quot; SystemName & quot;: &quot; 2St& quot;,&quot; Description & quot;: &quot; 2Multiple line text, lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum& quot;,&quot; SelectedPackageId & quot;: 1,&quot; SelectedMultiDescriptiors & quot;: [1,]}";
        return this.http.put("http://localhost:65237/api/Systems/1", JSON.stringify(systemClass), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        ;
    };
    SystemService.prototype.updateSystem = function (systemClass) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put("http://localhost:65237/api/Systems/" + systemClass.Id, JSON.stringify(systemClass), { headers: headers });
    };
    SystemService.prototype.deleteSystem = function (id) {
        return this.http.delete("http://localhost:65237/api/Systems/" + id);
    };
    SystemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SystemService);
    return SystemService;
}());
exports.SystemService = SystemService;
//# sourceMappingURL=system.service.js.map