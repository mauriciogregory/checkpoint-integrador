package com.ecommerce.ecommerce.util;

import com.ecommerce.ecommerce.model.Categories;
import com.ecommerce.ecommerce.model.Products;
import com.ecommerce.ecommerce.repository.CategoriesRepository;
import com.ecommerce.ecommerce.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Seeding implements ApplicationRunner {

    private ProductsRepository productsRepository;
    private CategoriesRepository categoriesRepository;

    @Autowired
    public Seeding(ProductsRepository productsRepository, CategoriesRepository categoriesRepository){
        this.productsRepository = productsRepository;
        this.categoriesRepository = categoriesRepository;
    }

    public void run(ApplicationArguments args) {
        Categories cat1 = new Categories("Cordas");
        Categories cat2 = new Categories("Percussão");
        Categories cat3 = new Categories("Sopro");
        Categories cat4 = new Categories("Teclas");

        categoriesRepository.save(cat1);
        categoriesRepository.save(cat2);
        categoriesRepository.save(cat3);
        categoriesRepository.save(cat4);

        Products prod1 = new Products("Guitarra","Gibson classic verniz", 5000.0,"https://imgs.casasbahia.com.br/1514112000/1xg.jpg",cat1);
        Products prod2 = new Products("Violão", "GIANNINI N-14Bk Violão Acústico Preto", 312.21, "https://m.media-amazon.com/images/I/419CgWR0hkL._AC_.jpg",cat1);
        Products prod3 = new Products("Bateria", "Bateria Acústica 2 Tons ESL Prata NY F1rst", 2.289, "https://m.media-amazon.com/images/I/61opBmhlcqL._AC_SX679_.jpg",cat2);
        Products prod4 = new Products("Clarinete", "Baquelite 17 Chave B ♭ Chapeamento de Níquel Soprano", 589.00, "https://m.media-amazon.com/images/I/21taTbkiPOL._AC_US40_.jpg",cat3);
        Products prod5 = new Products("Ukulele", "Ukulele Soprano", 378.00, "https://m.media-amazon.com/images/I/61LhvZallaL._AC_SX679_.jpg",cat1);
        Products prod6 = new Products("Piano", "Piano Digital Alesis Virtue 88 teclas com pedais, suporte e banco ajustável", 5.100, "https://m.media-amazon.com/images/I/61lbv4V2lPS._AC_SX679_.jpg", cat4);
        Products prod7 = new Products("Teclado", "TECLADO PIANO MUSICAL ELETRÔNICO YAMAHA PSS-F30", 533.83, "https://m.media-amazon.com/images/I/61OBGRe1dWS._AC_SX679_.jpg",cat4);

        productsRepository.save(prod1);
        productsRepository.save(prod2);
        productsRepository.save(prod3);
        productsRepository.save(prod4);
        productsRepository.save(prod5);
        productsRepository.save(prod6);
        productsRepository.save(prod7);

    }
}