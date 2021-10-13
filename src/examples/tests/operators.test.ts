import { Person } from '../types/Person';

const personA: Person = { name: 'Jess', age: '30' };
const personB: Person = {
  name: 'Matheus',
  age: '21',
  address: { street: 'lalala', number: 0, country: '' },
};

describe('Comparing question mark and pipe operators', () => {
  it('Should have the same behaviours, when person without country', () => {
    const countryPersonAQuestion = personA.address?.country ?? 'BR';
    const countryPersonAPipe = personA.address?.country || 'BR';

    expect(countryPersonAQuestion).toEqual('BR');
    expect(countryPersonAPipe).toEqual('BR');
  });
  it('Should have different behaviours, when person with empty country', () => {
    const countryPersonBQuestion = personB.address?.country ?? 'BR';
    const countryPersonBPipe = personB.address?.country || 'BR';

    expect(countryPersonBQuestion).toEqual('');
    expect(countryPersonBPipe).toEqual('BR');
  });
});
