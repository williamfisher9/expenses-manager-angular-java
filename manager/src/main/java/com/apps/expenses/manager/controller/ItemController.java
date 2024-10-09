package com.apps.expenses.manager.controller;

import com.apps.expenses.manager.model.Item;
import com.apps.expenses.manager.service.ItemService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/expenses")
public class ItemController {
    private final ItemService service;

    @Autowired
    public ItemController(ItemService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Map<String, Object>> getItems(){
        Map<String, Object> result = new HashMap<>();
        List<Item> items = service.getItems();
        result.put("result", items);
        result.put("status", 200);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, path = "{id}")
    public ResponseEntity<Map<String, Object>> getItemById(@PathVariable("id") long id){
        Map<String, Object> result = new HashMap<>();
        result.put("result", service.getItemById(id));
        result.put("status", 200);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "{id}")
    public ResponseEntity<Map<String, Object>> deleteItemById(@PathVariable("id") long id){
        Map<String, Object> result = new HashMap<>();
        result.put("result", service.deleteItemById(id));
        result.put("status", 200);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Map<String, Object>> createItem(@Valid @RequestBody Item item){
        Map<String, Object> result = new HashMap<>();
        result.put("result", service.createItem(item));
        result.put("status", 200);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<Map<String, Object>> updateItem(@Valid @RequestBody Item item){
        System.out.println(item.getId());
        Map<String, Object> result = new HashMap<>();
        result.put("result", service.updateItem(item));
        result.put("status", 200);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
