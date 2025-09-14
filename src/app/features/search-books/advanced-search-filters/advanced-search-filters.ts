import { Component, model } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SearchFilters } from '../../../shared/interfaces/search-filter';
import { Option } from '../../../shared/interfaces/option';
import { languageOptions, priceOptions } from '../../../shared/constants/search-filter-options';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
  languageOptions: Option[] = languageOptions;
  priceOptions: Option[] = priceOptions;
  searchFilters = model<SearchFilters>({});

  clearValue(event: Event, field: keyof SearchFilters) {
    event.stopPropagation();
    this.searchFilters()[field] = undefined; 
  }
}
