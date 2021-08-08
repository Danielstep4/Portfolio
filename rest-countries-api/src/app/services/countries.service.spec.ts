import { CountriesService } from './countries.service';

describe('CountriesService Unit Testing', () => {
  const cService = new CountriesService();

  it('Should fetch data', () => {
    expectAsync(cService.fetchData()).toBeResolved();
    expect(cService.data).toBeDefined();
  });
});
