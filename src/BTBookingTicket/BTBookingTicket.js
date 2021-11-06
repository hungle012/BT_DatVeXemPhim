import React, { Component } from 'react'
import './BTBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheData from '../data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BTBookingTicket extends Component {

    renderHangGhe() {
        return danhSachGheData.map((hangGhe,index) => {
            return <div className="px-4" key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }

    render() {
        return (
            <div className="bookingMovie" style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: "url('./img/bgmovie.jpg')", backgroundSize: '100%' }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 text-center">
                                <h1 className="text-warning">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                                <div className="screen mx-auto">
                                    <p className="mb-0">Màn hình</p>
                                </div>
                                {this.renderHangGhe()}
                            </div>
                            <div className="col-4">
                                <h2 className="text-light text-center mt-4">DANH SÁCH GHẾ BẠN CHỌN</h2>
                                <ThongTinDatGhe/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
