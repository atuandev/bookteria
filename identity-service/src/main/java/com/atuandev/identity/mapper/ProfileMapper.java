package com.atuandev.identity.mapper;

import com.atuandev.identity.dto.request.ProfileCreationRequest;
import com.atuandev.identity.dto.request.UserCreationRequest;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProfileMapper {
    ProfileCreationRequest toProfileCreationRequest(UserCreationRequest request);
}
