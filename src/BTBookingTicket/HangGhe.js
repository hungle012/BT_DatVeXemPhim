import React, { Component } from 'react'
import { connect } from 'react-redux';
import { datGheAction } from '../redux/actions/BTBookingTicketActions';

class HangGhe extends Component {

    renderGhe() {
        let { hangGhe, soHangGhe, danhSachGheDangDat } = this.props;
        return hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = '';
            let disabled = false;
            let cssGheDangChon = '';

            // trạng thái ghế đã đặt
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabled = true;
            }

            if (soHangGhe === 0) {
                return <button className="rowNumber" key={index}>
                    {ghe.soGhe}
                </button>
            } else {
                let indexGheDangChon = danhSachGheDangDat.findIndex(gheDangChon => gheDangChon.soGhe === ghe.soGhe)

                if (indexGheDangChon !== -1) {
                    cssGheDangChon = 'gheDangChon'
                }
                return <button onClick={() => {
                    // const action = {
                    //     type:'DAT_GHE',
                    //     ghe:ghe
                    // }
                    // this.props.dispatch(action);
                    this.props.dispatch(datGheAction(ghe));
                }} className={`ghe ${cssGheDaDat} ${cssGheDangChon}`} disabled={disabled} key={index}>
                    {ghe.soGhe}
                </button>
            }

        })
    }

    render() {
        return (
            <div className="text-white text-left mt-2 mx-4 ">
                <button className="firstChar">
                    {this.props.hangGhe.hang}
                </button>
                {this.renderGhe()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BTBookingTicketReducer.danhSachGheDangDat
    }
}


export default connect (mapStateToProps)(HangGhe)