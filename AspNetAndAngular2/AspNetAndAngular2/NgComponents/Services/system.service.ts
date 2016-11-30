
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
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

    createSystem(systemClass: SystemClass): Observable<any>  {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var objec = "{ &quot; Id & quot;: 2, &quot; SystemName & quot;: &quot; 2St& quot;,&quot; Description & quot;: &quot; 2Multiple line text, lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum& quot;,&quot; SelectedPackageId & quot;: 1,&quot; SelectedMultiDescriptiors & quot;: [1,]}";

        return this.http.put("http://localhost:65237/api/Systems/1", JSON.stringify(systemClass), { headers: headers })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')
            );;
    }

    updateSystem(systemClass: SystemClass) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put("http://localhost:65237/api/Systems/" + systemClass.Id, JSON.stringify(systemClass), { headers: headers });
    }

    deleteSystem(id: string): Observable<any> {
        return this.http.delete("http://localhost:65237/api/Systems/" + id);
    }
}