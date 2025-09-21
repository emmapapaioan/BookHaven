import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';

import { SearchFilters } from '../../../shared/interfaces/search-filter';
import { Option } from '../../../shared/interfaces/option';
import { filterOptions, langRestrictOptions, libraryRestrictOptions, maxResultsOptions, orderByOptions, printTypeOptions } from '../../../shared/constants/search-filter-options';

@Component({
  selector: 'app-advanced-search-filters',
  standalone: true,
  imports: [
    FormsModule, 
    MatExpansionModule, 
    MatFormFieldModule,
    MatSelectModule, 
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './advanced-search-filters.html',
  styleUrls: ['./advanced-search-filters.scss']
})
export class AdvancedSearchFilters {
  langRestrictOptions: Option[] = langRestrictOptions;
  filterOptions: Option[] = filterOptions;
  printTypeOptions: Option[] = printTypeOptions;
  libraryRestrictOptions: Option[] = libraryRestrictOptions;
  orderByOptions: Option[] = orderByOptions;
  maxResultsOptions: Option[] = maxResultsOptions;
  searchFilters = model<SearchFilters>({});

  clearValue(event: Event, field: keyof SearchFilters) {
    event.stopPropagation();
    this.searchFilters()[field] = undefined; 
  }
}
