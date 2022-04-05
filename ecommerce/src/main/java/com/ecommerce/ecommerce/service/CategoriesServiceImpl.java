package com.ecommerce.ecommerce.service;

import com.ecommerce.ecommerce.model.Categories;
import com.ecommerce.ecommerce.repository.CategoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriesServiceImpl implements CategoriesService{
    private  final CategoriesRepository categoriesRepository;

    @Autowired
    public CategoriesServiceImpl(CategoriesRepository categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    @Override
    public void salvar(Categories categories) {
        categoriesRepository.save(categories);
    }

    @Override
    public List<Categories> buscarTodos() {
        return categoriesRepository.findAll();
    }

    @Override
    public Optional<Categories> buscarPorId(Integer id) {
        return categoriesRepository.findById(id);
    }

    @Override
    public void excluir(Integer id){
        categoriesRepository.deleteById(id);
    }
}
