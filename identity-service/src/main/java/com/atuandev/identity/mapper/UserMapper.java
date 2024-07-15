package com.atuandev.identity.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import com.atuandev.identity.dto.request.UserCreationRequest;
import com.atuandev.identity.dto.request.UserUpdateRequest;
import com.atuandev.identity.dto.response.UserResponse;
import com.atuandev.identity.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserCreationRequest request);
    UserResponse toUserResponse(User user);

    @Mapping(target = "roles", ignore = true)
    void updateUser(@MappingTarget User user, UserUpdateRequest request);
}
