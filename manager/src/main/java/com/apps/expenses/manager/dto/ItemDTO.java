package com.apps.expenses.manager.dto;

import com.apps.expenses.manager.enums.ItemType;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

import java.math.BigDecimal;

public class ItemDTO {
    @NotBlank(message = "Description field is required.")
    private String description;

    @Min(1)
    private BigDecimal amount;

    @NotBlank(message = "Item type field is required.")
    private ItemType type;

    public ItemDTO() {
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public ItemType getType() {
        return type;
    }

    public void setType(ItemType type) {
        this.type = type;
    }
}
