package com.example.SpringBootBook;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookDAO bookDAO;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookDAO.getAllBooks();
    }

    @PostMapping
    public String addBook(@RequestBody Book book) {
        bookDAO.addBook(book);
        return "Book added successfully!";
    }

}
