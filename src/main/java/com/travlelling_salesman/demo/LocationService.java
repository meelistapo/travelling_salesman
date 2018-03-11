package com.travlelling_salesman.demo;

import java.util.List;

public interface LocationService {
    Location create(Location location);

    Location findById(Long id);

    Location delete(Long id);

    List<Location> findAll();
}
