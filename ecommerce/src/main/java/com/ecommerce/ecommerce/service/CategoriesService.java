package com.ecommerce.ecommerce.service;

import com.ecommerce.ecommerce.DTO.CategoriesDTO;
import com.ecommerce.ecommerce.model.Categories;
import com.ecommerce.ecommerce.repository.CategoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import javax.management.AttributeNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class CategoriesService {

    @Autowired
    private CategoriesRepository categoriesRepository;


    public Page<CategoriesDTO> buscarTodos(Pageable pageable) {
        return categoriesRepository.findAll(pageable).map(CategoriesDTO::new);
    }

    @Transactional
    public CategoriesDTO buscarPorId(Integer id){
        Optional<Categories> categoryOptional = categoriesRepository.findById(id);
        Categories categories = categoryOptional.orElseThrow(() -> new EntitieNotFound("Entidade não encontrada!"));
        return new CategoriesDTO(categories);
    }
}
