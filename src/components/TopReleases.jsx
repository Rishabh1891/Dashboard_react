import React from "react";
import styled from "styled-components";
import { applyCardStyles } from "components/ReusableStyles";
import { BsChevronRight } from "react-icons/bs";
import india from "assets/india.png";
import canada from "assets/canada.png";
import united from "assets/united.png";


function TopReleases() {
  const places = [
    {
      title: "Ambala",
      plays: 64,
      image: india,
    },
    {
      title: "Chandigarh",
      plays: 124,
      image: india,
    },
    {
      title: "Ayodhya",
      plays: 500,
      image: india,
    },
    {
      title: "Toronto",
      plays: 238,
      image: canada,
    },
    {
      title: "New York",
      plays: 334,
      image: united,
    },
    {
      title: "Rajasthan",
      plays: 25,
      image: india,
    },
  ];
  return (
    <Section>
      <div className="title-container">
        <div className="title">
          <h4>Top Buyers</h4>
        </div>
        <div className="filters">
          <span>All Franchiese</span>
          <button>New Franchiese</button>
        </div>
      </div>
      <div className="musics">
        {places.map(({ title, plays, image }) => {
          return (
            <div className="music" key={title}>
              <div className="details">
                <div className="image">
                  <img src={image} alt="title" />
                </div>
                <div className="info">
                  <h5>{title}</h5>
                  <h6>{plays}K Buyers</h6>
                </div>
              </div>
              <BsChevronRight />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${applyCardStyles}
  color:white;
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    .title {
    }
    .filters {
      display: flex;
      align-items: center;
      gap: 3rem;
      color: var(--font-color);
      button {
        background-color: var(--primary-color);
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem 0.8rem;
        cursor: pointer;
        color: var(--font-color);
        font-weight: bolder;
      }
    }
  }
  .musics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    .music {
      border-bottom: 0.1rem solid #242424;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .details {
        display: flex;
        gap: 1rem;
        .image {
          img {
            height: 2.5rem;
          }
        }
        .info {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          h6 {
            font-weight: 100;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title-container {
      flex-direction: column;
      gap: 0.5rem;
      .filters {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
    .musics {
      grid-template-columns: 1fr;
    }
  }
`;

export default TopReleases;
