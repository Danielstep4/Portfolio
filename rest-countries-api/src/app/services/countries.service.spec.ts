import { CountriesService } from './countries.service';

describe('CountriesService Unit Testing', () => {
  const cService = new CountriesService();
  afterEach(() => {
    expect(cService.data).toBeDefined();
  });
  it('Should fetch data', async () => {
    const s = await cService.fetchData();
    expect(s).toBeUndefined();
  });
  it('getHomePageData returns resolved promise', async () => {
    const s = await cService.getHomePageData();
    expect(s).toBeDefined();
    expect(s.length).toBe(8);
  });
  it('getFilteredData returns resolved promise', async () => {
    const s = await cService.getFilteredData('Africa', '');
    expect(s).toBeDefined();
    expect(s.length).toBeTruthy();
    const notGood = await cService.getFilteredData('Africa', 'dawdawdadw');
    expect(notGood.length).toBe(0);
  });
  it('getOneCountry returns resolved promise', async () => {
    const country = await cService.getOneCountry('il');
    expect(country).toBeTruthy();
  });
  it('IntWithCommas should return string representation of integer with commas', () => {
    expect(cService.intWithCommas(1000)).toBe('1,000');
  });
});
