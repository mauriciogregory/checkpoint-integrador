package com.ecommerce.ecommerce.controller;

import com.ecommerce.ecommerce.model.Products;
import com.ecommerce.ecommerce.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import static org.springframework.http.HttpStatus.*;

import java.util.List;

@Service
@RestController
@RequestMapping("/products")
public class ProductsController {

    private final ProductsService productService;

    @Autowired
    public ProductsController(ProductsService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<Products>> buscarTodos() {
        return ResponseEntity.ok(productService.buscarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Products> buscarPorId(@PathVariable Integer id){

        return ResponseEntity.ok(productService.buscarPorId(id).orElseThrow(
                ()-> new ResponseStatusException(NOT_FOUND, "Jogador não encontrado")
        ));
    }

    @PostMapping
    public ResponseEntity<?> salvarJogador(@RequestBody Products product) {
        productService.salvar(product);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> excluir(@PathVariable Integer id) {

        ResponseEntity<String> responseEntity = null;

        if(productService.buscarPorId(id).isPresent()) {
            productService.excluir(id);
            responseEntity = ResponseEntity.status(NO_CONTENT).body("Excluído");
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
            productService.salvar(product);
            responseEntity = new ResponseEntity<>(OK);
        } else {
            responseEntity = ResponseEntity.status(NOT_FOUND).body("Not_Found");
        }

        return responseEntity;
    }
}
