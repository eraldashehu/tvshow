import React from "react";

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const record = this.props.record;
    const isFavorite = this.props.isFavorite;
    return (
      <div
        className="ui placeholder segment"
        style={{
          marginLeft: "20px",
          marginRight: "10px",
          marginTop: "10px",
          gridGap: "0 10px",
        }}
      >
        <div className="ui medium rounded image">
          <img
            src={record.show.image && record.show.image.original}
            style={{
              width: "310px",
            }}
          />

          <div className="ui segment">
            <h4 className="ui header " style={{ color: "deepskyblue" }}>
              <center> {record.show && record.show.name}</center>
            </h4>
            <table className="ui celled table">
              <tbody>
                <tr>
                  <td>
                    <strong>Country</strong> <br />
                    {record.show && record.show.network?.country?.code}
                  </td>
                  <td>
                    <strong> Name </strong> <br />
                    {record.show && record.show.network?.country?.name}
                  </td>
                </tr>

                <tr>
                  <td>
                    <strong> Timezone</strong>
                    <br />
                    {record.show && record.show.network?.country?.timezone}
                  </td>
                  <td>
                    <strong> Premiered </strong>
                    <br />
                    {record.show && record.show.premiered}
                  </td>
                </tr>
              </tbody>
            </table>
            {isFavorite ? (
              <button
                className="ui button grey "
                onClick={() => this.props.removeFromFav(record.id)}
              >
                <i className="minus icon"></i>
                Remove from Favorites
              </button>
            ) : (
              <button
                className="ui button  red"
                onClick={() => this.props.addToFav(record.id)}
              >
                <i className="heart icon"></i>
                Add to Favorites
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default MovieDetails;
