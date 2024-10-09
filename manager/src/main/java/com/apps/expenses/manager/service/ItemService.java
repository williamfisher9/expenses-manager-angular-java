package com.apps.expenses.manager.service;

import com.apps.expenses.manager.model.Item;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ItemService {
    List<Item> getItems();
    Item getItemById(Long id);
    boolean deleteItemById(Long id);
    Item createItem(Item item);
    Item updateItem(Item item);
}
