package com.ecommerce.ecommerce.DTO;

import com.ecommerce.ecommerce.model.Categories;

public class ProductsDTO {


    private String title;
    private String description;
    private Double price;
    private String image;
    private Categories categories;

    public ProductsDTO() {
    }

    public ProductsDTO(String title, String description, Double price, String image, Categories categories) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
        this.categories = categories;
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

    public Categories getCategories() {
        return categories;
    }

    public void setCategories(Categories categories) {
        this.categories = categories;
    }
}
