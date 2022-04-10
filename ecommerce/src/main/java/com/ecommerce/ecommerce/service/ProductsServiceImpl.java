package com.ecommerce.ecommerce.service;

import com.ecommerce.ecommerce.model.Products;
import com.ecommerce.ecommerce.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductsServiceImpl implements ProductsService {

    private final ProductsRepository productRepository;

    @Autowired
    public ProductsServiceImpl(ProductsRepository productRepository){
        this.productRepository = productRepository;
    }

    @Override
    public void salvar(Products product) {
        productRepository.save(product);
    }

    @Override
    public List<Products> buscarTodos() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Products> buscarPorId(Integer id) {
        return productRepository.findById(id);
    }

    @Override
    public void excluir(Integer id) {
        productRepository.deleteById(id);
    }
}
