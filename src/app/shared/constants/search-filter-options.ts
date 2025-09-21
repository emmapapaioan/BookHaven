import { Option } from "../interfaces/option";

export const langRestrictOptions: Option[] = [ // Language options        
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'el', label: 'Greek' },
  { value: 'it', label: 'Italian' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'ru', label: 'Russian' },
  { value: 'zh', label: 'Chinese' },
  { value: 'ja', label: 'Japanese' },
  { value: 'ko', label: 'Korean' },
  { value: 'ar', label: 'Arabic' },
  { value: 'hi', label: 'Hindi' },
  { value: 'bn', label: 'Bengali' },
  { value: 'pa', label: 'Punjabi' },
  { value: 'tr', label: 'Turkish' },
  { value: 'fa', label: 'Persian' },
  { value: 'nl', label: 'Dutch' },
  { value: 'sv', label: 'Swedish' },
  { value: 'pl', label: 'Polish' },
  { value: 'uk', label: 'Ukrainian' },
  { value: 'he', label: 'Hebrew' },
  { value: 'th', label: 'Thai' },
  { value: 'vi', label: 'Vietnamese' }
];

export const filterOptions: Option[] = [ // Price options
  { value: 'ebooks', label: 'All Google eBooks' },       // All Google eBooks (free and paid)
  { value: 'free-ebooks', label: 'Free eBooks' },        // Only eBooks available for free
  { value: 'full', label: 'Full View (entire book)' },   // Books fully available to read online
  { value: 'paid-ebooks', label: 'Paid eBooks' },        // Only eBooks that require purchase
  { value: 'partial', label: 'Partial View (preview)' }, // Books with limited preview pages
];

export const printTypeOptions: Option[] = [
  { value: 'all', label: 'All' },            // All volume content types
  { value: 'books', label: 'Books' },        // Only books
  { value: 'magazines', label: 'Magazines' } // Only magazines
];

export const libraryRestrictOptions: Option[] = [
  { value: 'no-restrict', label: 'All Books' }, // Do not restrict based on user's library
  { value: 'my-library', label: 'My Library' }  // Restrict to the user's library (any shelf)
];

export const orderByOptions: Option[] = [
  { value: 'relevance', label: 'Relevance' }, // Sort by relevance to search terms
  { value: 'newest', label: 'Newest' }        // Sort by most recently published
];

export const maxResultsOptions: Option[] = [
  { value: 5, label: '5 results' },
  { value: 10, label: '10 results' },
  { value: 15, label: '15 results' },
  { value: 20, label: '20 results' },
  { value: 25, label: '25 results' },
  { value: 30, label: '30 results' },
  { value: 35, label: '35 results' },
  { value: 40, label: '40 results' },
];