import React from "react";
import { JsxElement } from "typescript";
import CharacterPage from "../components/Pages/CharacterPage/CharacterPage";

import { checkNull } from "../components/RandomChar/RandomChar";


type state = {
    item: object,
    stateError: boolean,
}

export interface InjectedProps {
    stateProp: state,
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
      return <WrappedComponent stateProp={this.state} selectItem={this.selectItem}/>;
    }
  };
};

export default withData;

const CharacterPageWith = withData(CharacterPage)