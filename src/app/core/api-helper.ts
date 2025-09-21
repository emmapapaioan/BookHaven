import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchFilters } from '../shared/interfaces/search-filter';

@Injectable({
  providedIn: 'root'
})
export class ApiHelper {
  setSearchBooksParams(paramsObject: SearchFilters): HttpParams {
    let params = new HttpParams();
 
    Object.entries(paramsObject).forEach(([key, value]) => {
      (value) && (params = params.set(key, value));
    });
    
    return params;
  }
}
