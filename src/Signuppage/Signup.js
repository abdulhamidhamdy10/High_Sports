import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

function Signup() {
    // استخدام الحالة لتتبع قيم حقول النموذج
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
        repeatPassword: '',
        agreedToTerms: false
    });

    // تحديث قيم حقول النموذج عند تغيير الإدخال
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // تقديم النموذج
    const handleSubmit = (e) => {
        e.preventDefault();
        // قم بفحص صحة البيانات هنا (مثلا: التحقق من صحة البريد الإلكتروني وتطابق كلمة المرور وما إلى ذلك)
        console.log(formData);
        // هنا يمكنك إرسال البيانات إلى الخادم أو إجراء أي عملية أخرى
    };

    return (
        <div className='signup'>
            <Container fluid className='containerone'>
                <Row className="rowone">
                    <Col md="8" className="colone">
                        <h1>HIGH SPORTS</h1>
                        <img src='/images/navbar/Untitled-3.png' alt="High Sports Logo" />
                    </Col>
                    <Col md="4" className="coltwo">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="fullName">FULL NAME</label>
                                <input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Name.." required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-mail </label>
                                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address.." required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Username.." required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="..............." required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="repeatPassword">Repeat Password</label>
                                <input type="password" className="form-control" id="repeatPassword" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} placeholder="..............." required />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="agreedToTerms" name="agreedToTerms" checked={formData.agreedToTerms} onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })} required />
                                <h5 label className="form-check-label" htmlFor="agreedToTerms">I agree to the <span>Terms Of User</span></h5>
                            </div>
                            <div className='submit'>
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                                <a href='#'><h5>sign in</h5></a>
                            </div>
                          
                           <div className='icons'>
                                <h5 className='facebook'><i class="fa-brands fa-facebook-f"></i></h5>
                                <h5 className='goagle'><i class="fa-brands fa-google-plus-g"></i></h5>
                                <h5 className='twiter'><i class="fa-brands fa-twitter"></i></h5>
                           </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signup;
