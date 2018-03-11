package com.travlelling_salesman.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/"})
public class Controller {

    @Autowired
    private final LocationRepository locationRepository;
    private final LocationService locationService;

    @Autowired
    Controller(LocationRepository locationRepository, LocationService locationService) {
        this.locationRepository = locationRepository;
        this.locationService = locationService;

    }
    @GetMapping
    public List<Location> findAll(){
        return this.locationService.findAll();
    }

    @PostMapping
    public Location create(@RequestBody Location location){
        return locationService.create(location);
    }


}
