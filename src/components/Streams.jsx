import React from "react";
import styled from "styled-components";
import { applyCardStyles } from "components/ReusableStyles";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

import logo1 from "assets/logo1.png";
import logo2 from "assets/logo2.png";
import logo3 from "assets/logo3.png";
import logo4 from "assets/logo4.png";

function Streams() {
  const data = [
    {
      data: 6780,
    },
    {
      data: 6680,
    },
    {
      data: 6500,
    },
    {
      data: 6300,
    },
    {
      data: 5900,
    },
    {
      data: 5700,
    },
    {
      data: 5500,
    },
    {
      data: 5300,
    },
    {
      data: 5100,
    },
    {
      data: 5090,
    },
    {
      data: 5300,
    },
    { data: 4500 },
    {
      data: 5000,
    },
    {
      data: 4700,
    },
    {
      data: 4400,
    },
    {
      data: 4800,
    },
    {
      data: 5300,
    },
    {
      data: 5800,
    },
    {
      data: 6000,
    },
    {
      data: 6300,
    },
    {
      data: 6580,
    },
    {
      data: 6500,
    },
    {
      data: 6300,
    },
    {
      data: 6500,
    },
    {
      data: 6700,
    },
    {
      data: 7000,
    },
    {
      data: 7300,
    },
    {
      data: 7500,
    },
    {
      data: 7700,
    },
    {
      data: 8090,
    },
    {
      data: 8190,
    },
    {
      data: 7990,
    },
    {
      data: 5800,
    },
    {
      data: 6000,
    },
    {
      data: 6300,
    },
    {
      data: 6780,
    },

    {
      data: 7700,
    },
    {
      data: 7500,
    },
    {
      data: 7300,
    },
    {
      data: 7000,
    },
    {
      data: 6700,
    },
    {
      data: 6500,
    },
    {
      data: 6300,
    },
    {
      data: 6500,
    },
    {
      data: 6780,
    },
    {
      data: 6300,
    },
    {
      data: 6000,
    },
    {
      data: 5800,
    },

    {
      data: 5490,
    },
    {
      data: 6000,
    },
    {
      data: 8000,
    },
  ];
  const sliderData = [
    {
      image: "data:image/png;base64,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",
      serviceName: "Online",
    },
    {
      image: "data:image/png;base64,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",
      serviceName: "Store",
    },
    {
      image: "data:image/png;base64,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",
      serviceName: "Delivery",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYst3-m_KvsB16vkuVrw197Q2sabUY9jxccg&usqp=CAU",
      serviceName: "International",
    },
  ];
  return (
    <Section>
      <div className="title-container">
        <div className="title">
          <h4>Sales</h4>
          <h1>450,210</h1>
        </div>
        <div className="slider">
          <div className="services">
            {sliderData.map(({ image, serviceName }) => {
              return (
                <div className="service" key={serviceName}>
                  <img src={image} alt={serviceName} />
                  <h6>{serviceName}</h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            //  width={500} height={400}
            data={data}
          >
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="10%"
                  stopColor="var(--primary-color)"
                  stopOpacity={0.4}
                />
                <stop offset="100%" stopColor="#000000ff" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="data"
              stroke="var(--font-color)"
              strokeWidth={2}
              fill="url(#colorview)"
              animationBegin={800}
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
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

    .title {
      h1 {
        font-size: 2rem;
        letter-spacing: 0.2rem;
      }
    }
    .slider {
      .services {
        display: flex;
        gap: 1rem;
        .service {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.6rem;
          min-width: 5rem;
          img {
            height: 2rem;
          }
        }
      }
    }
  }
  .chart {
    height: 10rem;
    .recharts-default-tooltip {
      background-color: var(--dark-background-color) !important;
      border: none !important;
      border-radius: 1rem;
      box-shadow: 0 0 60px 8px var(--box);
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    height: 100%;
    .title-container {
      flex-direction: column;
      gap: 0.5rem;
      .title {
        text-align: center;
      }
      .slider {
        .services {
          display: grid;
          grid-template-columns: 1fr 1fr;
          .service {
            gap: 0.5rem;
            min-width: 1rem;
          }
        }
      }
    }
  }
`;

export default Streams;
