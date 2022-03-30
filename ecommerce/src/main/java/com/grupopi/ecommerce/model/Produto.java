package com.grupopi.ecommerce.model;

public class Produto {
    private Integer id;
    private String titulo;
    private Double preco;
    private String imagem;
    private String descricao;

    public Produto() {}

    public Produto(String titulo, Double preco, String imagem, String descricao) {
        this.titulo = titulo;
        this.preco = preco;
        this.imagem = imagem;
        this.descricao = descricao;
    }

    public Produto(Integer id, String titulo, Double preco, String imagem, String descricao) {
        this.id = id;
        this.titulo = titulo;
        this.preco = preco;
        this.imagem = imagem;
        this.descricao = descricao;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    @Override
    public String toString() {
        return "Produto{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", preco=" + preco +
                ", imagem='" + imagem + '\'' +
                ", descricao='" + descricao + '\'' +
                '}';
    }
}
