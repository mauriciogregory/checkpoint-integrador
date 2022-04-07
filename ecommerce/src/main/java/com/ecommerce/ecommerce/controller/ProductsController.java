package com.ecommerce.ecommerce.controller;

import com.ecommerce.ecommerce.model.Products;
import com.ecommerce.ecommerce.service.CategoriesService;
import com.ecommerce.ecommerce.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import static org.springframework.http.HttpStatus.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductsController {

    private ProductsService productService;
    private CategoriesService categoriesService;

    @Autowired
    public ProductsController(ProductsService productService, CategoriesService categoriesService) {
        this.productService = productService;
        this.categoriesService = categoriesService;
    }

    @GetMapping
    public ResponseEntity<List<Products>> buscarTodos() {
        return ResponseEntity.ok(productService.buscarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Products> buscarPorId(@PathVariable Integer id){

        return ResponseEntity.ok(productService.buscarPorId(id).orElseThrow(
                ()-> new ResponseStatusException(NOT_FOUND, "Produto não encontrado")
        ));
    }

    @PostMapping
    public ResponseEntity<Products> salvarProduto(@RequestBody Products product) {
        categoriesService.salvar(product.getCategories());

        return ResponseEntity.ok(productService.salvarProduct(product));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> excluir(@PathVariable Integer id) {

        ResponseEntity<String> responseEntity = null;

        if(productService.buscarPorId(id).isPresent()) {
            productService.excluir(id);
            responseEntity = ResponseEntity.status(NO_CONTENT).body("Produto Excluído");
        } else {
            responseEntity = ResponseEntity.status(NOT_FOUND).build();
        }

        return responseEntity;
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> atualizar(@PathVariable Integer id, @RequestBody Products product) {

        ResponseEntity<String> responseEntity = null;

        if(productService.buscarPorId(id).isPresent()) {
            product.setId(id);
            productService.salvarProduct(product);
            responseEntity = new ResponseEntity<>(OK);
        } else {
            responseEntity = ResponseEntity.status(NOT_FOUND).body("Produto não encontrado!");
        }

        return responseEntity;
    }
}
