import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ItemTable extends React.Component {

    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_ITEMS'

        })
    }

    deleteItem = (userId) => {
        console.log('in deleteItem with user_id:', userId);

    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.store.items.map((item, i) =>
                            <tr>
                                <td>{item.description}</td>
                                <td>
                                    <img key={i} src={item.image_url} />
                                </td>
                                <td><button onClick={() => this.deleteItem(item.user_id)}>Delete</button></td>
                            </tr>
                        )}




                    </tbody>
                </table>


            </div>
        )
    }
}


export default connect(mapStoreToProps)(ItemTable);
