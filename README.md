# Notes #

1. in server side app, set 
   `postLogonUrl: http://localhost:5173/?logged-on=y`



2. Better error message for 500 (when server is down)

3. Change serverside book search to be
https://www.googleapis.com/books/v1/volumes?q=+intitle:flowers%20for%20algernon+inauthor:daniel%20keyes


    @GetMapping(value = {"/googlebooks", "googlebooks/"}, params = {"title", "author"})
    public BookSearchResult findGoogleBooksByTitleAndAuthor(@RequestParam String title, @RequestParam String author) {
        return googleBooksDaoSync.searchGoogBooksByTitleAndAuthor(title, author);
    }


    public BookSearchResult searchGoogBooksByTitleAndAuthor(String title, String author) {

        String encodedTitle = URLEncoder.encode(title, StandardCharsets.UTF_8);
        String encodedAuthor = URLEncoder.encode(author, StandardCharsets.UTF_8);

        googleBooksRestTemplate.getMessageConverters().add(0,
                new StringHttpMessageConverter(StandardCharsets.UTF_8));

        final String searchString = googleBooksApiConfig.getSearchUrl() + "+intitle: " + encodedTitle +
                "+inauthor:" + author + "&" + googleBooksApiConfig.getCountryCode() +
                "&" + googleBooksApiConfig.getMaxResults();

   @Test
   void findByTitleAndAuthor() {

   Wire mock file
   {
  "request" : {
    "url" : "/books/v1/volumes?q=+intitle:Design+Patterns+inauthor:Gamma&country=GB&maxResults=30",
    "method" : "GET"
  },

Fix the use of "localhost:9000" in the live RSS feed


                Book mergedBook = mergeUpdatesOntoExistingBook(currentBookState, book);
                bookRepository.save(mergedBook);


    private Book mergeUpdatesOntoExistingBook(Book currentBookState, Book book) {

        // Set the fields the owner / admin is allowed to manually update
        currentBookState.setSummary(book.getSummary());
        currentBookState.setGenre(book.getGenre());
        currentBookState.setTitle(book.getTitle());
        currentBookState.setSummary(book.getSummary());
        currentBookState.setGoogleBookId(book.getGoogleBookId());
        currentBookState.setRating(book.getRating());
        currentBookState.setAuthor(book.getAuthor());

        return currentBookState;
    }

