import React, { Component } from 'react'
import './Reason.scss';
// import PropTypes from 'prop-types'
import { Title01 } from '../shared/Title/Title01/Title01';
import ReasonItem from './ReasonItem/ReasonItem';

export class Reason extends Component {
  render() {
    return (
      <div className="Reason">
        <Title01 title={"Lý do chọn OSAC"} />
        <div className="Reason__Content">
          <ReasonItem 
            title={"Chất lượng tiêu chuẩn"}
            content={"Ưu tiên hàng đầu của chúng tôi là mang đến bữa ăn chất lượng và đảm bảo an toàn vệ sinh thực ..."}
            image={"chat_luong_tieu_chuan"}
          />
          <ReasonItem 
            title={"Nguồn thực phẩm an toàn"}
            content={"Hợp tác với các nhà cung cấp thực phẩm sạch và uy tín là yếu tố then chốt để duy trì chất ..."}
            image={"nguon_thuc_pham_an_toan"}
          />
          <ReasonItem 
            title={"Dịch vụ linh hoạt"}
            content={"The Caterers được tin cậy vì sự linh hoạt, đáp ứng mọi nhu cầu và mong muốn của khách hàng."}
            image={"dich_vu_linh_hoat"}
          />
          <ReasonItem 
            title={"Kinh nghiệm và uy tín"}
            content={"Bảo chứng cho thương hiệu và chất lượng của The Caterers chính là 10 năm kinh nghiệm cùng những ..."}
            image={"kinh_nghiem_va_uy_tinh"}
          />
          <ReasonItem 
            title={"Khách hàng là trọng tâm"}
            content={"Chúng tôi nuôi dưỡng mối quan hệ với khách hàng dựa trên lòng chính trực, sự tôn trọng, tin ..."}
            image={"khach_hang_la_trong_tam"}
          />
          <ReasonItem 
            title={"Luôn luôn cải tiến"}
            content={"Ý tưởng mới và sáng tạo luôn là động lực phát triển và cũng là chìa khóa thành công của chúng ..."}
            image={"luon_luon_cai_tien"}
          />
          
        </div>
      </div>
    )
  }
}

export default Reason
