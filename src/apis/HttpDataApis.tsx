export class NotLoggedOnError extends Error { }
export class DataRetievalError extends Error { }

export type Book = {
    id: string,
    comments: Comment[],
    title: string,
    author: string,
    genre: string,
    summary: string,
    rating: Rating,
    googleBookId: string,
    googleBookDetails: GoogleBookDetails,
    // Next three fields are just _hints_ to the client side - they are enforced on the server
    allowUpdate: boolean,
    allowDelete: boolean,
    allowComment: boolean,
    // We dont use the next field
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createdBy: any,
    createdDateTime: number[],
    // We dont use the next field
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lastModifiedBy: any,
    lastModifiedDateTime: number[]
}

export type Comment = {
    // We dont use the next field
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    owner: any,
    id: string,
    commentText: string,
    entered: number[],
    deleted: boolean,
    deletedBy: string,
    // Next field is just a _hint_ to the client side - it is enforced on the server
    allowDelete: boolean
}

export type Rating = 'TERRIBLE' | 'POOR' | 'OK' | 'GOOD' | 'GREAT';
export type RequestedRating = Rating | 'ALL';

// TODO - Must be a better way - makes me regret using a string literal. Maybe should be an enum.
export function stringAsRating(rating: string): Rating {
    switch (rating.toLowerCase()) {
        case 'terrible':
            return 'TERRIBLE';
        case 'poor':
            return 'POOR';
        case 'ok':
            return 'OK';
        case 'good':
            return 'GOOD';
        case 'great':
            return 'GREAT';
        default:
            console.error('Unexpected rating supplied: ' + rating)
            return 'GREAT';
    }
}

export type GoogleBookDetails = {
    id: string,
    selfLink: string,
    volumeInfo: VolumeInfo,
    accessInfo: AccessInfo
}

export type VolumeInfo = {
    title: string,
    subtitle: string | null,
    authors: string[],
    description: string,
    imageLinks: ImageLinks,
    previewLink: string | null
}

export type ImageLinks = {
    smallThumbnail: string | null,
    thumbnail: string | null,
    small: string | null,
    medium: string | null,
    large: string | null,
    extraLarge: string | null
}

export type AccessInfo = {
    viewability: ViewAbility,
    embeddable: boolean,
    publicDomain: boolean
}

export type ViewAbility = 'NO_PAGES' | 'PARTIAL' | 'ALL_PAGES' | 'UNKNOWN'

export type BooksQueryResult = {
    content: Book[],
    page: {
        size: number,
        number: number,
        totalElements: number,
        totalPages: number
    }
}

export type RatingCount = {
    rating: string,
    countOfBooks: number
}

export type GenreCount = {
    genre: string,
    countOfBooks: number
}

export type Reader = {
    reader: string,
    countOfBooks: number
}

export type Author = {
    author: string,
    countOfBooks: number
}

export type SummaryStats = {
    count: number,
    booksByRating: RatingCount[],
    bookByGenre: Genre[]
}

export type Role = 'ROLE_USER' | 'ROLE_EDITOR' | 'ROLE_ADMIN';
export type AuthenticationProvider = 'GOOGLE' | 'FACEBOOK';

export type UserProfile = {
    "roles": Role[],
    "id": string,
    "authenticationServiceId": string,
    "firstName": string | null,
    "lastName": string | null,
    "fullName": string | null,
    "email": string | null,
    "link": string | null,
    "picture": string | null,
    "lastLogon": number[],
    "firstLogon": number[],
    "authProvider": AuthenticationProvider,
    "adminEmailedAboutSignup": boolean,
    "firstVisit": boolean,
    "highestRole": Role
}

// The results from searching the Google Books API is not paginated
// (unlike searching for Book Reviews directly in this application)
export type GoogleBookSearchResult = {
    totalItems: number,
    items: GoogleBookDetails[]
}


