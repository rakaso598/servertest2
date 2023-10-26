package com.example.servertest2.domain.dao;

import com.example.servertest2.domain.dao.entity.Product;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class MyRowMapper implements RowMapper<Product> {
  @Override
  public Product mapRow(ResultSet resultSet, int rowNum) throws SQLException {
    Product product = new Product();
    product.setPid(resultSet.getLong("pid"));
    product.setPname(resultSet.getString("pname"));
    product.setQuantity(resultSet.getLong("quantity"));
    product.setPrice(resultSet.getLong("price"));

    return product;
  }
}
