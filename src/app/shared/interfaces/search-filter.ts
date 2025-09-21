export interface SearchFilters {
  q?: string;                                   // Query text
  langRestrict?: string;                        // Language (e.g., 'en', 'es')
  inauthor?: string;                            // Restrict by author
  intitle?: string;                             // Restrict by title
  filter?: 'ebooks' | 'free-ebooks' | 'full' | 'paid-ebooks' | 'partial'; // Price / availability filter
  maxResults?: number;                          // Max results per page (max 40 in API)
  startIndex?: number;                          // Pagination offset
  printType?: 'all' | 'books' | 'magazines';    // Content type (printType)
  libraryRestrict?: 'my-library' | 'no-restrict'; // Restrict to user's library
  orderBy?: 'relevance' | 'newest';             // Sorting
}
