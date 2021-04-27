import React from "react";
import { CitySelect, Wrapper } from "../../components";

export function City({ handleCity, cities, city }) {
  return (
    <CitySelect>
      <Wrapper>
        <select onChange={handleCity} value={city}>
          {cities.map((item) => (
            <option key={item.id} value={item.name} data-testid='select-option'>
              {item.name}
            </option>
          ))}
        </select>
      </Wrapper>
    </CitySelect>
  );
}
