package com.atuandev.identity.mapper;

import org.mapstruct.Mapper;

import com.atuandev.identity.dto.request.PermissionRequest;
import com.atuandev.identity.dto.response.PermissionResponse;
import com.atuandev.identity.entity.Permission;

@Mapper(componentModel = "spring")
public interface PermissionMapper {
    Permission toPermission(PermissionRequest request);

    PermissionResponse toPermissionResponse(Permission permission);
}
