import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import styled from "styled-components";

const CounterSection = styled.section`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const VisionSection = styled.section`
  padding: 2rem;
  background-color: #e1e1e1;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 2rem;
  text-align: center; /* Centering the title */
`;

const Heading = styled.h1`
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CounterRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  font-size:1.8rem;
`;

const CounterColumn = styled.div`
  flex-basis: 30%;
  text-align: center;

  @media (max-width: 768px) {
    flex-basis: 45%;
  }
`;

const NumberWrapper = styled.div`
  font-size: 2rem; /* Adjusted size for numbers */
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller size for mobile */
  }
`;

const Text = styled.span`
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function Counter({ className, text, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const counterColumnsRef = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          counterColumnsRef.current[index] = entry.isIntersecting;
          setViewPortEntered(counterColumnsRef.current.every((visible) => visible));
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    const counterColumns = document.querySelectorAll(".counter-column");
    counterColumns.forEach((column, index) => {
      column.dataset.index = index;
      observer.observe(column);
      counterColumnsRef.current[index] = false;
    });

    observerRef.current = observer;

    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  return (
    <>
      <VisionSection>
        <Title>
          <Heading>Vision</Heading>
        </Title>
        <CounterRow>
          {[
            { count: 500000, text: "To Serve" },
            { count: 10000, text: "Create Jobs" },
          ].map(({ count, text }, index) => (
            <CounterColumn key={index} className="counter-column">
              <div className="counter-content">
                <NumberWrapper>
                  <strong data-number={count}>
                    <CountUp
                      {...rest}
                      start={viewPortEntered ? null : 0}
                      end={count}
                      duration={2.5}
                      prefix="+"
                    >
                      {({ countUpRef }) => (
                        <span className="number" ref={countUpRef} />
                      )}
                    </CountUp>
                  </strong>
                </NumberWrapper>
                <Text>{text}</Text>
              </div>
            </CounterColumn>
          ))}
        </CounterRow>
      </VisionSection>

      <CounterSection className={`counter ${className}`}>
        <Title>
          <Heading>What makes us unique</Heading>
        </Title>

        <CounterRow>
          {[
            { count: 500, text: "Health care Professionals" },
            { count: 5, text: "Years Experience" },
            { count: 10000, text: "Served Families" },
          ].map(({ count, text }, index) => (
            <CounterColumn key={index} className="counter-column">
              <div className="counter-content">
                <NumberWrapper>
                  <strong data-number={count}>
                    <CountUp
                      {...rest}
                      start={viewPortEntered ? null : 0}
                      end={count}
                      duration={2.5}
                      prefix="+"
                    >
                      {({ countUpRef }) => (
                        <span className="number" ref={countUpRef} />
                      )}
                    </CountUp>
                  </strong>
                </NumberWrapper>
                <Text>{text}</Text>
              </div>
            </CounterColumn>
          ))}
        </CounterRow>
      </CounterSection>
    </>
  );
}

export default Counter;