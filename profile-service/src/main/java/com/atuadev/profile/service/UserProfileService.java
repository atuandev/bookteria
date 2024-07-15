package com.atuadev.profile.service;

import com.atuadev.profile.dto.request.ProfileCreationRequest;
import com.atuadev.profile.dto.response.UserProfileResponse;
import com.atuadev.profile.entity.UserProfile;
import com.atuadev.profile.exception.AppException;
import com.atuadev.profile.exception.ErrorCode;
import com.atuadev.profile.mapper.UserProfileMapper;
import com.atuadev.profile.repository.UserProfileRepository;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = lombok.AccessLevel.PRIVATE)
@Slf4j
@Service
public class UserProfileService {
    UserProfileRepository userProfileRepository;
    UserProfileMapper userProfileMapper;

    public UserProfileResponse createProfile(ProfileCreationRequest request) {
        UserProfile userProfile = userProfileMapper.toUserProfile(request);
        userProfile = userProfileRepository.save(userProfile);
        return userProfileMapper.toUserProfileResponse(userProfile);
    }

    @PreAuthorize("hasRole('ADMIN')")
    public List<UserProfileResponse> getAllProfiles() {
        return userProfileRepository.findAll().stream().map(userProfileMapper::toUserProfileResponse).toList();
    }

    public UserProfileResponse getProfile(String id) {
        UserProfile userProfile = userProfileRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.PROFILE_NOT_FOUND));
        return userProfileMapper.toUserProfileResponse(userProfile);
    }
}
