package com.ecommerce.ecommerce.service;

import com.ecommerce.ecommerce.model.Categories;
import com.ecommerce.ecommerce.model.Products;
import com.ecommerce.ecommerce.repository.CategoriesRepository;
import com.ecommerce.ecommerce.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductsService {

    ProductsRepository productRepository;
    CategoriesRepository categoriesRepository;

    @Autowired
    public ProductsService(ProductsRepository productRepository, CategoriesRepository categoriesRepository){
        this.productRepository = productRepository;
        this.categoriesRepository = categoriesRepository;
    }


    public Products salvarProduct(Products product) {
        return productRepository.save(product);
    }


    public List<Products> buscarTodos() {
        return productRepository.findAll();
    }


    public Optional<Products> buscarPorId(Integer id) {
        return productRepository.findById(id);
    }

    public void excluir(Integer id) {
        productRepository.deleteById(id);
    }
}
