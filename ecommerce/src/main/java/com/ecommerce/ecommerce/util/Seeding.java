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
        this.categoriesRepository =categoriesRepository;
    }

    public void run(ApplicationArguments args){
        Categories cat1 = new Categories("Percussão");
        Products prod = new Products("Bateria Acústica Premium DX722 Bumbo 22","Bateria com pratos de alta tecnologia, para iniciantes.", 2000.0, "www.imagem.com", cat1);

        Categories cat2 = new Categories("Sopro");
        Products prod1 = new Products("Flauta","Instrumento de ótima qualidade", 800.0, "www.imagem.com", cat2);

        Categories cat3 = new Categories("Corda");
        Products prod2 = new Products("Violão", "GIANNINI N-14Bk Violão Acústico Preto", 312.21, "https://m.media-amazon.com/images/I/419CgWR0hkL._AC_.jpg" , cat3);

        categoriesRepository.save(cat1);
        categoriesRepository.save(cat2);
        categoriesRepository.save(cat3);
//        categoriesRepository.save(cat4);
        productsRepository.save(prod);
        productsRepository.save(prod1);
        productsRepository.save(prod2);
    }

}