package com.ecommerce.ecommerce.DTO;

public class CategoriesDTO {
    private String nome;

    public CategoriesDTO(){
    }

    public CategoriesDTO(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome){
        this.nome =nome;
    }
}
