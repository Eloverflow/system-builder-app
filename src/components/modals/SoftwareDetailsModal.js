import React from "react";
import { connect } from "react-redux";
import { fetchSoftwareDetails } from "/softwareDetailActions";

class SoftwareDetailModal extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchSoftwareDetails());
  }

  render() {
    const { error, loading, softwareDetails } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {softwareDetails.map(softwareDetail =>
          <li key={softwareDetail.key}>{softwareDetail.value}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  softwareDetails: state.softwareDetails.items,
  loading: state.softwareDetails.loading,
  error: state.softwareDetails.error
});

export default connect(mapStateToProps)(SoftwareDetailModal);