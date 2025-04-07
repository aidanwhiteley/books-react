import { http, HttpResponse } from 'msw'

export const handlers = [
    // Intercept books request...
    http.get('http://localhost:5173/api/books/', () => {
        // ...and respond to them using this JSON response.
        return HttpResponse.json(

            {
                "content": [
                    {
                        "createdBy": {
                            "authenticationServiceId": "109958715822542250420",
                            "firstName": "Jane",
                            "lastName": "Whiteley",
                            "fullName": "Jane Whiteley",
                            "email": "dummy.enail@gmail.com",
                            "link": "https://plus.google.com/109958715822542250420",
                            "picture": "https://lh5.googleusercontent.com/-lBSBt95MHPE/AAAAAAAAAAI/AAAAAAAAAEk/mTsh5WGwfuY/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "createdDateTime": [2018, 2, 20, 20, 14, 31, 64000000],
                        "lastModifiedBy": {
                            "authenticationServiceId": "109958715822542250420",
                            "firstName": "Jane",
                            "lastName": "Whiteley",
                            "fullName": "Jane Whiteley",
                            "email": "dummy.enail@gmail.com",
                            "link": "https://plus.google.com/109958715822542250420",
                            "picture": "https://lh5.googleusercontent.com/-lBSBt95MHPE/AAAAAAAAAAI/AAAAAAAAAEk/mTsh5WGwfuY/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "lastModifiedDateTime": [2018, 2, 20, 20, 14, 31, 64000000],
                        "id": "5a8c81a754ef065d0c1cc63e",
                        "comments": [
                            {
                                "owner": {
                                    "authenticationServiceId": "109958715822542250420",
                                    "firstName": "Jane",
                                    "lastName": "Whiteley",
                                    "fullName": "Jane Whiteley",
                                    "email": "dummy.enail@gmail.com",
                                    "link": "https://plus.google.com/109999715822542250420",
                                    "picture": "https://lh5.googleusercontent.com/-lBSBt95MHPE/AAAAAAAAAAI/AAAAAAAAAEk/mTsh5WGwfuY/photo.jpg",
                                    "authProvider": "GOOGLE"
                                },
                                "id": "cb1f8780-6fef-4fc1-b481-e7089f20ab5c",
                                "commentText": null,
                                "entered": [2018, 2, 20, 20, 15, 48, 166000000],
                                "deleted": false,
                                "deletedBy": null,
                                "allowDelete": true
                            },
                            {
                                "owner": {
                                    "authenticationServiceId": "1632142143498857",
                                    "firstName": "Aidan",
                                    "lastName": "Whiteley",
                                    "fullName": "Fred Bloggs",
                                    "email": null,
                                    "link": "https://www.facebook.com/app_scoped_user_id/1632142143498857/",
                                    "picture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/27540595_1646377895408615_873932859618115488_n.jpg?oh=54666695335266abf092aad85ef9742f&oe=5B136C80",
                                    "authProvider": "FACEBOOK"
                                },
                                "id": "4acf26f9-a3bb-4afd-bfe3-67e2331e0c66",
                                "commentText": null,
                                "entered": [2018, 2, 24, 20, 11, 49, 390000000],
                                "deleted": false,
                                "deletedBy": null,
                                "allowDelete": true
                            }
                        ],
                        "title": "Ask An Astonaut",
                        "author": "Tim Peake",
                        "genre": "Science",
                        "summary": "This is great",
                        "rating": "GREAT",
                        "googleBookId": "MUJHDgAAQBAJ",
                        "googleBookDetails": {
                            "id": "MUJHDgAAQBAJ",
                            "selfLink": "https://www.googleapis.com/books/v1/volumes/MUJHDgAAQBAJ",
                            "volumeInfo": {
                                "title": "Ask an Astronaut",
                                "subtitle": "My Guide to Life in Space (Official Tim Peake Book)",
                                "authors": [
                                    "Tim Peake"
                                ],
                                "description": "\u003Cp\u003E\u003Cb\u003EThe awe-inspiring \u003Ci\u003ESunday Times\u003C/i\u003E Bestseller from astronaut Tim Peake\u003C/b\u003E\u003C/p\u003E\u003Cp\u003EHow does it feel to orbit the earth ten times faster than a speeding bullet?\u003Cbr\u003EWhatÔÇÖs it like to eat, sleep and go to the toilet in space?\u003Cbr\u003EAnd where to next ÔÇô the Moon, Mars or beyond?\u003C/p\u003E\u003Cp\u003E\u003Ci\u003EAsk an Astronaut\u003C/i\u003E is TimÔÇÖs personal guide to life in space, based on his historic Principia mission, and the thousands of questions he has been asked since his return to Earth. \u003C/p\u003E\u003Cp\u003EAccessible, in-depth, and written with his characteristic warmth, Tim shares his thoughts on every aspect of his mission. From training to launch, from his historic spacewalk to re-entry, he reveals for readers of all ages the cutting-edge science behind his ground-breaking experiments, and the wonders of day-to-day life on board the International Space Station. \u003C/p\u003E\u003Cp\u003EThe public were invited to submit questions using the hashtag #askanastronaut, and a selection are answered by Tim in the book, which will be accompanied with illustrations, diagrams and never-before-seen photos.\u003C/p\u003E\u003Cp\u003ETim is pleased to announce that, as with his previous book, royalties received from the book will be donated to The PrinceÔÇÖs Trust.\u003C/p\u003E",
                                "imageLinks": {
                                    "smallThumbnail": "http://books.google.com/books/content?id=MUJHDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE709L2l99ixvSnSb6mlmeNua9z_S4zNJZp7juVayrtPmhn_kCI1MBLP-JV9wq3FSLm9jGqbESfG29x0qGLcDaF-yvlHqJnOxPteIHbNuQy-JywdwXm941Wl3oWRkGJPEEIOZ5pIM&source=gbs_api",
                                    "thumbnail": "http://books.google.com/books/content?id=MUJHDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70-dnLkxOp9cukzI0cwWrUVSm5VGDQM1wpIH1Vq__wQcUmbTM95pUOd6O6Zy-1X1PPnNzJtz9DdOaqa6Fgyv8XmQ4ZiRzkPjP_vN_MDNi8qla39nPcY4Reec2d0wFkcYivTTUp_&source=gbs_api",
                                    "small": "http://books.google.com/books/content?id=MUJHDgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE728V2qLkIrKqujqkoXnx0qK1i9xI6EOIBnfOvF08LhFE8B8y9xiG-L9PDjSN2c23AeGxvXiRzxrOaw9SJ8w6SYzRtQHQcZxNkQAG7KRn8-5RwX05uX3DSZRTqGj586xhYtK5xkZ&source=gbs_api",
                                    "medium": "http://books.google.com/books/content?id=MUJHDgAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE737IM0Q4F2I3PgfVdbcI1w0g1uB3ew69Ip-Yz1hFgAYAZikU1ctb_vBB0PTQUBGLstNo4GVCkVLLJ81Y88oFMsaUlsBQ11G84-yBlyZSeS9qnsRNGhGTqigz9Md15t90bmt9oTH&source=gbs_api",
                                    "large": "http://books.google.com/books/content?id=MUJHDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73ZMEjf720Ko_NNxkbEeeedBJBTyalBuuWaNkm459E1YAYiPb7xBDnBqJUVn95vCavmMEiRRCBUDbkXq7LlNQzjV9f9jD_P_MYdrlerA-Ys8IGWf5XMja-lCnAxS93Gzbdqg-e2&source=gbs_api",
                                    "extraLarge": "http://books.google.com/books/content?id=MUJHDgAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE73surwXy2pINgf7Mnh267LJdZP64AvjmGEtRfPgFB8xynp8GbYGT-OC5id_PMbHF-4bNfbVlhL0n9VgXwR2Vsxn05fdW5QI05Z9p_KSE7sA9seFZ43PYDwk9hKBSAbDrbqjAURe&source=gbs_api"
                                },
                                "previewLink": "http://books.google.co.uk/books?id=MUJHDgAAQBAJ&hl=&source=gbs_api"
                            },
                            "accessInfo": {
                                "viewability": "PARTIAL",
                                "embeddable": true,
                                "publicDomain": false
                            }
                        },
                        "allowUpdate": true,
                        "allowDelete": true,
                        "allowComment": true
                    },
                    {
                        "createdBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "createdDateTime": [2018, 1, 28, 13, 47, 27, 377000000],
                        "lastModifiedBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "lastModifiedDateTime": [2018, 1, 28, 13, 47, 27, 377000000],
                        "id": "5a6dd46f0ac8740f4865d6f7",
                        "comments": [],
                        "title": "The Handmaids Tale",
                        "author": "Margaret Atwood",
                        "genre": "Novel",
                        "summary": "A stunning vision of a near future America where the lead character - Offred - has just one role - to breed. \nHer life is wholly constrained by the post nuclear war state in which she lives. She is allowed next to no freedoms and yet she remembers her old life and its freedoms.\nIf you've just watched the series on Channel 4 you should still want to read this book.",
                        "rating": "GREAT",
                        "googleBookId": "o79lk6nTsRgC",
                        "googleBookDetails": {
                            "id": "o79lk6nTsRgC",
                            "selfLink": "https://www.googleapis.com/books/v1/volumes/o79lk6nTsRgC",
                            "volumeInfo": {
                                "title": "The Handmaid's Tale",
                                "subtitle": null,
                                "authors": [
                                    "Margaret Atwood"
                                ],
                                "description": "\u003Cp\u003EThe Republic of Gilead offers Offred only one function: to breed. If she deviates, she will, like dissenters, be hanged at the wall or sent out to die slowly of radiation sickness. But even a repressive state cannot obliterate desire neither Offred's nor that of the two men on which her future hangs. \u003C/p\u003E\u003Cp\u003EBrilliantly conceived and executed, this powerful vision of the future gives full rein to Margaret Atwood's irony, wit and astute perception.\u003C/p\u003E\u003Cp\u003EExpect to be gripped by a more potent or involving drama this year.\u003Ci\u003ETelegraph\u003C/i\u003E\u003C/b\u003E\u003C/p\u003E\u003Cp\u003EI can't  think of another television event that has hit quite such a nerve, and gone on resounding and resonating, worrying and creeping into your soul and into your dreams quite like \u003Ci\u003EThe Handmaid's Tale\u003C/i\u003E is as relevant today as it was when Atwood wrote it, in Berlin, in 1985. And while all this continues to be real, we need The Handmaid's' Tale to keep reminding, and resonating, and ringing. Dong, dong, dong.\u003Cb\u003E\u003Ci\u003EGuardian\u003C/i\u003E\u003C/b\u003E\u003C/p\u003E",
                                "imageLinks": {
                                    "smallThumbnail": "http://books.google.com/books/content?id=o79lk6nTsRgC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72izUrjwOKkhwTQGEiaNFDvutpfNOxLrF-5F3lY1g9-eXuLo9RAF6q0DLsuPCxqSonBLetqTQFHfAdtqHhdgF1jUgD072rs-lrNAaWJyvSqESGGdO-N-PJzzeLu0EP62cocq-Ld&source=gbs_api",
                                    "thumbnail": "http://books.google.com/books/content?id=o79lk6nTsRgC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70jAawP1RrOhfdJtvKATgbKi17aRdmEz9gv7rJHlqPKXa3-P8j-61aUulYOLoX2REn9b-JsD9LnbG1IF2yEFWDjUci0lUnQdk472vl351iGgj1XcHSg4Z4lJ9gOlbKVUtMNc1Qu&source=gbs_api",
                                    "small": "http://books.google.com/books/content?id=o79lk6nTsRgC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE70KSZ10kMyyfDBs_7cqRsHcdtaKVQWmvxclukQFo175GDcOQsnw8pTSEfM7lV2T3d4FxrIuZRGqS_i0Ckk3g94axthHp8FfSaCGW3CYvMtQdZZgE4VD8SQpLeCdq6-p-hxaiCAo&source=gbs_api",
                                    "medium": "http://books.google.com/books/content?id=o79lk6nTsRgC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72DbfJjqQmyO9PZEqNYXaozQCH4QqqrVSQZI9SZ7rn01Lj6BXcMsyHTrffcwuJDeJa95fRa1v5A49usJKbslqSJrqc6w2ldxxp08gQz4eaAm7y1-LcUQsxc9odJXv92dm_R659d&source=gbs_api",
                                    "large": null,
                                    "extraLarge": null
                                },
                                "previewLink": "http://books.google.co.uk/books?id=o79lk6nTsRgC&hl=&source=gbs_api"
                            },
                            "accessInfo": {
                                "viewability": "PARTIAL",
                                "embeddable": true,
                                "publicDomain": false
                            }
                        },
                        "allowUpdate": true,
                        "allowDelete": true,
                        "allowComment": true
                    },
                    {
                        "createdBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "createdDateTime": [2018, 1, 28, 13, 40, 49, 654000000],
                        "lastModifiedBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "lastModifiedDateTime": [2018, 1, 28, 13, 40, 49, 654000000],
                        "id": "5a6dd2e10ac8740f4865d6f6",
                        "comments": [],
                        "title": "The Moment",
                        "author": "Douglas Kennedy",
                        "genre": "Novel",
                        "summary": "A story about an American in cold war Berlin, this book didn't do much for me. A couple of reasons maybe\na) it read as though the author saw too much of himself in the main character and that character is just a bit too unbelievable (and also too sure of himself)\nb) I didn't \"buy\" many of the characters' decisions - they seemed to make decisions to support the book's narrative rather than what they really might have done based on their characterisations up to that point.\nIt's not a bad book but I could have better spent the time in retrospect.",
                        "rating": "GREAT",
                        "googleBookId": "oPDyF8U5p-oC",
                        "googleBookDetails": {
                            "id": "oPDyF8U5p-oC",
                            "selfLink": "https://www.googleapis.com/books/v1/volumes/oPDyF8U5p-oC",
                            "volumeInfo": {
                                "title": "The Moment",
                                "subtitle": null,
                                "authors": [
                                    "Douglas Kennedy"
                                ],
                                "description": "Berlin, during the period of perestroika in the 1980s. The male protagonist is a travel writer who falls desperately in love with a beautiful East Berlin woman, Petra. Their passionate relationship is destroyed when he finds out that Petra is a Stasi agent and, worse, that she has been using their relationship to gain information from him. He is devastated at such betrayal, believing that every element of their relationship had been false. \u003Cbr\u003EIt is only years later, once Petra is dead, that the narrator discovers the truth. Petra was being forced to give information to the Stasi, who were holding her son captive under threats of death. Too late he learns that the relationship was a sincere one -- the feelings were real -- and it was only Petra's fear for her son's life that led to her betrayal of her lover. But the crucial moment, when he had the choice to commit fully to her and find the truth or to walk away, has gone for ever. \u003Cbr\u003ELike Kennedy's previous highly acclaimed novels, The Moment brilliantly illustrates the irrationality of love and the crucial moments which define whole lives.",
                                "imageLinks": {
                                    "smallThumbnail": "http://books.google.com/books/content?id=oPDyF8U5p-oC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE714oTMI2RHZ4UmnF3IaBpbu9r6-GgMjUIP-dJmGirflo5Ybzs6rtfWQgqhoXlsIqBoIU4Tmniqn5RCp9tUkQMefxV7J4kmN3CkOvgZzKUNv8ThAjARMbcxC6tCcYBBjLc6U6J0p&source=gbs_api",
                                    "thumbnail": "http://books.google.com/books/content?id=oPDyF8U5p-oC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73KjpKwfxy4TyEQ8Mtkc4SVNl9X15tpqKjyL_JOX2kYnXBwPkGXlq-8voUZshv3V8QnERqxDAkXEOFc1p45BFVqdEJSuVpy6Aq5OCRHu-fZQCFvE9L7moYvNQTNzJLNPBtx9hLe&source=gbs_api",
                                    "small": "http://books.google.com/books/content?id=oPDyF8U5p-oC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE70Ne6dvbeWr0Z-SBJMxUQXrLamdxcJ0rS-s-aSRF0rzgcuLAIs0Mgt8Whg-W0ta6NDADSsD5oglRt2GKgasht4mgJxBYb9renmUEZPlJh_vHurDwa2TI51dT8TZd1JphOyE51_P&source=gbs_api",
                                    "medium": "http://books.google.com/books/content?id=oPDyF8U5p-oC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE70005x0Y1k_eDS-uCbuJewyggK7UQzzhyJlMEEClC8tm6Qcuv_EO1hSRakULe6Xn8zHVUOxluIImneNLt38iAdxXl4q8dSWXh4c-j6bWqZ3AgRt6yLnaRiNDVWXMOUGEKNwyqNj&source=gbs_api",
                                    "large": null,
                                    "extraLarge": null
                                },
                                "previewLink": "http://books.google.co.uk/books?id=oPDyF8U5p-oC&hl=&source=gbs_api"
                            },
                            "accessInfo": {
                                "viewability": "PARTIAL",
                                "embeddable": true,
                                "publicDomain": false
                            }
                        },
                        "allowUpdate": true,
                        "allowDelete": true,
                        "allowComment": true
                    },
                    {
                        "createdBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "createdDateTime": [2018, 1, 28, 13, 35, 57, 395000000],
                        "lastModifiedBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "lastModifiedDateTime": [2018, 1, 28, 13, 35, 57, 395000000],
                        "id": "5a6dd1bd0ac8740f4865d6f5",
                        "comments": [
                            {
                                "owner": {
                                    "authenticationServiceId": "1632142143498857",
                                    "firstName": "Aidan",
                                    "lastName": "Whiteley",
                                    "fullName": "Fred Bloggs",
                                    "email": null,
                                    "link": "https://www.facebook.com/app_scoped_user_id/1632142143498857/",
                                    "picture": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/27540595_1646377895408615_873932859618115488_n.jpg?oh=54666695335266abf092aad85ef9742f&oe=5B136C80",
                                    "authProvider": "FACEBOOK"
                                },
                                "id": "45359a9b-79b3-40f6-a20f-455c9468a0e6",
                                "commentText": null,
                                "entered": [2018, 2, 18, 0, 24, 35, 527000000],
                                "deleted": false,
                                "deletedBy": null,
                                "allowDelete": true
                            }
                        ],
                        "title": "The Girl Who Saved The King Of Sweden",
                        "author": "Jonas Jonasson",
                        "genre": "Novel",
                        "summary": "Another in the recent list of \"quirky Scandinavian books\", this tells the story of Nombeko following her journey from working in a secret installation near Soweto through to her adventures in Sweden.\nThe story is fun but what really makes this book is the relentless positivity of the main character which brings smiles and some laugh out louds.\nRecommended.",
                        "rating": "GREAT",
                        "googleBookId": "9N9zAgAAQBAJ",
                        "googleBookDetails": {
                            "id": "9N9zAgAAQBAJ",
                            "selfLink": "https://www.googleapis.com/books/v1/volumes/9N9zAgAAQBAJ",
                            "volumeInfo": {
                                "title": "The Girl Who Saved the King of Sweden",
                                "subtitle": "A Novel",
                                "authors": [
                                    "Jonas Jonasson",
                                    "Rachel Willson-Broyles"
                                ],
                                "description": "\u003Cp\u003EJonas Jonasson's picaresque tale of how one person's actions can have far-reaching consequences, written with the same light-hearted satirical voice as his bestselling debut novel, The 100-Year-Old Man Who Climbed Out the Window and Disappeared.\u003C/p\u003E\u003Cp\u003EOn June 14th, 2007, the King and Prime Minister of Sweden went missing from a gala banquet at the Royal Castle. Later it was said that both had fallen ill: the truth is different. The real story starts much earlier, in 1961, with the birth of Nombeko Mayeki in a shack in Soweto. Nombeko was fated to grow up fast and die early in her poverty-stricken township. But Nombeko takes a different path. She finds work as a housecleaner and eventually makes her way up to the position of chief advisor, at the helm of one of the world's most secret projects.\u003C/p\u003E\u003Cp\u003EHere is where the story merges with, then diverges from reality. South Africa developed six nuclear missiles in the 1980s, then voluntarily dismantled them in 1994. This is a story about the seventh missile . . . the one that was never supposed to have existed. Nombeko Mayeki knows too much about it, and now she's on the run from both the South African justice and the most terrifying secret service in the world. She ends up in Sweden, which has transformed into a nuclear nation, and the fate of the world now lies in Nombeko's hands.\u003C/p\u003E",
                                "imageLinks": {
                                    "smallThumbnail": "http://books.google.com/books/content?id=9N9zAgAAQBAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE71Z_BtK9DdEqeByp9udEQjdGiyE6rrhRMJC6_p55nCaWzDWpQWAAss1IFe5THeFyvFw4vcxelvLRqTAUsSTsGn4qprZF1MUhkXIXVgsOubb6LESZOC0T8FlrC4qHtUHSURyKrcV&source=gbs_api",
                                    "thumbnail": "http://books.google.com/books/content?id=9N9zAgAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72FCORT5NfYyZINUAx_S-LaWeuHTGkGt95dEa64zUrOkGcFp46lZFXtKez2FLUv6finfI41N4REK0PyLdqTbiK5OWVuoiqB4SrollbQwz-5YVLAFU7y0TMWjqoXAAVAgbd3FIWF&source=gbs_api",
                                    "small": null,
                                    "medium": null,
                                    "large": null,
                                    "extraLarge": null
                                },
                                "previewLink": "http://books.google.co.uk/books?id=9N9zAgAAQBAJ&hl=&source=gbs_api"
                            },
                            "accessInfo": {
                                "viewability": "NO_PAGES",
                                "embeddable": false,
                                "publicDomain": false
                            }
                        },
                        "allowUpdate": true,
                        "allowDelete": true,
                        "allowComment": true
                    },
                    {
                        "createdBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "createdDateTime": [2018, 1, 28, 13, 31, 21, 572000000],
                        "lastModifiedBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "lastModifiedDateTime": [2018, 1, 28, 13, 31, 21, 572000000],
                        "id": "5a6dd0a90ac8740f4865d6f4",
                        "comments": [],
                        "title": "A perfectly good man",
                        "author": "Patrick Gale",
                        "genre": "Novel",
                        "summary": "If I were to describe this as a book about a priest in a parish in Cornwall, I doubt you'd read it!\nHowever, Patrick Gale's books are beautifully written descriptions of completely believable characters and why they do what they do. You get drawn into the lives of the characters so well.\nWe've been a through a bit of a Patrick Gale phase of late.\nIf I were to recommend one PG book to start with it might be Notes From an Exhibition which would get a \"great\" versus the \"good\" for this one.",
                        "rating": "GREAT",
                        "googleBookId": "D6n0CwAAQBAJ",
                        "googleBookDetails": {
                            "id": "D6n0CwAAQBAJ",
                            "selfLink": "https://www.googleapis.com/books/v1/volumes/D6n0CwAAQBAJ",
                            "volumeInfo": {
                                "title": "A Perfectly Good Man",
                                "subtitle": "A Novel",
                                "authors": [
                                    "Patrick Gale"
                                ],
                                "description": "The bestselling British novel about love, marriage, family, secrets, and how the power of faith can transform lives even in the midst of inconsolable loss\u003Cbr\u003E After being paralyzed in a rugby accident, twenty-year-old, wheelchair-bound Lenny Barnes feels he has nothing left to live for and is putting his affairs in order before committing suicide. As lively Mazey Day celebrations take place in the Cornish town of Penzance, Lenny summons a parish priest to his home. Father Barnaby Johnson is shocked to discover that he has been called in not to comfort but to deliver last rites. Lenny's death will reverberate not only in Barnaby's life but in the lives of his family and those around them, from Barnaby's wife, Dorothy, to Modest Carlsson, a parishioner and former teacher whose affair with an underage student cost him his job, his marriage, and, quite possibly, his soul.\u003Cbr\u003E Narrated in a nonlinear style from the characters shifting perspectives and ages, this spellbinding, exquisitely crafted novel exposes the fault lines in relationships as it limns the consequences of our actions.\u003Cbr\u003E The novel that author Patrick Gale describes as an echo chamber to his international bestseller \u003Ci\u003ENotes from an Exhibition\u003C/i\u003E, \u003Ci\u003EA Perfectly Good Man\u003C/i\u003E reveals another family in crisis and asks what it truly means to be good. This Richard & Judy Book Club pick is a story of warmth, wisdom, and compassion on crises of faith, the power of prayer, morality, and what it means to be a parent.",
                                "imageLinks": {
                                    "smallThumbnail": "http://books.google.com/books/content?id=D6n0CwAAQBAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE71zR54TaPaK2Z02l5huzWsODWATvoNjcsNwT2vXYfzVyadhi-X2iemf2Jh41SF8RVx94XoSpD6vTwxirDty7H7YAXg2BSMM0Wp-XXrP6728rlTc68GUmQtx7FDJaxBWXunkRx0Y&source=gbs_api",
                                    "thumbnail": "http://books.google.com/books/content?id=D6n0CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72iK7TDWX47FpnTrKgNoMDJQICficCUDp1MIfpuHBniKyM_Anb2kL9_lLNveAPcYbd1osn7o7TE1t2g7hQomFZUpDWyVFcwCwKTGRMSnau6ANO7O1OboGGn9rksHLZDgze6oIb6&source=gbs_api",
                                    "small": null,
                                    "medium": null,
                                    "large": null,
                                    "extraLarge": null
                                },
                                "previewLink": "http://books.google.co.uk/books?id=D6n0CwAAQBAJ&hl=&source=gbs_api"
                            },
                            "accessInfo": {
                                "viewability": "NO_PAGES",
                                "embeddable": false,
                                "publicDomain": false
                            }
                        },
                        "allowUpdate": true,
                        "allowDelete": true,
                        "allowComment": true
                    },
                    {
                        "createdBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "createdDateTime": [2018, 1, 28, 13, 7, 50, 911000000],
                        "lastModifiedBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "lastModifiedDateTime": [2018, 1, 28, 13, 7, 50, 911000000],
                        "id": "5a6dcb270ac8740f4865d6f2",
                        "comments": [],
                        "title": "The Pigeon Tunnel",
                        "author": "John Le Carre",
                        "genre": "Autobiography",
                        "summary": "It's unlikely that this will be your first choice for reading unless you are a John Le Carre fan. A shame - its a good read anyway - but understandable.\nFor Le Carre fans, it's a fascinating book as Le Carre tells vignettes from his life that lead the reader towards recognizing where some of the scenes and characters in his novels have come from\nOf course, Le Carre understands that most of the readership of the book will be looking for these \"clues\" and helps the reader to understand his choices and motivations.",
                        "rating": "GREAT",
                        "googleBookId": "CSuvCgAAQBAJ",
                        "googleBookDetails": {
                            "id": "CSuvCgAAQBAJ",
                            "selfLink": "https://www.googleapis.com/books/v1/volumes/CSuvCgAAQBAJ",
                            "volumeInfo": {
                                "title": "The Pigeon Tunnel",
                                "subtitle": "Stories from My Life",
                                "authors": [
                                    "John le Carr├ö├Â┬úÔö£├é├ö├Â┬úÔö£├®├ö├Â┬╝Ôö£ÔòæÔö£├ÂÔö£├éÔö¼ÔòØ├ö├Â┬╝Ôö¼┬ó"
                                ],
                                "description": "\u003Cp\u003E\u003Cb\u003ETHE\u003Ci\u003E SUNDAY TIMES \u003C/i\u003ENUMBER ONE BESTSELLER\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Ci\u003E'Out of the secret world I once knew, I have tried to make a theatre for the larger worlds we inhabit. First comes the imagining, then the search for reality. Then back to the imagining, and to the desk where I'm sitting now.'\u003C/i\u003E \u003C/p\u003E\u003Cp\u003E From his years serving in British Intelligence during the Cold War, to a career as a writer that took him from war-torn Cambodia to Beirut on the cusp of the 1982 Israeli invasion, to Russia before and after the collapse of the Berlin Wall, John le Carre has always written from the heart of modern times. In this, his first memoir, le Carr├ö├Â┬úÔö£├é├ö├Â┬úÔö£├®├ö├Â┬╝Ôö£ÔòæÔö£├ÂÔö£├éÔö¼ÔòØ├ö├Â┬╝Ôö¼┬ó is as funny as he is incisive - reading into the events he witnesses the same moral ambiguity with which he imbues his novels. Whether he's writing about the parrot at a Beirut hotel that could perfectly mimic machine gun fire, or visiting Rwanda's museums of the unburied dead in the aftermath of the genocide, or celebrating New Year's Eve with Yasser Arafat, or interviewing a German terrorist in her desert prison in the Negev, or watching Alec Guinness preparing for his role as George Smiley, or describing the female aid worker who inspired the main character in his \u003Ci\u003EThe Constant Gardener\u003C/i\u003E, le Carr├ö├Â┬úÔö£├é├ö├Â┬úÔö£├®├ö├Â┬╝Ôö£ÔòæÔö£├ÂÔö£├éÔö¼ÔòØ├ö├Â┬╝Ôö¼┬ó endows each happening with vividness and humour, now making us laugh out loud, now inviting us to think anew about events and people we believed we understood. Best of all, le Carre gives us a glimpse of a writer's journey over more than six decades, and his own hunt for the human spark that has given so much life and heart to his fictional characters.\u003C/p\u003E\u003Cp\u003E\u003Cb\u003E'No other writer has charted - pitilessly for politicians but thrillingly for readers - the public and secret histories of his times' \u003Ci\u003EGuardian\u003C/i\u003E\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003E'John le Carre is as recognizable a writer as Dickens or Austen' \u003C/b\u003E\u003Cb\u003E\u003Ci\u003EFinancial Times\u003C/i\u003E\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003E'When I was under house arrest I was helped by the books of John le Carre ... they were a journey into the wider world ... These were the journeys that made me feel that I was not really cut off from the rest of humankind' \u003C/b\u003E\u003Cb\u003E\u003Ci\u003EAung San Suu Kyi\u003C/i\u003E\u003C/b\u003E\u003C/p\u003E",
                                "imageLinks": {
                                    "smallThumbnail": "http://books.google.com/books/content?id=CSuvCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71YJqs6coJYLFhp5KHSlRVMckj7HmMRmr9Hc_zSDWB-Z9g8smgMCV598S95BaTGrt1eVcmerv-dm4ZkvIxWylQBZIqZJgVEEYAHAWlSbZMIMK5Iv3igAahgxTo3mqI9vUMDvVWD&source=gbs_api",
                                    "thumbnail": "http://books.google.com/books/content?id=CSuvCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE711mQbsbOZOrm0p8CF1vVsh3d8P5sLnyTSxsuIjyYzccRJCq_z4z5crQmYzhSgSiONWe_Xij6HAiJmPcBrzv8j03pbexqAvuDPXOk2mU0Z7_8FJk7TK6U2TKmWtN9T1bPMJxvOg&source=gbs_api",
                                    "small": "http://books.google.com/books/content?id=CSuvCgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73-FeI_2pRXd-yiIi5xbbWauIFEDOusPGI24yHo3vgbWeEa6a1PnG7AXefqqlaxrY6uIKsdF0uA09S9ngQu38xeMoKjz55623vA-o4SnFtrgfWM2VhIgB6jceKapj8wB274-itX&source=gbs_api",
                                    "medium": "http://books.google.com/books/content?id=CSuvCgAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72q4jv8fMWm-3wBaibiuNFyLRr1pPSwjzaA15zWR2bME3Hm33xCdnVqaK2c3SFIKYWbKbcVfu5Q3JBbdxkGkGw7SyRRXSA4ORxNwe1kXwEYyRAlJVUIZrXEvbLfyYPQ_oYp8ftd&source=gbs_api",
                                    "large": "http://books.google.com/books/content?id=CSuvCgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72a57NAYFl6ag1it--NmEVwKkrONQRFERHa8SCXBkM28A05TzChODH-Bk2-w803GOJRJpDmokLHCo7bG9rz0TmG3ukmP_YCw98xbCtYPIe8rcB8vyKRiSYjZqxpECcAac4nA9d_&source=gbs_api",
                                    "extraLarge": "http://books.google.com/books/content?id=CSuvCgAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE70YyvqquGUZmaRDX5JQ0GCHvoTePmuwLz7VAWPxy47AHFY5gAitfPUP-QhGZ5u8AqTssNV68WOTRPEK7Nw-c4Xq2kzXxtPzsbC2MDG0cv-wWEf99TwtzBaNuEnKCIZP8fE1y0ZK&source=gbs_api"
                                },
                                "previewLink": "http://books.google.co.uk/books?id=CSuvCgAAQBAJ&hl=&source=gbs_api"
                            },
                            "accessInfo": {
                                "viewability": "PARTIAL",
                                "embeddable": true,
                                "publicDomain": false
                            }
                        },
                        "allowUpdate": true,
                        "allowDelete": true,
                        "allowComment": true
                    },
                    {
                        "createdBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "createdDateTime": [2018, 1, 28, 12, 48, 11, 410000000],
                        "lastModifiedBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "lastModifiedDateTime": [2018, 1, 28, 12, 48, 11, 410000000],
                        "id": "5a6dc68b0ac8741124f9c9ad",
                        "comments": [],
                        "title": "Dark Voyage",
                        "author": "Alan Furst",
                        "genre": "Spy / Thriller",
                        "summary": "What I love most about Alan Furst books is the way he evokes the feelings of fear and distrust that must have existed in so much of continental Europe in the years before and during the second world war.\nNever really about \"guns and explosions\", Alan's books are more about ordinary people doing extraordinary things because they believe them to be right.\nIf you've not read any Alan Furst before, maybe start with one of his other novels such as Red Gold or The Polish Officer.",
                        "rating": "GREAT",
                        "googleBookId": "vuZlmZyIWpgC",
                        "googleBookDetails": {
                            "id": "vuZlmZyIWpgC",
                            "selfLink": "https://www.googleapis.com/books/v1/volumes/vuZlmZyIWpgC",
                            "volumeInfo": {
                                "title": "Dark Voyage",
                                "subtitle": null,
                                "authors": [
                                    "Alan Furst"
                                ],
                                "description": "\u003Cp\u003E\u003Cb\u003EFrom the master of the wartime espionage novel; a thrilling story of subterfuge at sea\u003C/b\u003E\u003C/p\u003E\u003Cp\u003EMay 1941. At four in the morning, a rust-streaked tramp freighter steams up the Tagus river to dock at the port of Lisbon. She is the Santa Rosa, flies the flag of neutral Spain, and is in Lisbon to load cork oak, tinned sardines and drums of cooking oil bound for the Baltic port of Malmo. \u003C/p\u003E\u003Cp\u003EBut she is not the Santa Rosa. She is the Noordendam, a Dutch freighter under the command of Captain Eric DeHaan. She sails for the intelligence division of the British Royal Navy and is involved in a secret mission. On board are a Polish engineer and British spy, Spaniards who fought for Franco and Germans who fought against Hitler. For them, this is a last desperate flight to freedom.\u003C/p\u003E",
                                "imageLinks": {
                                    "smallThumbnail": "http://books.google.com/books/content?id=vuZlmZyIWpgC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE723uM-5y4boxn-V2g2c5lRpJo5THJ5u1dR-5RZB2HgYZBDNVhk5RP0X4eGftrsmGjrOwVW8mswc6tYansdoRgqwKuli5viTzK8iM0lLa4wV_SYsGTxl5IAaGFakFUGHELS_LMiK&source=gbs_api",
                                    "thumbnail": "http://books.google.com/books/content?id=vuZlmZyIWpgC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70K2CmSLqmjjGmmTr1cTDLT2IxOL_glW92rtMNk9Cah51DBJ0fwaFNg49s-LsEE9o_Q_Cs1T_I3Z5c_w4lSBm8RIHC9ZL_O8asL-_vTlyqWNgYts5RwyHPxSnsihuaj_o6bn5vw&source=gbs_api",
                                    "small": "http://books.google.com/books/content?id=vuZlmZyIWpgC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE71bd8PO2lhT7fNYgpFhs4-bk_jaj_i6E7aPmxgO-IeY-FYh52vGsnqZlEVZ8ZeLlDF188qWR9586NnNHO5OMAfXl4cCXwTALVhjU3fcw5Gi6qQ8_GMXmK-fozPGuoYJx_Ve7KiQ&source=gbs_api",
                                    "medium": "http://books.google.com/books/content?id=vuZlmZyIWpgC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE73153FzSUUXSgr3rYLrrdQdiEU9C2c8Oui_uw2qiSDn8MWhFwGuGeadAUMKfYtB69jd2byAQrFeug7LAZM5od7k-lFVC-z3NTcovBtnkuk1Lp22Bz0IXs2jpM---wP3dZksEbdx&source=gbs_api",
                                    "large": "http://books.google.com/books/content?id=vuZlmZyIWpgC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73xVKh7uopAHmyPTu_qQ7XMMsmJZdisynZu1zNbWlkGJ7m0cuPPPUZrsP2Dud9FFt0PQ2o0hyL86YGXKVpx3xtC7lzSDuDb0x5q1X8LVG14mCtOmqFF9L5pah0uGcbsvNM08E_m&source=gbs_api",
                                    "extraLarge": "http://books.google.com/books/content?id=vuZlmZyIWpgC&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE70o7sBwrZhMWlZtPq2IeSkN3LgkeQHMADHwpiBukXx6hKhJVMvjJemhPymjCk20M3x3vtyyMhSXyn7oj-wVBT44ukuEfKEeUbAeKEpt5y7MJYrzMvQlJXBZbU9CYslywDj54QN8&source=gbs_api"
                                },
                                "previewLink": "http://books.google.co.uk/books?id=vuZlmZyIWpgC&hl=&source=gbs_api"
                            },
                            "accessInfo": {
                                "viewability": "PARTIAL",
                                "embeddable": true,
                                "publicDomain": false
                            }
                        },
                        "allowUpdate": true,
                        "allowDelete": true,
                        "allowComment": true
                    },
                    {
                        "createdBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "createdDateTime": [2018, 1, 28, 12, 37, 50, 544000000],
                        "lastModifiedBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "lastModifiedDateTime": [2018, 1, 28, 12, 37, 50, 544000000],
                        "id": "5a6dc41e0ac8741124f9c9ac",
                        "comments": [],
                        "title": "The Thought Gang",
                        "author": "Tibor Fischer",
                        "genre": "Novel",
                        "summary": "First read over 20 years ago, this is one of my favourite all time books and is re-read regularly.\nAbout an overweight philosophy academic who turns to bank robbing in France, the book almost defies description.\nIt is mindspinning, thought provoking and laugh aloud funny.\nRead and loved by many of my friends twenty years ago, it is testament to its staying power that quotes from the book still regularly turn up in emails from my mate Richard.\nA zythum for Mr Fischer please!\nThen read Under The Frog next.",
                        "rating": "GREAT",
                        "googleBookId": "j4mTSm2pz9kC",
                        "googleBookDetails": {
                            "id": "j4mTSm2pz9kC",
                            "selfLink": "https://www.googleapis.com/books/v1/volumes/j4mTSm2pz9kC",
                            "volumeInfo": {
                                "title": "The Thought Gang",
                                "subtitle": null,
                                "authors": [
                                    "Tibor Fischer"
                                ],
                                "description": "The setting is France: our hero, a washed-up middle-aged British philosopher named Eddie Coffin. Broke and unsure as to his next meal, he meets Hubert, an incompetent, freshly-released, one-armed armed robber, and the \"thought gang\" is born. Applying philosophy to larceny, these unlikely bandits question the meaning of life, the value of money, and the role of banks as they wind their way from Montpellier to Toulon in search of the greatest heist in history. Unexpected and volatile, The Thought Gang is the hilarious and thought-provoking story of their travails.",
                                "imageLinks": {
                                    "smallThumbnail": "http://books.google.com/books/content?id=j4mTSm2pz9kC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73YEXM_HN7gkLR53TXtSeLqCBYPbley5QK-nZgB4t-U-XdB82bnkiWmMIwaJTq7m3mZWcD7RKrfXE_wS_iridr8SSvihzZ7uW59P3mjzbv1ZrEEA57EPK1pQ0kCz8VCzMNK-U2F&source=gbs_api",
                                    "thumbnail": "http://books.google.com/books/content?id=j4mTSm2pz9kC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70XezEDLUQnuq0oYYZYVh_Ksuw4D8baG4U7yW6DW9SoGJNKvhlqAPL4dDAEkMt4rWG-LaCi7s8a_3oVwMjC5JIVgTpdTIy5-0kzErI6_HzaS7VGtKoYuzGt1fNVDlV7eYeR_E9t&source=gbs_api",
                                    "small": "http://books.google.com/books/content?id=j4mTSm2pz9kC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72_CYguP1fIM8jg5OPecjhf9m6LhkkNBLgJnz4TbyCxnUa0gK6UnSLEIB8G57bWXm8E_nX_4e1S2_YS9FzM8QF6sgPFh5oJX70PCBVltRCSY-QmzQUr65c9Y5uPG1ieBQUKLfFA&source=gbs_api",
                                    "medium": "http://books.google.com/books/content?id=j4mTSm2pz9kC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE7192tlqN-EYhm34DviNZIjMbPzRDmiQ9XLJLWCZV-H9Cz7oIZqYHtqDRA2Rd9khuF5Efy413hvPgMWsyx5tNFDcWJdcDLNPgrVQWjJFcVR48_bNTjUZ9EyrIy0FoTOkkbdH-H90&source=gbs_api",
                                    "large": "http://books.google.com/books/content?id=j4mTSm2pz9kC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73CQK_XQxTNKbhBZx-euTCfPjGOTZN-G5ygWz9_8u8WCzqAdVweajxz1l_dSpcWgeN0caxf4niBVyirVov1eS6BDdBR1medWlCmEtv27G7NTsTK6AUngOVkcA5dPlLSXykt7VfX&source=gbs_api",
                                    "extraLarge": "http://books.google.com/books/content?id=j4mTSm2pz9kC&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE72yK2p6nbf3e7FS9p_XBcvURBS-B8D1yiFd_0DcRpFYdp58-P1nRAH9gEh__V6yTzWxaHsZASplVLrcDQBTfd0fgK3A3cyPm2JGpxKfRaPnxak67gxdMvJzI-ZAyeloA77gLNTh&source=gbs_api"
                                },
                                "previewLink": "http://books.google.co.uk/books?id=j4mTSm2pz9kC&hl=&source=gbs_api"
                            },
                            "accessInfo": {
                                "viewability": "PARTIAL",
                                "embeddable": true,
                                "publicDomain": false
                            }
                        },
                        "allowUpdate": true,
                        "allowDelete": true,
                        "allowComment": true
                    },
                    {
                        "createdBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "createdDateTime": [2018, 1, 27, 19, 19, 24, 433000000],
                        "lastModifiedBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "lastModifiedDateTime": [2018, 1, 27, 19, 19, 24, 433000000],
                        "id": "5a6dba280ac874064ce52ce5",
                        "comments": [
                            {
                                "owner": {
                                    "authenticationServiceId": "116989648358715714959",
                                    "firstName": "Cloudy",
                                    "lastName": "Bookclub",
                                    "fullName": "Cloudy Bookclub",
                                    "email": "thecloudybookclub@gmail.com",
                                    "link": null,
                                    "picture": "https://lh3.googleusercontent.com/-QAibbIG4v9E/AAAAAAAAAAI/AAAAAAAAAAg/fqJREZdqwok/photo.jpg",
                                    "authProvider": "GOOGLE"
                                },
                                "id": "98c7c1d5-eb98-47ed-a076-a6794e2f5a35",
                                "commentText": null,
                                "entered": [2018, 2, 22, 18, 27, 25, 233000000],
                                "deleted": true,
                                "deletedBy": "Cloudy Bookclub",
                                "allowDelete": true
                            }
                        ],
                        "title": "Nutshell",
                        "author": "Ian McKewan",
                        "genre": "Novel",
                        "summary": "Another great novel from Ian McKewan. A book told from a truly unique perspective!\nIt's a shortish book which is all to the good as, for me, the unique perspective was the main reason for enjoying the book and that may have waned in a longer book.",
                        "rating": "GREAT",
                        "googleBookId": "OQPdCwAAQBAJ",
                        "googleBookDetails": {
                            "id": "OQPdCwAAQBAJ",
                            "selfLink": "https://www.googleapis.com/books/v1/volumes/OQPdCwAAQBAJ",
                            "volumeInfo": {
                                "title": "Nutshell",
                                "subtitle": null,
                                "authors": [
                                    "Ian McEwan"
                                ],
                                "description": "\u003Cp\u003E\u003Cb\u003EThe \u003Ci\u003ESunday Times \u003C/i\u003ENumber One Bestseller\u003C/b\u003E\u003C/p\u003E\u003Cp\u003ETrudy has betrayed her husband, John. She's still in the marital home - a dilapidated, priceless London townhouse - but not with John. Instead, she's with his brother, the profoundly banal Claude, and the two of them have a plan. But there is a witness to their plot: the inquisitive, nine-month-old resident of Trudy's womb.\u003C/p\u003E",
                                "imageLinks": {
                                    "smallThumbnail": "http://books.google.com/books/content?id=OQPdCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70N_0sRKz8BlqFzsZXqBMwb_tX9dvat1xwnCo6RXkHB3eiZCIpM9-8A1qxpJNEC6RG5oTQt5-IotSaLX-42nMbhoBVpiJE7GBfPifw6DNK5wXRuK4-S4xl7IGrPgMKK64hf0aSv&source=gbs_api",
                                    "thumbnail": "http://books.google.com/books/content?id=OQPdCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70NmGL7E5apQjvVDFv7uecczQd_Vz4WmPHk_FEn3ipfsz_BaqdzvQxd7fLL26Twy2TsNVFbn_RPmrrlDbnFcSzWqbC0VmbAsxGceeVolNoqy_xderqedFIhVc0LsEyeFzchg_qj&source=gbs_api",
                                    "small": "http://books.google.com/books/content?id=OQPdCwAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE71J-noxypk9nZn5N9_mq4EHhZp37PNAEMCk1DKmjspQYWADzB2E6DQ59g2bzXG4IL98HTYX-GYaWcUWREAeBwj0NqTqQVxHM01SN-l1usyiwme15RYL-DKH9Cj1UnFztpvbQk2X&source=gbs_api",
                                    "medium": "http://books.google.com/books/content?id=OQPdCwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72-JY1Cq6iadS-7gb7s5015bQLhaD1M8HaiPSpXgpmNBM-vF3C3yu3q3qxdmo_JrmCLAELnj5xcAGQQxeLQ3C-hVs36emMXXUb91dMww_oDnJKZROBTtArh6QVzujrwP0_ZB9kv&source=gbs_api",
                                    "large": null,
                                    "extraLarge": null
                                },
                                "previewLink": "http://books.google.co.uk/books?id=OQPdCwAAQBAJ&hl=&source=gbs_api"
                            },
                            "accessInfo": {
                                "viewability": "PARTIAL",
                                "embeddable": true,
                                "publicDomain": false
                            }
                        },
                        "allowUpdate": true,
                        "allowDelete": true,
                        "allowComment": true
                    },
                    {
                        "createdBy": {
                            "authenticationServiceId": "107641352409228521888",
                            "firstName": "Aidan",
                            "lastName": "Whiteley",
                            "fullName": "Fred Bloggs",
                            "email": "fred.bloggs@example.com",
                            "link": "https://plus.google.com/+AidanWhiteley",
                            "picture": "https://lh6.googleusercontent.com/-tV0bZgdRS4Y/AAAAAAAAAAI/AAAAAAAAAsE/K2aQCImjvUI/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "createdDateTime": [2018, 1, 27, 19, 7, 22, 386000000],
                        "lastModifiedBy": {
                            "authenticationServiceId": "116989648358715714959",
                            "firstName": "Cloudy",
                            "lastName": "Bookclub",
                            "fullName": "Cloudy Bookclub",
                            "email": "thecloudybookclub@gmail.com",
                            "link": null,
                            "picture": "https://lh3.googleusercontent.com/-QAibbIG4v9E/AAAAAAAAAAI/AAAAAAAAAAg/fqJREZdqwok/s96-c/photo.jpg",
                            "authProvider": "GOOGLE"
                        },
                        "lastModifiedDateTime": [2018, 7, 30, 18, 18, 48, 121000000],
                        "id": "5a6dba280ac874064ce52ce4",
                        "comments": [],
                        "title": "Under a pole star",
                        "author": "Stef Penney",
                        "genre": "Adventure / romance",
                        "summary": "A story set in the Artic - mostly at the end of the 19th century - that is as much a novel of a romance as an adventure story.\nAn absorbing read that takes you to another place - both in time and distance.\nThoroughly recommended - and not just a \"girlie romance book\".\n\nAn update from Aidan",
                        "rating": "GREAT",
                        "googleBookId": "mM8qDwAAQBAJ",
                        "googleBookDetails": {
                            "id": "mM8qDwAAQBAJ",
                            "selfLink": "https://www.googleapis.com/books/v1/volumes/mM8qDwAAQBAJ",
                            "volumeInfo": {
                                "title": "Under a Pole Star",
                                "subtitle": null,
                                "authors": [
                                    "Stef Penney"
                                ],
                                "description": "A whaler's daughter, Flora Mackie first crossed the Arctic Circle at the age of twelve, falling in love with the cold and unforgiving terrain and forging lifelong bonds with the Inuit people who have carved out an existence on its icy plains. She sets out to become a scientist and polar explorer, despite those who believe that a young woman has no place in this harsh world, and in 1892, her determination leads her back to northern Greenland at the head of a British expedition.\u003Cbr\u003E\u003Cbr\u003EYearning for wider horizons, American geologist Jakob de Beyn joins a rival expedition led by the furiously driven Lester Armitage. When the path of Flora's expedition crosses theirs, the three lives become intertwined. All are obsessed with the north, a place of violent extremes: perpetual night and endless day; frozen seas and coastal meadows; heroism and selfishness. Armitage's ruthless desire to be the undisputed leader of polar discovery sets in motion a chain of events whose tragic outcomes--both for his team of scientists and the indigenous people of Greenland--will reverberate for years to come.\u003Cbr\u003E\u003Cbr\u003ESet against the stark, timeless beauty of northern Greenland and fin-de-siecle New York and London, \u003Ci\u003EUnder a Pole Star \u003C/i\u003Eis a compelling look at the dark side of the golden age of exploration, a study of the corrosive power of ambition, and an epic, incendiary love story. It shows that sometimes you have to travel to the farthest edge of the world in order to find your true place in it.",
                                "imageLinks": {
                                    "smallThumbnail": "http://books.google.com/books/content?id=mM8qDwAAQBAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE72CpShK6MCokgfV89AO5Ih0fU3P2Rss24IrlalwWqB3tl7K3n6law7B-98ViCSR2cwHGtTQHwvd0DbluQov9NhU3t9HztRur5S9tHn1EKuhde6sNI8otciZCBmSaGqyN3UGPBMw&source=gbs_api",
                                    "thumbnail": "http://books.google.com/books/content?id=mM8qDwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70vLGRRdewon1z4QaZ8qg341RnRtlYrktwYJnwbj4ZyeInAvqLBw3kBT3yizPIN60Yfc0uxjiIyWYkOcTvUlUoRxswAz-Bl7gWWYFk86A6CYuSaH4_1b6eOfJZE4IOyq8Mc-U0B&source=gbs_api",
                                    "small": null,
                                    "medium": null,
                                    "large": null,
                                    "extraLarge": null
                                },
                                "previewLink": "http://books.google.co.uk/books?id=mM8qDwAAQBAJ&hl=&source=gbs_api"
                            },
                            "accessInfo": {
                                "viewability": "NO_PAGES",
                                "embeddable": false,
                                "publicDomain": false
                            }
                        },
                        "allowUpdate": true,
                        "allowDelete": true,
                        "allowComment": true
                    }
                ],
                "page": {
                    "size": 30,
                    "number": 0,
                    "totalElements": 10,
                    "totalPages": 1
                }
            }



        )
    }),
]