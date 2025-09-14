export interface SearchFilters {
    langRestrict?: string; // language
    inauthor?: string;
    filter?: string; // price
    q?: string; // query
    maxResults?: number;
    startIndex?: number;
}