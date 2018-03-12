package com.travelling_salesman.demo;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface LocationRepository extends CrudRepository<Location,Long> {

    void delete(Location location);

    List<Location> findAll();

    Optional<Location> findById(Long id);
}
