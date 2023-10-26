package com.example.servertest2.web.req.product;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class ReqSave {
  @NotBlank
  @Size(min = 1, max = 10)
  private String pname;

  @NotNull
  @Positive   //양수
  @Max(value = 1000, message = "최대값은 1000초과 불과")
  private Long quantity;

  @NotNull
  @Positive
  @Min(100)
  @Max(1000000)
  private Long price;
}
