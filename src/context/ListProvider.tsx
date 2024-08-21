"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const Context = createContext<any | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [classes, setClasses] = useState([
    "BS101",
    "BS102",
    "BS103",
    "BS104",
    "BS105",
  ]);
  // useEffect(() => {s
  //   setTeachers([
  //     {
  //       name: "Aakash Bagale",
  //       subject: "Physcis",
  //       topic: "Wave Optics",
  //       initials: "AT",
  //       HPC: 4,
  //     },
  //     {
  //       name: "Aman Bagale",
  //       subject: "Physics",
  //       topic: "AC",
  //       initials: "ABT",
  //       HPC: 5,
  //     },
  //   ]);
  // }, []);

  const fillArray = useCallback(() => {
    const colArray = [];
    for (let row = 0; row < classes.length; row++) {
      colArray.push(".");
    }
    let array = [];
    for (let col = 0; col < 4; col++) {
      array.push(colArray);
    }
    return array;
  }, [classes]);

  const [valuesArray, setValuesArray] = useState(
    // removes the reference issue
    Array.from({ length: 4 }, () =>
      Array.from({ length: classes.length }, () => null)
    )
  );

  const transposeArray = useCallback(() => {
    const transpose = valuesArray[0].map((_, colIndex) =>
      valuesArray.map((row) => row[colIndex])
    );
    return transpose;
  }, [valuesArray]);

  return (
    <Context.Provider
      value={{
        classes,
        setClasses,
        valuesArray,
        setValuesArray,
        transposeArray,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useClasses() {
  const { classes, setClasses } = useContext(Context);
  return { classes, setClasses };
}
export function useValuesArray() {
  const { valuesArray, setValuesArray } = useContext(Context);
  return { valuesArray, setValuesArray };
}
export function useTeachersArray() {
  const { transposeArray } = useContext(Context);
  return { transposeArray };
}
