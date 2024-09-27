export class NotLoggedOnError extends Error { }

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
export type RequestedRating = Rating | 'All';

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

export async function getBooksByRating(requestedRating : RequestedRating, pageSize: number): Promise<Book[]> {
    
    const apiPrefix = '/api/books/?';

    const response = await fetch('/webcam/api/status');
    if (response.status === 401) {
        throw new NotLoggedOnError('User was not logged on. Status: ' + response.status + ' ' + response.statusText);
    } else if (!response.ok) {
        throw new Error('Network response was not ok. Status: ' + response.status + ' ' + response.statusText);
    }
    return response.json()
}

