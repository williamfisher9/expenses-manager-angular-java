package com.apps.expenses.manager.service;

import com.apps.expenses.manager.dao.ItemRepository;
import com.apps.expenses.manager.exceptions.RecordNotFoundException;
import com.apps.expenses.manager.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class ItemServiceImpl implements ItemService{

    private final ItemRepository repository;

    @Autowired
    public ItemServiceImpl(ItemRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Item> getItems() {
        return repository.findAll();
    }

    @Override
    public Item getItemById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException("ID " + id + " was not found!"));
    }

    @Override
    public boolean deleteItemById(Long id) {
        Item item = repository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException("ID " + id + " was not found!"));

        if(item != null){
            repository.delete(item);
            return true;
        }

        return false;
    }

    @Override
    public Item createItem(Item item) {
        return repository.save(item);
    }

    @Override
    public Item updateItem(Item item) {
        return repository.save(item);
    }
}
