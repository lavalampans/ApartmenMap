import React from "react";
import Spinner from "./tools/spinner";
/* import Apartments from "./apartments/apartments"; */
import Header from "./header/header";
import Map from "./header/map";
import firebase from "firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./header/dashboard/dashboard";
import Shortcut from "./tools/shortcut";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: {},
      searchTerm: "",
      cvsLink: ""
    };
    this.handleChange = this.handleChange.bind(this);
    //this.handleExport = this.handleExport.bind(this);
    this.handleChangeDropDown = this.handleChangeDropDown.bind(this);
    this.initialState = {};
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleChangeDropDown = e => {
    this.setState({ searchTerm: e.target.innerHTML });
  };

  render() {
    return (
      <Router>
        <Header
          handleChange={this.handleChange}
          handleExport={this.handleExport}
          handleChangeDropDown={this.handleChangeDropDown}
          results={this.state.loading ? 0 : this.searchfilter().length}
          adress={this.state.loading ? [] : this.searchfilter()}
          cvsLink={this.state.cvsLink}
        />
        <Switch>
        <Route path="/" exact>
          <Shortcut/>
        </Route>
              <Route path="/dashboard" component={() => <Dashboard adress={this.state.loading? [] : this.searchfilter()  } />} />
        </Switch>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <Map results={this.searchfilter()} squareMeterPrice={this.state.squareMeterPrice} />
        )}
      </Router>
    );
  }

  componentDidMount = () => {
    firebase
      .database()
      .ref("sodermalm/apartments")
      .on("value", snapshot => {
        const array = [];
        snapshot.forEach(e => {
          array.push(e.val());
        });

        this.setState({
          data: array,
          loading: false,
          countResults: array.length,
          squareMeterPrice: squareMeterPrice(array)
        });
      });
  };

  searchfilter = () => {
    const filterApartments = this.state.data.filter(apartment => {
      return this.state.searchTerm.length < 2
        ? this.state.initialState
        : apartment.adress
            .toLowerCase()
            .includes(this.state.searchTerm.toLowerCase());
    });
    return filterApartments;
  };
}

function squareMeterPrice(props) {
  let sumEndPrice = 0;
  let sumSquareMeter = 0;
  if (props.length > 0) {
    for (let i = 0; i < props.length; i++) {
      sumEndPrice += Number(props[i].endPrice);
      sumSquareMeter += Number(props[i].squareMeter);
      return Math.round(sumEndPrice / sumSquareMeter);
    }
  } else {
    return 0;
  }
}

export default App;
