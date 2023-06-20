import { createContext, useMemo, useState } from "react";

const CountContext = createContext({
  count: 0,
  plusCount: () => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const CountProvider = ({ children }: Props): JSX.Element => {
  const [count, setCount] = useState(0);

  const value = useMemo(
    () => ({
      count,
      plusCount: () => {
        setCount(count + 1);
      },
    }),
    [count],
  );

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

export { CountContext, CountProvider };
