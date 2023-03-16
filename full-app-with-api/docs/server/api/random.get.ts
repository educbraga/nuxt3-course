import { countryList } from "@doubco/countries";

export default () => { 
	return countryList[Math.floor(Math.random() * countryList.length)];
}