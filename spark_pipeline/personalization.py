def score_venue(user_profile, venue_features):
    score = 0
    for key in user_profile:
        if key in venue_features:
            score += 1
    return score