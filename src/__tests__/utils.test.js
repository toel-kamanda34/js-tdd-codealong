import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {

    // arrange
    const birthYear = 1984;
    const currentYear = new Date().getFullYear();
    const answer = currentYear - birthYear

    //act
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    
    // assert
    expect(ageOfPerson).toBe(answer);
  });
});