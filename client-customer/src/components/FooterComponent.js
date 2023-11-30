import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <div className='align-bottom'>
                <div id='suport'>
                    <div id='detail1'>
                        TỔNG ĐÀI HỖ TRỢ (MIỄN PHÍ)
                    </div>
                    <div id='detail2'>
                        Gọi mua: 1800.1234 (8:00 - 21:00)<br />
                        CSKH:    1800.5678 (8:00 - 21:00)<br />
                        TTBH:    1800.6565 (8:00 - 21:00)
                    </div>
                </div>
                <div id='info'>
                    KẾT NỐI VỚI CHÚNG TÔI
                    <Link to='https://www.facebook.com/profile.php?id=61551615561990&locale=vi_VN'><img src='facebook.png' alt="Logo"></img></Link>
                    <Link to='https://www.instagram.com/parfum.debibeo/'><img src='instagram.png' alt="Logo"></img></Link>
                    <Link to='https://www.tiktok.com/@the_gioi_nuoc_hoa'><img src='tik-tok.png' alt="Logo"></img></Link>
                    <Link to='https://twitter.com/ThePerfumeShop'><img src='twitter.png' alt="Logo"></img></Link>
                </div>
                {/* Add some spacing to the last line */}
                <div style={{ marginBottom: '20px' }}></div>
            </div>
        );
    }
}

export default Footer;
