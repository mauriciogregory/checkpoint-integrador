package com.ecommerce.ecommerce.service;

import com.ecommerce.ecommerce.model.Categories;
import com.ecommerce.ecommerce.repository.CategoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriesService {

    CategoriesRepository categoriesRepository;

    @Autowired
    public CategoriesService(CategoriesRepository categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }


    public Categories salvar(Categories categories) {
        return categoriesRepository.save(categories);
    }


    public List<Categories> buscarTodos() {
        return categoriesRepository.findAll();
    }


    public Optional<Categories> buscarPorId(Integer id) {
        return categoriesRepository.findById(id);
    }

    public Categories atualizarCategoria(Categories categories){ return categoriesRepository.save(categories);}

    public void excluir(Integer id){
        categoriesRepository.deleteById(id);
    }
}
