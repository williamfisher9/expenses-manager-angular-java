package com.apps.expenses.manager.model;

import com.apps.expenses.manager.enums.ItemType;
import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "expense_items")
public class Item implements Serializable {
    @Serial
    private static final long serialVersionUID = -92819L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String description;

    @Enumerated(EnumType.STRING)
    private ItemType type;

    private BigDecimal amount;

    public Item() {
    }

    public Item(String description, ItemType type, BigDecimal amount) {
        this.description = description;
        this.type = type;
        this.amount = amount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ItemType getType() {
        return type;
    }

    public void setType(ItemType type) {
        this.type = type;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Item item = (Item) o;
        return Objects.equals(id, item.id) && Objects.equals(description, item.description) && type == item.type && Objects.equals(amount, item.amount);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, type, amount);
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", type=" + type +
                ", amount=" + amount +
                '}';
    }
}