export async function getBooksByRating(requestedRating: RequestedRating = "ALL", page: number = 0, pageSize: number = 20): Promise<BooksQueryResult> {

    const apiPrefix = '/api/books/?';

    const apiParams = 'rating=' + requestedRating.toLocaleLowerCase() + '&page=' + page + '&size=' + pageSize;

    const response = await fetch(apiPrefix + apiParams);
    if (!response.ok) {
        throw new DataRetievalError('Error retrieiving books by review rating data from the server. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

export async function getBooksByReviewDate(page: number = 0, pageSize: number = 20): Promise<BooksQueryResult> {

    const apiPrefix = '/api/books/?';

    const apiParams = '&page=' + page + '&size=' + pageSize;

    const response = await fetch(apiPrefix + apiParams);
    if (!response.ok) {
        throw new DataRetievalError('Error retrieving books by review date from the server. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

export async function getBooksBySearch(searchTerm: string, page: number = 0, pageSize: number = 20): Promise<BooksQueryResult> {

    const apiPrefix = '/api/books/?';

    const apiParams = 'search=' + searchTerm + '&page=' + page + '&size=' + pageSize;

    const response = await fetch(apiPrefix + apiParams);
    if (!response.ok) {
        throw new DataRetievalError('Error searching for books on the server. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

export async function getBooksByAuthor(author: string, page: number = 0, pageSize: number = 20): Promise<BooksQueryResult> {

    const apiPrefix = '/api/books/?';

    const apiParams = 'author=' + author + '&page=' + page + '&size=' + pageSize;

    const response = await fetch(apiPrefix + apiParams);
    if (!response.ok) {
        throw new DataRetievalError('Error searching for books by author. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

export async function getBooksByGenre(genre: string, page: number = 0, pageSize: number = 20): Promise<BooksQueryResult> {

    const apiPrefix = '/api/books/?';

    const apiParams = 'genre=' + genre + '&page=' + page + '&size=' + pageSize;

    const response = await fetch(apiPrefix + apiParams);
    if (!response.ok) {
        throw new DataRetievalError('Error searching for books by genre. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

export async function getBooksByReader(reader: string, page: number = 0, pageSize: number = 20): Promise<BooksQueryResult> {

    const apiPrefix = '/secure/api/books/?';

    const apiParams = 'reader=' + reader + '&page=' + page + '&size=' + pageSize;

    const response = await fetch(apiPrefix + apiParams);
    if (!response.ok) {
        throw new DataRetievalError('Error searching for books by reader. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

export async function getGenres(): Promise<Genre[]> {

    const apiPrefix = '/api/books/genres';

    const response = await fetch(apiPrefix);
    if (!response.ok) {
        throw new DataRetievalError('Error retrieving list of book genres. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

export async function getAuthors(): Promise<Author[]> {

    const apiPrefix = '/api/books/authors';

    const response = await fetch(apiPrefix);
    if (!response.ok) {
        throw new DataRetievalError('Error retrieving list of book authors. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

export async function getReaders(): Promise<Reader[]> {

    const apiPrefix = '/secure/api/books/readers';

    const response = await fetch(apiPrefix);
    if (response.status === 403) {
        console.debug('Forbidden to get list of book readers/reviewers. This is expected if the user is not logged on.');
        const arr: Reader[] = []
        return arr;
    } else if (!response.ok) {
        throw new DataRetievalError('Error retrieving list of book readers (i.e. reviewers). Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

export async function getBookById(bookId: string): Promise<Book> {

    const api = '/api/books/' + bookId;

    const response = await fetch(api);
    if (!response.ok) {
        throw new DataRetievalError('Error retrieiving data for a book from the server. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

export async function getuserProfile(): Promise<UserProfile | null> {

    const api = '/secure/api/user';

    const response = await fetch(api);
    if (response.status === 401) {
        console.debug('Not authorised to get users profile data. This is expected if the user is not logged on.');
        return null;
    } else if (!response.ok) {
        throw new DataRetievalError('Error retrieiving users profile data from the server. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

export async function getGoogleBooks(title: string, author: string): Promise<GoogleBookSearchResult | null> {

    const api = '/secure/api/googlebooks/?';
    const apiParams = 'title=' + title + '&author=' + author; 

    const response = await fetch(api + apiParams);
    if (response.status === 401) {
        console.debug('Not authorised to search for Google Books data. This is expected if the user is not logged on.');
        return null;
    } else if (!response.ok) {
        throw new DataRetievalError('Error searching Google Books data via the server. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

export async function getSummaryStats(): Promise<SummaryStats> {

    const api = '/api/books/stats';

    const response = await fetch(api);
    if (!response.ok) {
        throw new DataRetievalError('Error retrieiving Books application summary stats. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

export async function createBookReview(newBookReview: Book): Promise<null> {

    const api = '/secure/api/books';

    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(newBookReview)
    }

    const response = await fetch(api, config);
    if (response.status === 401) {
        console.debug('Not authorised to create book reviews. This is expected if the user doesnt have the EDITOR or ADMIN role.');
        return null;
    // Note that the API actually returns a 201 (created) with a redirect location for the newly created book
    } else if (!response.ok) {
        throw new DataRetievalError('Error trying to store book review details on the server. Status: ' + response.status + ' ' + response.statusText);
    }

    return null;
}

export async function logoff(): Promise<void> {

    const api = '/secure/api/logout';

    const config = {
        method: 'POST',
    }

    const response = await fetch(api, config);
    if (response.status === 401) {
        console.debug('Not authorised to acess the logout endpoint. This is expected if the user is not logged in.');
        return;
    } else if (!response.ok) {
        throw new DataRetievalError('Error calling the logout API on the server. Status: ' + response.status + ' ' + response.statusText);
    }
    return;
}

