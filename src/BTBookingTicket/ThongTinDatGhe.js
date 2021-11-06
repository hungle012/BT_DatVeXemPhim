import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/actions/BTBookingTicketActions'

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className="mt-3">
                    <button className="gheDuocChon"></button>
                    <span className="text-light" style={{ fontSize: '25px' }}>Ghế đã đặt</span>
                    <br />
                    <button className="gheDangChon"></button>
                    <span className="text-light" style={{ fontSize: '25px' }}>Ghế đang đặt</span>
                    <br />
                    <button className="ghe ml-0"></button>
                    <span className="text-light" style={{ fontSize: '25px' }}>Ghế chưa đặt</span>
                </div>

                <div className="mt-4">
                    <table className="table table-bordered">
                        <thead>
                            <tr className="text-light" style={{fontSize:30}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody className="text-warning">
                        {this.props.danhSachGheDangDat.map((gheDangChon, index) => {
                                return <tr key={index}>
                                    <td>{gheDangChon.soGhe}</td>
                                    <td>{gheDangChon.gia.toLocaleString()}</td>
                                    <td><button className="btn btn-danger" onClick={() => {
                                        this.props.dispatch(huyGheAction(gheDangChon.soGhe))
                                    }}> Hủy</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className="text-warning">
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                    return tongTien += gheDangDat.gia;
                                }, 0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>


        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BTBookingTicketReducer.danhSachGheDangDat
    }
}


export default connect(mapStateToProps)(ThongTinDatGhe);