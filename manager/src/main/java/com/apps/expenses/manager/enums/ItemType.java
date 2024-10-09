package com.apps.expenses.manager.enums;

public enum ItemType {
    EXP("Expense", 1), INC("Income", 2);

    private String name;
    private int code;

    ItemType(String name, int code) {
        this.name = name;
        this.code = code;
    }
}
