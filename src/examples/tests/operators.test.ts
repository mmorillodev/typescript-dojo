import { Person } from "../types/Person";

const personA: Person = { name: "Jess", age: "30" };
const personB: Person = {
  name: "Matheus",
  age: "21",
  address: { street: "lalala", number: 0, country: "" },
};

describe("Comparing question mark and pipe operators", () => {
  it("Should have the same behaviours, when person without country", () => {
    const countryPersonA_Question = personA.address?.country ?? "BR";
    const countryPersonA_Pipe = personA.address?.country || "BR";

    expect(countryPersonA_Question).toEqual("BR");
    expect(countryPersonA_Pipe).toEqual("BR");
  });
  it("Should have different behaviours, when person with empty country", () => {
    const countryPersonB_Question = personB.address?.country ?? "BR";
    const countryPersonB_Pipe = personB.address?.country || "BR";

    expect(countryPersonB_Question).toEqual("");
    expect(countryPersonB_Pipe).toEqual("BR");
  });
});
