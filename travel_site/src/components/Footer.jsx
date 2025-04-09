import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    return (
        <WrapperFooter className="container-fluid">
            <footer className="footer">
                <div className="container text-center text-md-start">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="/images/Logo.png" alt="" className="mb-2" />
                            <p className="text-muted">
                                <i className="fas fa-clock"></i> Book your trip in a minute, get full control for much longer.
                            </p>
                        </div>
                        <div className="col-md-3 footer-links">
                            <h5 style={{fontWeight: 'bold'}}>Company</h5>
                            <a href="#">About</a>
                            <a href="#">Careers</a>
                            <a href="#">Mobile</a>
                        </div>
                        <div className="col-md-3 footer-links" >
                            <h5 style={{fontWeight: 'bold'}}>Contact</h5>
                            <a href="#">Help/FAQ</a>
                            <a href="#">Press</a>
                            <a href="#">Affiliates</a>
                        </div>
                        <div className="col-md-3 text-center text-md-end">
                            <div className="social-icons">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center footer-bottom">
                        <p style={{fontWeight: 'bold'}}>&copy; Ui desgin by jadoo and Develop by Mr Ashir. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </WrapperFooter>
    )
}

export default Footer;

const WrapperFooter = styled.section`
.footer {
    background-color: var(--text-color-02);
    color: var(--text-color-01);
    padding: 50px 0;
}

.footer-logo {
    font-size: 24px;
    font-weight: bold;
    color: var(--main-color-00);
}

.footer-links a {
    color: var(--text-color-01);
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    transition: 0.3s;
}

.footer-links a:hover {
    color: var(--text-color-00);
}

.social-icons a {
    color: var(--text-color-01);
    box-shadow: 2px 3px 2px var(--text-color-01);
    padding: 20px;
    font-size: 20px;
    margin-right: 15px;
    transition: 0.3s;
    border-radius: 100%;
    border: 1px solid var(--text-color-01);
}

.social-icons a:hover {
    background: linear-gradient(var(--main-color-00), var(--text-color-00));
    color: var(--text-color-02);
}

.footer-bottom {
    margin-top: 30px;
    border-top: 1px solid #444;
    padding-top: 20px;
    font-size: 14px;
    background: white;
}
`;
