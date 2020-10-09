import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';



class InfoPage extends React.Component {

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_ITEMS'

    })
  }

  render() {
    console.log('Props is:', this.props);
    return (
      <div>
        <p>Info Page</p>
        {this.props.store.items.map((item, i) =>

          <img key={i} src={item.image_url} />
        )}

      </div>
    )
  }
}

export default connect(mapStoreToProps)(InfoPage);
