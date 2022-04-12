package com.ecommerce.ecommerce.controller;

import com.ecommerce.ecommerce.DTO.ProductsDTO;
import com.ecommerce.ecommerce.model.Categories;
import com.ecommerce.ecommerce.model.Products;
import com.ecommerce.ecommerce.service.CategoriesService;
import com.ecommerce.ecommerce.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import static org.springframework.http.HttpStatus.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/products")
public class ProductsController {

    @Autowired
    private ProductsService productService;

    @GetMapping
    public ResponseEntity<Page<ProductsDTO>> findAll(@RequestParam( value = "page", defaultValue = "0") Integer page,
                                                     @RequestParam(value = "size", defaultValue = "5") Integer size){

        PageRequest pageRequest = PageRequest.of(page, size);
        Page<ProductsDTO> productDTOS = productService.buscarTodos(pageRequest);
        return ResponseEntity.ok(productDTOS);
    }
}
