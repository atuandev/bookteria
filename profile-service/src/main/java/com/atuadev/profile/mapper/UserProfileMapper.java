package com.atuadev.profile.mapper;

import com.atuadev.profile.dto.request.ProfileCreationRequest;
import com.atuadev.profile.dto.response.UserProfileResponse;
import com.atuadev.profile.entity.UserProfile;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserProfileMapper {
    UserProfile toUserProfile(ProfileCreationRequest request);
    UserProfileResponse toUserProfileResponse(UserProfile profile);
}
