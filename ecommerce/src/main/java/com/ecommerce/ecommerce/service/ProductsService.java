package com.ecommerce.ecommerce.service;

import com.ecommerce.ecommerce.model.Products;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface ProductsService {
    void salvar(Products product);
    List<Products> buscarTodos();
    Optional<Products> buscarPorId(Integer id);
    void excluir(Integer id);
}
