package com.ecommerce.ecommerce.controller;

import com.ecommerce.ecommerce.DTO.CategoriesDTO;
import com.ecommerce.ecommerce.model.Categories;
import com.ecommerce.ecommerce.service.CategoriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;


@RestController
@RequestMapping("/categories")
public class CategoriesController {

    @Autowired
    private CategoriesService categoryService;

    @GetMapping
    public ResponseEntity<Page<CategoriesDTO>> findAll(
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "size", defaultValue = "3") Integer size){
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<CategoriesDTO> list = categoryService.buscarTodos(pageRequest);
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CategoriesDTO> findById(@PathVariable Integer id) throws Exception {
        CategoriesDTO obj = categoryService.buscarPorId(id);
        return ResponseEntity.ok().body(obj);
    }

}
