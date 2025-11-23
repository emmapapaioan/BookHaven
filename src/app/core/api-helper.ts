import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchFilters } from '../shared/interfaces/search-filter';

@Injectable({
  providedIn: 'root'
})
export class ApiHelper {
  setSearchBooksParams(paramsObject: SearchFilters): HttpParams {
    let params = new HttpParams();

    const q = this.buildGoogleBooksQuery(paramsObject.q, paramsObject.inauthor);
    params = params.set('q', q);

    Object.entries(paramsObject).forEach(([key, value]) => {
      if (key !== 'inauthor' && key !== 'q' && value) {
        params = params.set(key, value);
      }
    });

    return params;
  }

  // Builds a Google Books title-only search because `inauthor=`
  // is too strict. We combine: intitle:"title text" + inauthor:"name".
  private buildGoogleBooksQuery(title?: string, inauthor?: string): string {
    let query = '';

    // Search only book titles
    if (title) {
      query += `intitle:"${title}"`;
    }

    // Add author search (text-based, more reliable than the metadata filter)
    if (inauthor) {
      query += ` inauthor:"${inauthor}"`;
    }

    return query.trim();
  }
}
