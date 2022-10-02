import React from "react"; 

import { checkNull } from "../components/RandomChar/RandomChar";


type TypeState = {
    item: object,
    stateError: boolean,
}

export interface InjectedProps {
    stateProp: TypeState,
    selectItem: <T extends object>(item: T) => void,
}

const withData = (WrappedComponent: React.ComponentType<InjectedProps>) => {

    return class extends React.Component {
        state = {
            item: {},
            stateError: false,
    };

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
      this.setState({ stateError: true });
    }

    selectItem<T extends object>(item: T) {
      checkNull<T>(item);
      this.setState({ person: item });
    }

    render() {
      return <WrappedComponent stateProp={this.state} selectItem={this.selectItem.bind(this)}/>;
    }
  };
};

export default withData;

