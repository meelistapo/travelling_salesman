package com.travelling_salesman.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/api")
@RestController
public class Controller {

    @Autowired
    private LocationService locationService;

    @GetMapping("/locations")
    public List<Location> findAll(){
        return this.locationService.findAll();
    }
    @PostMapping("/add")
    public Location create(@RequestBody Location location){
        return locationService.create(location);
    }


}
