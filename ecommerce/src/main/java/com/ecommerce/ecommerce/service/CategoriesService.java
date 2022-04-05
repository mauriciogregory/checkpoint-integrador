package com.ecommerce.ecommerce.service;

import com.ecommerce.ecommerce.model.Categories;

import java.util.List;
import java.util.Optional;

public interface CategoriesService {
    void salvar(Categories categories);
    List<Categories> buscarTodas();
    Optional<Categories> buscarPorId(Integer id);
    void excluir(Integer id); // só pode excluir uma categorie se estiver vazia
}
