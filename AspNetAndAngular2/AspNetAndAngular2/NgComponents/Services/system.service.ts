
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { SystemClass} from "../ModelClasses/SystemClass";

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class SystemService {
    constructor(private http: Http) {
    }

    //getSystems(): Observable<any> {
    //    return this.http.get("http://localhost:65237/api/Systems")
    //        .map((res: Response) => res.json())
    //        .catch((error: any) => Observable.throw(error.json().error || 'Server error')
    //        );
    //};

    getSystem(id : string): Observable<any> {
        return this.http.get("http://localhost:65237/api/Systems/" + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')
            );
    };

    //createSystem(newSystemCode: string, newName: string): Observable<any> {
    //    return this.http.post("http://localhost:65237/api/Systems/", { name: newName, SystemCode: newSystemCode });
    //}

    updateSystem(systemClass : SystemClass): Observable<any> {
        return this.http.put("http://localhost:65237/api/Systems", { JSON.stringify(systemClass) });
    }

    //deleteSystem(id: string): Observable<any> {
    //    return this.http.delete("http://localhost:65237/api/Systems/" + id);
    //}
}