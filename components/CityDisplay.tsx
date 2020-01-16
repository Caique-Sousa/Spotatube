import React from 'react';
import Link from 'next/link';

const cities = ['Madrid', 'London', 'Barcelona', 'Berlin', 'Paris'];

export default () => {
  return (
    <ul>
      {cities.map(city => (
        <li>
          <Link href={`/${city}`}>
            <a>{city}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
