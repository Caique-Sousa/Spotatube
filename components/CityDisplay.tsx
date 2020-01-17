import React from "react";
import Link from "next/link";
import styled from "styled-components";
import CityCategory from "./CityCategory";

const cities = [
  {
    city: "London",
    cityTitle: "Love living in",
    numberOfTours: 1230,
    height: undefined
  },
  { city: "Madrid", cityTitle: "Make a smart move to", numberOfTours: 864, height: undefined },
  {
    city: "Berlin",
    cityTitle: "Build a future in",
    numberOfTours: 632,
    height: '100%'
  },
  {
    city: "Lisbon",
    cityTitle: "A laid back lifestyle in",
    numberOfTours: 356,
    height: undefined
  },
  {
    city: "Dublin",
    cityTitle: "Dive headfirst into",
    numberOfTours: 567,
    height: undefined
  }
];

const RowContainer = styled.div`
  display: flex;
  padding-left: 20px;
  margin-bottom: 29px;
`;

const SimpleContainer = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const DoubleContainer = styled.div`
  flex: 2;
  margin-right: 20px;
`;

const CityColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <>
      <div>
        <RowContainer>
          <SimpleContainer>
            <Link href={`/${cities[0].city}`}>
              <a>
                <CityCategory
                  city={cities[0].city}
                  cityTitle={cities[0].cityTitle}
                  numberOfTours={cities[0].numberOfTours}
                  height={cities[0].height}
                />
              </a>
            </Link>
          </SimpleContainer>
          <DoubleContainer>
            <Link href={`/${cities[1].city}`}>
              <a>
                <CityCategory
                  city={cities[1].city}
                  cityTitle={cities[1].cityTitle}
                  numberOfTours={cities[1].numberOfTours}
                  height={cities[1].height}
                />
              </a>
            </Link>
          </DoubleContainer>
        </RowContainer>
        <RowContainer>
          <DoubleContainer>
            <Link href={`/${cities[2].city}`}>
              <a>
                <CityCategory
                  city={cities[2].city}
                  cityTitle={cities[2].cityTitle}
                  numberOfTours={cities[2].numberOfTours}
                  height={cities[2].height}
                />
              </a>
            </Link>
          </DoubleContainer>
          <SimpleContainer>
            <CityColumn>
              <Link href={`/${cities[3].city}`}>
                <a>
                  <CityCategory
                    city={cities[3].city}
                    cityTitle={cities[3].cityTitle}
                    numberOfTours={cities[3].numberOfTours}
                    height={cities[3].height}
                  />
                </a>
              </Link>
              <Link href={`/${cities[4].city}`}>
                <a>
                  <CityCategory
                    city={cities[4].city}
                    cityTitle={cities[4].cityTitle}
                    numberOfTours={cities[4].numberOfTours}
                    height={cities[4].height}
                  />
                </a>
              </Link>
            </CityColumn>
          </SimpleContainer>
        </RowContainer>
      </div>
    </>
  );
};
