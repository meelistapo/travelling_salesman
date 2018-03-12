package com.travelling_salesman.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImpl implements LocationService{
    @Autowired
    private LocationRepository locationRepository;

    @Override
    public Location create(Location location) {
        return locationRepository.save(location);
    }

    @Override
    public Location findById(Long id){
        return locationRepository.findById(id).orElseThrow(NullPointerException::new);
    }

    @Override
    public Location delete(Long id) {
        Location location = locationRepository.findById(id).orElseThrow(NullPointerException::new);
        locationRepository.delete(location);
        return location;
    }

    @Override
    public List<Location> findAll() {
        return locationRepository.findAll();
    }

}
