package com.ecommerce.ecommerce.repository;

import com.ecommerce.ecommerce.model.Categories;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriesRepository extends JpaRepository<Categories, Integer> {
}
