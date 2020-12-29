import React from "react";
import { connect } from "react-redux";
import { fetchSoftwares } from "../actions/softwareActions";
import SoftwareCard from "./SoftwareCard";

class SoftwareList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchSoftwares());
  }

  render() {
    const { error, loading, softwares } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <h3>Softwares list</h3>
        {softwares.map(software =>
            <SoftwareCard key={software.id} software={software} />
        )}
      </>
    );
  }
}



const mapStateToProps = state => ({
  softwares: state.softwares.softwares,
  loading: state.softwares.loading,
  error: state.softwares.error
});

export default connect(mapStateToProps)(SoftwareList);