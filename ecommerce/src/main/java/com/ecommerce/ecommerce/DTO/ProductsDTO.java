package com.ecommerce.ecommerce.DTO;

import com.ecommerce.ecommerce.model.Products;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ProductsDTO {

    private Integer id;
    private String title;
    private String description;
    private Double price;
    private String image;

    private List<CategoriesDTO> categories = new ArrayList<>();

    public ProductsDTO() {
    }

    public ProductsDTO(Integer id, String title, String description, Double price, String image, List<CategoriesDTO> categories) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
        this.categories = categories;
    }

    public ProductsDTO(Products products) {
        id = products.getId();
        title = products.getTitle();
        description = products.getDescription();
        price = products.getPrice();
        image = products.getImage();
        categories = products.getCategories().stream().map(
                x -> new CategoriesDTO(x)).collect(Collectors.toList());
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<CategoriesDTO> getCategories() {
        return categories;
    }

    public void setCategories(List<CategoriesDTO> categories) {
        this.categories = categories;
    }
}