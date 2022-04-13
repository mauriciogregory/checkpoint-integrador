package com.ecommerce.ecommerce.service;

import com.ecommerce.ecommerce.DTO.ProductsDTO;
import com.ecommerce.ecommerce.entities.Products;
import com.ecommerce.ecommerce.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductsService {

    @Autowired
    private ProductsRepository productRepository;

    @Transactional(readOnly = true)
    public Page<ProductsDTO> buscarTodos(PageRequest pageRequest){

        Page<Products> result = productRepository.findAll(pageRequest);
        Page<ProductsDTO> page = result.map(ProductsDTO::new);
        return page;
}
}
