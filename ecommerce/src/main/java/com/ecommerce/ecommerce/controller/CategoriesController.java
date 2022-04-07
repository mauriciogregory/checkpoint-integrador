package com.ecommerce.ecommerce.controller;

import com.ecommerce.ecommerce.model.Categories;
import com.ecommerce.ecommerce.service.CategoriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;


@RestController
@RequestMapping("/categories")
public class CategoriesController {
    private CategoriesService categoriesService;

    @Autowired
    public CategoriesController(CategoriesService categoriesService){
        this.categoriesService = categoriesService;
    }

    @GetMapping
    public ResponseEntity<List<Categories>> buscarTodos(){
        return ResponseEntity.ok(categoriesService.buscarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categories> buscarPorId(@PathVariable Integer id){
        return ResponseEntity.ok(categoriesService.buscarPorId(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria não encontrada!")
        ));
    }

    @PostMapping
    public ResponseEntity<Categories> salvarCategoria(@RequestBody Categories categories){
        return ResponseEntity.ok(categoriesService.salvar(categories));


    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> excluir(@PathVariable Integer id){
        ResponseEntity<String> responseEntity = null;

        if(categoriesService.buscarPorId(id).isPresent()){
            categoriesService.excluir(id);
            responseEntity = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Categoria Excluída!");
        } else {
            responseEntity = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return responseEntity;
    }


    @PutMapping("/{id}")
    public ResponseEntity<String> atualizar(@PathVariable Integer id, @RequestBody Categories categories){
        ResponseEntity<String> responseEntity = null;

        if(categoriesService.buscarPorId(id).isPresent()){
            categories.setId(id);
            categoriesService.salvar(categories);
            responseEntity = new ResponseEntity<>(HttpStatus.OK);
        } else {
            responseEntity = ResponseEntity.status(HttpStatus.NOT_FOUND).body("Categoria não encontrada!");

        }
        return responseEntity;
    }

}
