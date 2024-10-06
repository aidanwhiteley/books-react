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
    entered: Date,
    deleted: boolean,
    deletedBy: string,
    // Next field is just a _hint_ to the client side - it is enforced on the server
    allowDelete: boolean
}

export type Rating = 'TERRIBLE' | 'POOR' | 'OK' | 'GOOD' | 'GREAT';
export type RequestedRating = Rating | 'ALL';

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

export async function getBooksByRating(requestedRating : RequestedRating = "ALL", page: number = 0, pageSize: number = 20): Promise<BooksQueryResult> {
    
    const apiPrefix = '/api/books/?';

    const apiParams = "rating=" + requestedRating.toLocaleLowerCase() + "&page=" + page + "&size=" +pageSize;

    console.log('Running get by rating with: ' + apiParams);

    const response = await fetch(apiPrefix + apiParams);
    if (!response.ok) {
        throw new DataRetievalError('Error retrieiving books by review rating data from the server. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

export async function getBooksByReviewDate(page: number = 0, pageSize: number = 20): Promise<BooksQueryResult> {
    
    const apiPrefix = '/api/books/?';

    const apiParams = "&page=" + page + "&size=" +pageSize;

    const response = await fetch(apiPrefix + apiParams);
    if (!response.ok) {
        throw new DataRetievalError('Error retrieiving books by review date from the server. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

export async function getBookById(bookId: string) : Promise<Book> {

    const api = '/api/books/' + bookId;

    const response = await fetch(api);
    if (!response.ok) {
        throw new DataRetievalError('Error retrieiving data for a book from the server. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

