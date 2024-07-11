package com.atuadev.profile.controller;

import com.atuadev.profile.dto.request.ProfileCreationRequest;
import com.atuadev.profile.dto.response.UserProfileResponse;
import com.atuadev.profile.service.UserProfileService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = lombok.AccessLevel.PRIVATE)
@RequestMapping("/users")
public class UserProfileController {
    UserProfileService userProfileService;

    @PostMapping
    UserProfileResponse createUserProfile(@RequestBody ProfileCreationRequest request) {
        return userProfileService.createProfile(request);
    }

    @GetMapping("/{profileId}")
    UserProfileResponse getUserProfile(@PathVariable String profileId) {
        return userProfileService.getProfile(profileId);
    }
}
