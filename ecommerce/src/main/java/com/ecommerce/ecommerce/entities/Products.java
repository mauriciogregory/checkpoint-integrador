package com.ecommerce.ecommerce.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table (name = "products")
public class Products implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    private Integer id;
    private String title;
    private String description;
    private Double price;
    private String image;

    @ManyToMany // fetch type lazy default
    @JoinTable(name = "productcategory",  // cria tabela N > N
        joinColumns = @JoinColumn(name = "id_product"),
            inverseJoinColumns = @JoinColumn(name = "id_category")
    )

    Set<Categories> categories =new HashSet<>();

    public Products() {
    }

    public Products(Integer id, String title, String description, Double price, String image, Set<Categories> categories) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
        this.categories = categories;
    }

    public Products(String title, String description, Double price, String image, Set<Categories> categories) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
        this.categories = categories;
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

    public Set<Categories> getCategories() {
        return categories;
    }

//    public void setCategories(Set<Categories> categories) {
//        this.categories = categories;
//    }

    @Override
    public String toString() {
        return "Products{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", image='" + image + '\'' +
                ", categories=" + categories +
                '}';
    }
}
