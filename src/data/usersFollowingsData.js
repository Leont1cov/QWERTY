import usersData from "./usersData"

const usersFollowingsData = {
    john_smith: [
        { ...usersData.michael_brown },
        { ...usersData.alice_johnson },
    ],
    michael_brown: [
        { ...usersData.john_smith },
        { ...usersData.benjamin_clark },
    ],
    alice_johnson: [{ ...usersData.benjamin_clark }],
    emily_davis: [],
    daniel_wilson: [],
    sarah_miller: [],
    david_thompson: [],
    jessica_taylor: [],
    matthew_anderson: [],
    laura_white: [],
    christopher_martin: [],
    olivia_garcia: [],
    james_lee: [],
    sophia_hernandez: [],
    benjamin_clark: [],
    amanda_rodriguez: [],
    joshua_hall: [],
    hannah_allen: [],
    andrew_young: [],
    natalie_king: [],
}

export default usersFollowingsData
