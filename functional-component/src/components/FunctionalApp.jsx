import React, { useRef, useState, useEffect } from "react";

// component A -> counter: 0
// click alert, and then click add one
// rerender -> component B
// after 3s, alert -> component A

// custom hook - to share some common logic between components
const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAddOne = () => {
    setCounter((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {}, []);

  return [counter, handleAddOne];
};

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(() => {
        setData();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [data, loading];
};

const A = () => {
  const [counter, handleAddOne] = useCounter(1);
  const [data, loading] = useFetch(url);

  return;
};

export const FunctionalApp = () => {
  const [counter, handleAddOne] = useCounter(1);
  // const [counter, setCounter] = useState(0);
  // const counterRef = useRef();

  // counterRef.current = counter;

  // componentDidMount, componentDidUpdate, componentWillUnmount

  // callback function, dependency array
  // useEffect(() => {
  //   console.log(counter);
  // }, []);

  useEffect(() => {
    console.log("updated", counter);
  }, [counter]);

  // useEffect(() => {
  //   console.log("no dependency array");
  // });

  // initial render -> create interval 0
  // update counter -> trigger cleanup function -> call the useEffect callback for the second time -> create interval 1
  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log("interval", counter);
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervalID);
  //   };
  // }, [counter]);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button
        onClick={() => {
          handleAddOne();
        }}
      >
        Add one
      </button>
      {/* <button
        onClick={() => {
          setTimeout(() => {
            alert(counterRef.current);
          }, 3000);
        }}
      >
        Alert counter value
      </button> */}
    </div>
  );
};

// hoc
const withCounter = (WrappedComponent) => {
  return class NewComponent extends React.Component {
    state = {
      counter: 0,
    };

    handleAddOne = () => {
      this.setState({ counter: this.state.counter + 1 });
    };

    render() {
      return (
        <WrappedComponent
          counter={this.state.counter}
          handleAddOne={this.handleAddOne}
          {...this.props}
          {...this.state}
        />
      );
    }
  };
};

export class ClassApp extends React.Component {
  render() {
    const { counter, handleAddOne, foo } = this.props;
    console.log(foo);
    return (
      <div>
        <p>Counter: {counter}</p>
        <button onClick={() => handleAddOne()}>Add one</button>
        {/* <button
          onClick={() => {
            setTimeout(() => {
              alert(this.state.counter);
            }, 3000);
          }}
        >
          Alert counter value
        </button> */}
      </div>
    );
  }
}

export const ClassComponentWithCounter = withCounter(ClassApp);

export const FunctionalComponentWithCounter = withCounter(FunctionalApp);
